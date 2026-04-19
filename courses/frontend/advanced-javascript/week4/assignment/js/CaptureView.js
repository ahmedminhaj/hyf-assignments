class CaptureView {
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
    this.error.textContent = '';                    
    const box = document.createElement('div');
    box.className = 'error-box';
    box.textContent = msg;                        
    this.error.appendChild(box);
  }

  clearError() {
    this.error.textContent = '';
  }

  setLoading(on) {
    this.btn.disabled = on;
    this.btn.replaceChildren();  

    if (on) {
      const spinner = document.createElement('span');
      spinner.className = 'spinner';
      this.btn.appendChild(spinner);
      this.btn.appendChild(document.createTextNode('Capturing…'));
    } else {
      this.btn.textContent = 'Capture';
    }
  }

  async capture() {
    this.clearError();
    this.preview.replaceChildren();

    let url;
    try {
      url = UrlValidator.validate(this.input.value);
    } catch (e) {
      this.showError(e);
      return;
    }

    this.setLoading(true);
    let imageUrl;
    try {
      imageUrl = await ScreenshotService.capture(url);
    } catch (e) {
      this.showError(e instanceof AppError ? e : new AppError(e.message));
      this.setLoading(false);
      return;
    }

    this.setLoading(false);
    const screenshot = new Screenshot({ url, imageUrl });
    this.preview.appendChild(screenshot.render());
  }
}