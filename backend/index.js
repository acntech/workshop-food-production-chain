const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cfenv = require('cfenv');
const getIp = require('./ip');
const app = express();
const { mocked } = require('./properties.json');
const offchainController = require('./offchainController');

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../frontend/build')));

const appEnv = cfenv.getAppEnv();
const port = 6005;

let controller;
if (mocked) {
  controller = require('./mockController');
} else {
  controller = require('./networkController');
}

app.get('/', (req, res) => res.send({ greeting: 'Server up and running.'}));

/***** REACT APP *****/
app.get('/ecoStore', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));
app.get('/fruitfarm', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));

/*****  OFFCHAIN DATA *****/
app.get('/api/fruit/:fruitID', offchainController.getFruit);
app.get('/api/fruit/', offchainController.getFruits);

/*****  BLOCKCHAIN *****/
//GET ROUTES
app.get('/api/getPackages', controller.getAllPackages);
app.get('/api/getAllItems', controller.getAllItems);
app.get('/api/getItem/:itemID', controller.getItem);

//POST ROUTES
app.post('/api/registerBatch', controller.registerBatch);
app.post('/api/registerFoodFromFarmToPackageHouse', controller.registerFoodFromFarmToPackageHouse);
app.post('/api/registerPackage', controller.registerPackage);
app.post('/api/registerFromPackageHouseToDistributionCenter', controller.registerFromPackageHouseToDistributionCenter);
app.post('/api/registerFromDistributionCenterToStore', controller.registerFromDistributionCenterToStore);

app.listen(port, '0.0.0.0', () => {
  console.log("Local:   http://localhost:" + port + "/");
  console.log("Network: http://" + getIp() + ":" + port + "/");
});

module.exports = app;
