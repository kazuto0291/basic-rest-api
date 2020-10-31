CREATE TABLE users (
  id INTEGER NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  profile TEXT,
  created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  update_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  date_of_birth TEXT
);