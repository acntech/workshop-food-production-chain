const object = require(`./utils/additionalData.json`);
const fs = require('fs');

exports.getPerson = function(SSN) {
  var person;
  for (var i = 0; i < object.length; i++) {
    if (SSN == object[i].SSN) {
      person = object[i];
      break;
    }
  }
  return person;
}
