import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 8081;
const dbConfig = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
};
const connection = mysql.createConnection(dbConfig);

connection.query(`CREATE TABLE IF NOT EXISTS people(name VARCHAR(20))`);
connection.query(`INSERT INTO people(name) values('Lucas')`);

app.get('/', async (req, res) => {
  connection.query('SELECT * from people', (err, results) => {
    if (err) throw err;
    res.send(
      `<h1>Full Cycle Rocks! People: ${results.map(
        (result) => result.name
      )}</h1>`
    );
  });
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
