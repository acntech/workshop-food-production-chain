const fruits = require('./utils/OffChainData/fruit.json');
const fs = require('fs');

/*****  MOCK DATA *****/
const getFruit = (req, res) => {
  var data = fruits.find(f => f.fruitID == req.params.fruitID);
  if (data) {
    res.send(JSON.stringify({ status: 'Success', result: data }));
  } else {
    res.status(500);
    res.send(JSON.stringify({ status: "Error" }));
  }
};

const getFruits = (req, res) => {
  var data = fruits;
  if (data) {
    res.send(JSON.stringify({ status: 'Success', result: data }));
  } else {
    res.status(500);
    res.send(JSON.stringify({ status: "Error" }));
  }
};

exports.getFruit = getFruit;
exports.getFruits = getFruits;