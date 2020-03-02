const fruits = require(`./fruit.json`);
const fs = require('fs');

exports.getFruit = function(fruitID) {
  var fruit;
  for (var i = 0; i < fruits.length; i++) {
    if (fruitID == fruits[i].fruitID) {
      fruit = fruits[i];
      break;
    }
  }
  return fruit;
}
