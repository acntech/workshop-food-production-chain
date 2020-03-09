const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan')
var cfenv = require('cfenv');
const getIp = require('./ip');
var network = require('./blockchainNetworkConnector.js');
const mockdataFunctions = require('./utils/OffChainData/parseOffChainData');
const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../frontend/build')));

var appEnv = cfenv.getAppEnv();
var port = appEnv.port;

app.get('/', (req, res) => {
  res.send({ greeting: 'Server up and running.'})
});

/***** React app *****/
app.get('/ecoStore', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.get('/fruitfarm', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


/*****  MOCK DATA *****/
app.get('/getInformationAboutFruit/:fruitID', (req, res) => {
  var data = mockdataFunctions.getFruit(req.params.fruitID);
  if (data) {
    res.send(JSON.stringify({ status: 'success', result: data }));
  } else {
    res.status(500);
    res.send(JSON.stringify({ status: "error" }));
  }
});


/*****  BLOCKCHAIN *****/
//GET ROUTES
app.get('/getItem/:itemID', (req, res) => {
  network.getItem(req.params.itemID)
    .then((response) => {
        let object = JSON.parse(response);
        res.send(JSON.stringify({ status: 'success', result: object}));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'error', message, stack }));
  });
});

app.get('/getAllItems', (req, res) => {
  network.getAllItems()
    .then((response) => {
        let object = JSON.parse(response);
        res.send(JSON.stringify({ status: 'success', result: object}));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'error', message, stack }));
  });
});


app.get('/getAllPackages', (req, res) => {
  network.getAllItems()
    .then((response) => {
        const allItems = JSON.parse(response);
        let packages = [];
        allItems.forEach(item => {
          if(item.hasOwnProperty('packageID')){
           packages.push(item)
          }
        });
        res.send(JSON.stringify({ status: 'success', result: packages}));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'error', message, stack }));
  });
});


//POST Routes

app.post('/registerBatch', (req, res) => {
  console.log(req);
  network.registerBatch(req.body.batchID, req.body.foodID, req.body.farmID, req.body.lotNo, req.body.dateOfHarvest)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'registerBatch - success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'registerBatch - error', message, stack }))
    });
});

//POST ROUTES
app.post('/registerPackage', (req, res) => {
  network.registerPackage(req.body.packageID, req.body.batchID)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'registerPackage - success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'registerPackage - error', message, stack }))
    });
});

app.post('/registerFoodFromFarmToPackageHouse', (req, res) => {
  network.registerFoodFromFarmToPackageHouse(req.body.batchID, req.body.packagingHouseID, req.body.dateOfPackaging)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'registerFoodFromFarmToPackageHouse - success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'registerFoodFromFarmToPackageHouse - error', message, stack }))
    });
});

app.post('/registerFromPackageHouseToDistributionCenter', (req, res) => {
  network.registerFromPackageHouseToDistributionCenter(req.body.packageID, req.body.distributionCenterID, req.body.dateOfDistribution)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'registerFromPackageHouseToDistributionCenter - success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'registerFromPackageHouseToDistributionCenter - error', message, stack }))
    });
});

app.post('/registerFromDistributionCenterToStore', (req, res) => {
  network.registerFromDistributionCenterToStore(req.body.packageID, req.body.storeID, req.body.dateOfDelivery)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'registerFromDistributionCenterToStore - success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'registerFromDistributionCenterToStore - error', message, stack }))
    });
});

var server = app.listen(port, '0.0.0.0', () => {
  console.log("Local:   http://localhost:" + port + "/");
  console.log("Network: http://" + getIp() + ":" + port + "/");
});

module.exports = app;
