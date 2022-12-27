const { Client } = require('pg');

const pgclient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
});

pgclient.connect();

const user = `CREATE USER nester WITH PASSWORD 'nester'`;
const database = `CREATE DATABASE nesting`;
const privileges = `GRANT ALL PRIVILEGES ON DATABASE nesting TO nester`;
const table = `CREATE TABLE relative (id SERIAL PRIMARY KEY, name VARCHAR)`;
const row = `INSERT INTO relative (id, name) VALUES (1, 'Jouni')`;

Promise.all(
  [user, database, privileges, table, row].map((query) => {
    pgclient.query(query, (err, res) => {
      if (err) throw err;
    });
  }),
).then(() => {
  pgclient.query('SELECT * FROM relative', (err, res) => {
    if (err) throw err;
    console.log(err, res.rows); // Print the data in student table
    pgclient.end();
  });
});
