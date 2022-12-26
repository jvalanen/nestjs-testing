CREATE USER nester WITH PASSWORD 'nester';
CREATE DATABASE nesting;
GRANT ALL PRIVILEGES ON DATABASE nesting TO nester;

CREATE TABLE relative (id integer PRIMARY KEY, name VARCHAR);
INSERT INTO relative (id, name) VALUES (1, 'Jouni');
