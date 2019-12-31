const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const port = process.env.PORT || 5000;
require('dotenv').config();
app.get('env');

app.use(cors());
app.use(express.json());

app.use(express.static('../public'));

const routes = require('./routes');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});