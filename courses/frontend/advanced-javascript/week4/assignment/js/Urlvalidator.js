class UrlValidator {
  static validate(raw) {
    const trimmed = (raw ?? '').trim();
    if (!trimmed) throw new ValidationError('Please enter a URL.');

    const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : 'https://' + trimmed;

    let parsed;
    try {
      parsed = new URL(withScheme);
    } catch {
      throw new ValidationError(`"${trimmed}" is not a valid URL.`);
    }

    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new ValidationError('URL must start with http or https.');
    }

    return parsed.href;
  }
}