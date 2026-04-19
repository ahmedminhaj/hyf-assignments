class AppError extends Error {
  constructor(msg) { super(msg); this.name = 'AppError'; }
  toUserMessage() { return this.message; }
}

class ValidationError extends AppError {
  constructor(msg) { super(msg); this.name = 'ValidationError'; }
}

class ApiError extends AppError {
  constructor(msg, status = null) { super(msg); this.name = 'ApiError'; this.status = status; }
  toUserMessage() { return `API error${this.status ? ' (' + this.status + ')' : ''}: ${this.message}`; }
}

class NetworkError extends AppError {
  constructor(msg) { super(msg); this.name = 'NetworkError'; }
  toUserMessage() { return 'Network error — check your connection.'; }
}

class StorageError extends AppError {
  constructor(msg) { super(msg); this.name = 'StorageError'; }
  toUserMessage() { return `Storage error: ${this.message}`; }
}
