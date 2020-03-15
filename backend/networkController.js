const network = require('./blockchainNetworkConnector.js');
let moment = require('moment')

const getAllItems = (req, res) => {
  network.getAllItems()
    .then((response) => {
        let object = JSON.parse(response);
        res.send(JSON.stringify({ status: 'Success', result: object}));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }));
  });
}

const getAllPackages = (req, res) => {
  network.getAllItems()
  .then((response) => {
      const allItems = JSON.parse(response);
      const packages = allItems.filter(item => !!item.packageID).map(({ packageID }) => packageID);

      res.send(JSON.stringify({ status: 'Success', result: packages}));
  }).catch(({message, stack}) => {
    res.status(500);
    res.send(JSON.stringify({ status: 'Error', message, stack }));
});
};
  
const getItem = (req, res) => {
  network.getItem(req.params.itemID)
    .then((response) => {
        let object = JSON.parse(response);
        res.send(JSON.stringify({ status: 'Success', result: object}));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }));
  });
};

const registerBatch = (req, res) => {
  let dateOfHarvest = moment()
  network.registerBatch(req.body.batchID, req.body.foodID, req.body.farmID, req.body.lotNo, dateOfHarvest)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerFoodFromFarmToPackageHouse = (req, res) => {
  let dateOfPackaging = moment()
  network.registerFoodFromFarmToPackageHouse(req.body.batchID, req.body.packagingHouseID, dateOfPackaging)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerPackage = (req, res) => {
  network.registerPackage(req.body.packageID, req.body.batchID)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerFromPackageHouseToDistributionCenter = (req, res) => {
  let dateOfDistribution = moment()
  network.registerFromPackageHouseToDistributionCenter(req.body.packageID, req.body.distributionCenterID, dateOfDistribution)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerFromDistributionCenterToStore = (req, res) => {
  let dateOfDelivery = moment()
  network.registerFromDistributionCenterToStore(req.body.packageID, req.body.storeID, req.body.dateOfDelivery)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

exports.getItem = getItem;
exports.getAllItems = getAllItems;
exports.getAllPackages = getAllPackages;
exports.registerBatch = registerBatch;
exports.registerFoodFromFarmToPackageHouse = registerFoodFromFarmToPackageHouse;
exports.registerPackage = registerPackage;
exports.registerFromPackageHouseToDistributionCenter = registerFromPackageHouseToDistributionCenter;
exports.registerFromDistributionCenterToStore = registerFromDistributionCenterToStore;