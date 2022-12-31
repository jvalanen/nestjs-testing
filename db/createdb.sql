CREATE USER nester WITH PASSWORD 'nester';
CREATE DATABASE nesting;
GRANT ALL PRIVILEGES ON DATABASE nesting TO nester;
\connect nesting
ALTER SCHEMA public OWNER TO nester;
