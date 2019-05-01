require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')
const app = express();
const apis = require('./router');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type'
}));
app.set('trust proxy', 1);
app.use('/api', apis);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(PORT);
  console.log(`Server is running ${PORT}`);
});

