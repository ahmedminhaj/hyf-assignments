class Screenshot {
  constructor({ url, imageUrl }) {
    this.url = url;
    this.imageUrl = imageUrl;
  }

  render() {
    const shortUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const card = document.createElement('div');
    card.className = 'preview-card';
    card.innerHTML = `
      <div class="preview-bar">
        <span class="preview-url-text">${shortUrl}</span>
        <a href="${this.imageUrl}" target="_blank">
          <button class="primary">View</button>
        </a>
      </div>
      <img class="preview-img" src="${this.imageUrl}" alt="Screenshot of ${shortUrl}" />`;

    return card;
  }
}
