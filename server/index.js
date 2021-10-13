const express = require('express');
const app = express();
const path = require('path');
const config = require('../config.js');
const compression = require('compression');
const morgan = require('morgan');
const axios = require('axios')



const PORT = 3000;

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));


app.use('/*', (req, res) => {
  console.log('PARAMS', req.params["0"])
  const { body, method, params } = req;
  const axiosConfig = {
    method,
    url: `https://public-api.tracker.gg/v2/apex/standard/profile/${params["0"]}`,
    headers: {
      'User-Agent': 'request',
      'TRN-Api-Key': config.TOKEN,
    },
    data: req.data,
  };
  axios(axiosConfig)
    .then(({ data }) => {
      res.status(200).send(data);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>')
    })
    .catch((err) => {
      console.log('errOR %%%%%%%%%%%%%%%%', err)
      res.status(400).send(err);
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
