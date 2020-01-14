const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
var cfenv = require('cfenv');
var network = require('./blockchainNetworkConnector.js');
const mockdataFunctions = require('./utils/OffChainData/parseOffChainData');

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())

var appEnv = cfenv.getAppEnv();
var port = appEnv.port;


/********************/
/*****  ROUTES *****/
/********************/
app.get('/', function (req, res) {
  res.send({ greeting: 'Server up and running.'})
});

var server = app.listen(port, '0.0.0.0', function () {
  console.log("Server starting on " + port);
});


/***********************/
/*****  MOCK DATA *****/
app.get('/getOffChainData/:dataID', (req, res) => {
  var data = mockdataFunctions.getPerson(req.params.dataID);
  if (data) {
    res.send(JSON.stringify({ status: 'success', result: data }));
  } else {
    res.send(JSON.stringify({ status: "error" }));
  }
});

/***********************/
/*****  BLOCKCHAIN *****/

//Retrieving all objects stored in channel and current states.
app.get('/getAllObjects', (req, res) => {
  network.getAllObjects()
    .then((res) => {
        let objects = JSON.parse(JSON.parse(res[0]));
        res.send(JSON.stringify({ status: 'success', result: objects }));
    }).catch(err => res.send(JSON.stringify({ status: 'error', message: err })));
});

//Fetch a specific object and it's current state. 
app.get('/getObject/:objectID', (req, res) => {
  network.getVehicle(req.params.objectID)
    .then((res) => {
        let object = JSON.parse(object[0]);
        res.send(JSON.stringify({ status: 'success', result: object}));
    }).catch(err => res.send(JSON.stringify({ status: 'error', message: err })));
});

module.exports = app;
