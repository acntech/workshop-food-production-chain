const { uuid } = require('./utils/uuid/uuid');
const { storeBatch, storePackage, updatePackage, getPackageIDs, getPackage } = require('./utils/mockChain/mockChainData');
const moment = require('moment')

const getAllPackages = (req, res) => {
    const packages = getPackageIDs();
    setTimeout(() => res.send(JSON.stringify({ status: 'Success', result: packages})), 200);
};
  
const getItem = (req, res) => {
  const package = getPackage(req.params.itemID);
  setTimeout(() => res.send(JSON.stringify({ status: 'Success', result: package})), 500);
};

const registerBatch = (req, res) => {
  storeBatch(req.body);
  setTimeout(() => res.send(JSON.stringify({ status: 'Success', result: 'Batch received in packaging house'})), 300);
  registerFoodFromFarmToPackageHouse({ 
      body: {
          batchID : req.body.batchID,
          packagingHouseID : uuid('PH'),
          dateOfPackaging : moment().format()
      }
  });
};

const registerFoodFromFarmToPackageHouse = (req, res) => {
  const { batchID, packagingHouseID } = req.body;
  for (let i = 0; i <= 5; i++) {
    registerPackage({
        body: {
            packageID: uuid('P'),
            batchID,
            packagingHouseID,
            moment().format()
      }
    });
  }
};

const registerPackage = (req, res) => {
  storePackage(req.body);
  setTimeout(() => registerFromPackageHouseToDistributionCenter({
      body: {
          packageID : req.body.packageID,
          distributionCenterID : uuid('DC'),
          dateOfDistribution : moment().format()
      }
  }), 100);
};

const registerFromPackageHouseToDistributionCenter = (req, res) => {
  updatePackage(req.body);
  setTimeout(() => registerFromDistributionCenterToStore({
      body: {
          packageID : req.body.packageID,
          storeID : uuid('S'),
          dateOfDelivery : moment().format()
      }
  }), 300);
};

const registerFromDistributionCenterToStore = (req, res) => updatePackage(req.body);

exports.getItem = getItem;
exports.getAllItems = getAllPackages;
exports.getAllPackages = getAllPackages;
exports.registerBatch = registerBatch;
exports.registerFoodFromFarmToPackageHouse = registerFoodFromFarmToPackageHouse;
exports.registerPackage = registerPackage;
exports.registerFromPackageHouseToDistributionCenter = registerFromPackageHouseToDistributionCenter;
exports.registerFromDistributionCenterToStore = registerFromDistributionCenterToStore;