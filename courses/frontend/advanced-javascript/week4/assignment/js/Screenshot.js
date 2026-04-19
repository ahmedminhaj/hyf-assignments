class Screenshot {
  constructor({ url, imageUrl }) {
    this.url = url;
    this.imageUrl = imageUrl;
  }

  render() {
    const shortUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    const card = document.createElement('div');
    card.className = 'preview-card';

    const bar = document.createElement('div');
    bar.className = 'preview-bar';

    const label = document.createElement('span');
    label.className = 'preview-url-text';
    label.textContent = shortUrl;  

    const link = document.createElement('a');
    link.href     = this.imageUrl; 
    link.download = 'screenshot.png';

    const downloadBtn = document.createElement('button');
    downloadBtn.className   = 'primary';
    downloadBtn.textContent = 'Download';
    link.appendChild(downloadBtn);

    bar.appendChild(label);
    bar.appendChild(link);

    const img = document.createElement('img');
    img.className = 'preview-img';
    img.src = this.imageUrl;       
    img.alt = `Screenshot of ${shortUrl}`;

    card.appendChild(bar);
    card.appendChild(img);

    return card;
  }
}