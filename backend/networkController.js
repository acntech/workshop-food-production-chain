const network = require('./blockchainNetworkConnector.js');

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
  network.registerBatch(req.body.batchID, req.body.foodID, req.body.farmID, req.body.lotNo, req.body.dateOfHarvest)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerFoodFromFarmToPackageHouse = (req, res) => {
  network.registerFoodFromFarmToPackageHouse(batchID, packagingHouseID, dateOfPackaging)
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
  network.registerFromPackageHouseToDistributionCenter(req.body.packageID, req.body.distributionCenterID, req.body.dateOfDistribution)
    .then(({msg}) => {
        res.send(JSON.stringify({ status: 'Success', result: msg }));
    }).catch(({message, stack}) => {
      res.status(500);
      res.send(JSON.stringify({ status: 'Error', message, stack }))
    });
};

const registerFromDistributionCenterToStore = (req, res) => {
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