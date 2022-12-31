const { Client } = require('pg');

const pgclient = new Client({
  host: 'postgres',
  port: 5432,
  user: 'nester',
  password: 'nester',
  database: 'nesting',
});

pgclient.connect();

pgclient.query('SELECT * FROM relative', (err, res) => {
  if (err) throw err;
  console.log(err, res.rows); // Print the data in student table
  pgclient.end();
});

