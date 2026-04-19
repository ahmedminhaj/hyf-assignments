class GalleryView {
  constructor() {
    this.area = document.getElementById('cards-area');
    this.errorEl = document.getElementById('gallery-error');
    document.getElementById('refresh-btn').addEventListener('click', () => this.load());
  }

  showError(err) {
    const msg = err instanceof AppError ? err.toUserMessage() : err.message;
    this.errorEl.replaceChildren();
    const box = document.createElement('div');
    box.className   = 'error-box';
    box.textContent = msg;
    this.errorEl.appendChild(box);
  }

  clearError() { this.errorEl.replaceChildren(); }

  async load() {
    this.clearError();
    this.area.replaceChildren();

    const loading = document.createElement('p');
    loading.className   = 'empty';
    loading.textContent = 'Loading…';
    this.area.appendChild(loading);

    let records;
    try {
      records = await StorageService.getAll();
    } catch (e) {
      this.showError(e instanceof AppError ? e : new NetworkError(e.message));
      this.area.replaceChildren();
      return;
    }

    this.area.replaceChildren();

    if (!records.length) {
      const empty = document.createElement('p');
      empty.className   = 'empty';
      empty.textContent = 'No screenshots saved yet.';
      this.area.appendChild(empty);
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    records.forEach(record => {
      const screenshot = new Screenshot(record);
      const card = screenshot.renderCard((ss, cardEl, btn) => this.delete(ss, cardEl, btn));
      grid.appendChild(card);
    });

    this.area.appendChild(grid);
  }

  async delete(screenshot, cardEl, btn) {
    btn.disabled    = true;
    btn.textContent = '…';
    try {
      await screenshot.delete();
      cardEl.style.transition = 'opacity 0.2s';
      cardEl.style.opacity    = '0';
      setTimeout(() => {
        cardEl.remove();
        if (!this.area.querySelector('.shot-card')) {
          const empty = document.createElement('p');
          empty.className   = 'empty';
          empty.textContent = 'No screenshots saved yet.';
          this.area.replaceChildren(empty);
        }
      }, 200);
    } catch (e) {
      btn.disabled    = false;
      btn.textContent = 'Delete';
      this.showError(e instanceof AppError ? e : new AppError(e.message));
    }
  }
}