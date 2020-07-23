// import files and packages up here
const morgan = require('morgan')
const express = require('express')
const data = require('./data.json')

const PORT = process.env.PORT || 3000;

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

app.get('/data', (req, res) => {
  res.json(data);
});

// finally export the express application
module.exports = app;
