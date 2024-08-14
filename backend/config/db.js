const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aritra', // replace with your MySQL username
  password: 'Aritra8521', // replace with your MySQL password
  database: 'myproject' // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;