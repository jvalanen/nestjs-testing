CREATE USER nester WITH PASSWORD 'nester';
CREATE DATABASE nesting;
GRANT ALL PRIVILEGES ON DATABASE nesting TO nester;

-- Currently these doesn't appear to 'nesting' database but need to be added manually
CREATE TABLE relative (id integer PRIMARY KEY, name VARCHAR);
INSERT INTO relative (id, name) VALUES (1, 'Jouni');
