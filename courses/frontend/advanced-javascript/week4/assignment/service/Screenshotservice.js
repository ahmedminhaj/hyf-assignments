class ScreenshotService {
  static async capture(url) {
    const params = new URLSearchParams({ url, width: '1280', height: '720' });

    let res;
    try {
      res = await fetch(`${Config.RAPIDAPI_URL}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type':    'application/json',
          'x-rapidapi-host': Config.RAPIDAPI_HOST,
          'x-rapidapi-key':  Config.RAPIDAPI_KEY,
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
    try {
      json = await res.json();
    } catch {
      throw new ApiError('Could not parse response from screenshot service.');
    }

    const imageUrl = json.screenshotUrl || json.screenshot || json.url || json.image;
    if (!imageUrl) throw new ApiError('No image URL in response: ' + JSON.stringify(json));
    return imageUrl;
  }
}