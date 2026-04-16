class CaptureView {
  static SS_API = 'https://website-screenshot6.p.rapidapi.com/screenshot';
  static SS_HOST = 'website-screenshot6.p.rapidapi.com';
  static SS_KEY = 'b1a99078abmsh1e71ac8425634c7p1777edjsn85d052714949';

  constructor() {
    this.btn = document.getElementById('capture-btn');
    this.input = document.getElementById('url-input');
    this.preview = document.getElementById('preview-area');
    this.error = document.getElementById('capture-error');

    this.btn.addEventListener('click', () => this.capture());
    this.input.addEventListener('keydown', e => { if (e.key === 'Enter') this.capture(); });
  }

  showError(err) {
    const msg = err instanceof AppError ? err.toUserMessage() : err.message;
    this.error.innerHTML = `<div class="error-box">${msg}</div>`;
  }

  clearError() { this.error.innerHTML = ''; }

  setLoading(on) {
    this.btn.disabled = on;
    this.btn.innerHTML = on ? `<span class="spinner"></span>Capturing…` : 'Capture';
  }

  validateUrl(raw) {
    const trimmed = (raw ?? '').trim();
    if (!trimmed) throw new ValidationError('Please enter a URL.');
    const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : 'https://' + trimmed;
    let parsed;
    try { parsed = new URL(withScheme); } catch {
      throw new ValidationError(`"${trimmed}" is not a valid URL.`);
    }
    if (!['http:', 'https:'].includes(parsed.protocol))
      throw new ValidationError('URL must start with http or https.');
    return parsed.href;
  }

  async fetchScreenshot(url) {
    const params = new URLSearchParams({ url, width: '1280', height: '720' });
    let res;
    try {
      res = await fetch(`${CaptureView.SS_API}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type':    'application/json',
          'x-rapidapi-host': CaptureView.SS_HOST,
          'x-rapidapi-key':  CaptureView.SS_KEY,
        },
      });
    } catch (e) {
      throw new NetworkError(e.message);
    }

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new ApiError(body || 'Screenshot service error.', res.status);
    }

    let json;
    try { json = await res.json(); } catch {
      throw new ApiError('Could not parse response from screenshot service.');
    }

    const imageUrl = json.screenshotUrl || json.screenshot || json.url || json.image;
    if (!imageUrl) throw new ApiError('No image URL in response: ' + JSON.stringify(json));
    return imageUrl;
  }

  async capture() {
    this.clearError();
    this.preview.innerHTML = '';

    let url;
    try {
      url = this.validateUrl(this.input.value);
    } catch (e) {
      this.showError(e);
      return;
    }

    this.setLoading(true);
    try {
      const imageUrl = await this.fetchScreenshot(url);
      const screenshot = new Screenshot({ url, imageUrl });
      this.preview.appendChild(screenshot.render());
    } catch (e) {
      this.showError(e instanceof AppError ? e : new AppError('Something went wrong.'));
    } finally {
      this.setLoading(false);
    }
  }
}