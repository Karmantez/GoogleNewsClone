var express = require('express');
var router = express.Router();
const axios = require('axios');

router.post('/headlines', async function (req, res, next) {
  const body = req.body;
  console.log(body);
  // const response = await axios.get();

  res.send('hi');
});

module.exports = router;
