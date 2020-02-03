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

//GET ROUTES
app.get('/getItem/:itemID', (req, res) => {
  /*network.getItem(req.params.itemID)
    .then((response) => {
        let object = JSON.parse(response);
        res.send(JSON.stringify({ status: 'success', result: object}));
    }).catch(err => res.send(JSON.stringify({ status: 'error', message: err })));*/
    res.send(JSON.stringify({"status":"success","result":{"batchID":"1","dateOfDelivery":"01022020","dateOfDistribution":"DCI1","distributionCenterID":"01022020","packageID":"PI1","storeID":"SI11"}}))
});

app.post('/registerBatch', (req, res) => {
  // network.registerBatch(req.body.batchID, req.body.foodID, req.body.farmID, req.body.lotNo, req.body.dateOfHarvest)
  //   .then((response) => {
  //       res.send(JSON.stringify({ status: 'registerBatch - success', result: response }));
  //   }).catch(err =>
  //     res.send(JSON.stringify({ status: 'registerBatch - error', message: err })));

    res.send(JSON.stringify({ status: 'registerBatch - success', result: "Transaction submitted" }));
});

//POST ROUTES
app.post('/registerPackage', (req, res) => {
  // network.registerPackage(req.body.packageID, req.body.batchID)
  //   .then((response) => {
  //       res.send(JSON.stringify({ status: 'registerPackage - success', result: response }));
  //   }).catch(err =>
  //     res.send(JSON.stringify({ status: 'registerPackage - error', message: err })));
  res.send(JSON.stringify({ status: 'registerPackage - success', result: "Transaction submitted" }));
});


app.post('/registerFoodFromFarmToPackageHouse', (req, res) => {
  // network.registerFoodFromFarmToPackageHouse(req.body.batchID, req.body.packagingHouseID, req.body.dateOfPackaging)
  //   .then((response) => {
  //       res.send(JSON.stringify({ status: 'registerFoodFromFarmToPackageHouse - success', result: response }));
  //   }).catch(err =>
  //     res.send(JSON.stringify({ status: 'registerFoodFromFarmToPackageHouse - error', message: err })));
  res.send(JSON.stringify({ status: 'registerFoodFromFarmToPackageHouse - success', result: "Transaction submitted" }));
});

app.post('/registerFromPackageHouseToDistributionCenter', (req, res) => {
  // network.registerFromPackageHouseToDistributionCenter(req.body.packageID, req.body.distributionCenterID, req.body.dateOfDistribution)
  //   .then((response) => {
  //       res.send(JSON.stringify({ status: 'registerFromPackageHouseToDistributionCenter - success', result: response }));
  //   }).catch(err =>
  //     res.send(JSON.stringify({ status: 'registerFromPackageHouseToDistributionCenter - error', message: err })));

      res.send(JSON.stringify({ status: 'registerFromPackageHouseToDistributionCenter - success', result: "Transaction submitted" }));
});

app.post('/registerFromDistributionCenterToStore', (req, res) => {
  // network.registerFromDistributionCenterToStore(req.body.packageID, req.body.storeID, req.body.dateOfDelivery)
  //   .then((response) => {
  //       res.send(JSON.stringify({ status: 'registerFromDistributionCenterToStore - success', result: response }));
  //   }).catch(err =>
  //     res.send(JSON.stringify({ status: 'registerFromDistributionCenterToStore - error', message: err })));

  res.send(JSON.stringify({ status: 'registerFromDistributionCenterToStore - success', result: "Transaction submitted" }));
});


module.exports = app;
