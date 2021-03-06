DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS routes;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE routes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT REFERENCES users(id),
  location TEXT NOT NULL,
  name TEXT NOT NULL,
  rating TEXT NOT NULL,
  notes TEXT NOT NULL
);
