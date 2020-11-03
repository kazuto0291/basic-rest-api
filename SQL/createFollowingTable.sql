CREATE TABLE following (
  id INTEGER NOT NULL PRIMARY KEY,
  following_id INTEGER NOT NULL,
  followed_id INTEGER NOT NULL,
  created_at TEXT NOT NUll DEFAULT (DATETIME('now', 'localtime')),
  updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  FOREIGN KEY (following_id) references users(id),
  FOREIGN KEy (followed_id) references users(id)
);

INSERT INTO following (following_id, followed_id) values (1,2);
INSERT INTO following (following_id, followed_id) values (1,3);
INSERT INTO following (following_id, followed_id) values (1,4);
INSERT INTO following (following_id, followed_id) values (2,1);
INSERT INTO following (following_id, followed_id) values (2,3);
INSERT INTO following (following_id, followed_id) values (3,4);
INSERT INTO following (following_id, followed_id) values (4,3);