class StorageService {
  static BASE = 'https://crudcrud.com/api/2a01759b5dbd42629cc37e794c59fcf7/screenshots';

  static async save(data) {
    let res;
    try {
      res = await fetch(StorageService.BASE, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
    } catch (e) {
      throw new NetworkError(e.message);
    }
    if (!res.ok) throw new StorageError(`Save failed (HTTP ${res.status})`);
    return res.json();
  }

  static async getAll() {
    let res;
    try {
      res = await fetch(StorageService.BASE);
    } catch (e) {
      throw new NetworkError(e.message);
    }
    if (!res.ok) throw new StorageError(`Load failed (HTTP ${res.status})`);
    return res.json();
  }

  static async remove(id) {
    let res;
    try {
      res = await fetch(`${StorageService.BASE}/${id}`, { method: 'DELETE' });
    } catch (e) {
      throw new NetworkError(e.message);
    }
    if (!res.ok) throw new StorageError(`Delete failed (HTTP ${res.status})`);
  }
}