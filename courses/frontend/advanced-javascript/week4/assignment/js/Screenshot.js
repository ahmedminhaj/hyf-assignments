class Screenshot {
  constructor({ id = null, url, imageUrl, savedAt = null }) {
    this.id = id;
    this.url = url;
    this.imageUrl = imageUrl;
    this.savedAt = savedAt ?? new Date().toISOString();
  }

  async save() {
    const record = await StorageService.save({
      url: this.url,
      imageUrl: this.imageUrl,
      savedAt: this.savedAt,
    });
    this.id = record.id;
    return this;
  }

  async delete() {
    if (!this.id) throw new StorageError('No ID — screenshot was never saved.');
    await StorageService.remove(this.id);
  }

  renderPreview(onSave) {
    const shortUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const card = document.createElement('div');
    card.className = 'preview-card';

    const bar = document.createElement('div');
    bar.className = 'preview-bar';

    const label = document.createElement('span');
    label.className = 'preview-url-text';
    label.textContent = shortUrl;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'primary';
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => onSave(saveBtn));

    bar.appendChild(label);
    bar.appendChild(saveBtn);

    const img = document.createElement('img');
    img.className = 'preview-img';
    img.src = this.imageUrl;
    img.alt = `Screenshot of ${shortUrl}`;

    card.appendChild(bar);
    card.appendChild(img);

    return card;
  }

  renderCard(onDelete) {
    const shortUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    const date = new Date(this.savedAt).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
    });

    const card = document.createElement('article');
    card.className = 'shot-card';

    const img = document.createElement('img');
    img.className = 'shot-card__img';
    img.src = this.imageUrl;
    img.alt = `Screenshot of ${shortUrl}`;
    img.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'shot-card__body';

    const urlText = document.createElement('p');
    urlText.className   = 'shot-card__url';
    urlText.textContent = shortUrl;
    urlText.title       = this.url;

    const footer = document.createElement('div');
    footer.className = 'shot-card__footer';

    const dateEl = document.createElement('span');
    dateEl.className   = 'shot-card__date';
    dateEl.textContent = date;

    const delBtn = document.createElement('button');
    delBtn.className   = 'danger small';
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => onDelete(this, card, delBtn));

    footer.appendChild(dateEl);
    footer.appendChild(delBtn);
    body.appendChild(urlText);
    body.appendChild(footer);
    card.appendChild(img);
    card.appendChild(body);

    return card;
  }
}