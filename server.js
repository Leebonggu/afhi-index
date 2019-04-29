const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')
const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = 'a2033c210b8f40cc15d8f5a4a387cf1e';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type'
}));
app.set('trust proxy', 1);

app.get('/api/data', (req, res) => {
  axios.get(`https://api.stlouisfed.org/fred/series/observations?series_id=DCOILWTICO&api_key=${API_KEY}&file_type=json`)
    .then(({ data }) => {
      console.log(data.observations);
      res.send(data.observations)
    });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(PORT);
  console.log(`Server is running ${PORT}`);
});