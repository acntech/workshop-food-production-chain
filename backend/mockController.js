const { uuid } = require('./utils/uuid/uuid');
const { storeBatch, storePackage, updatePackage, getPackageIDs, getPackage } = require('./utils/mockChain/mockChainData');

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
          dateOfPackaging : '2020-02-02'
      }
  });
};

const registerFoodFromFarmToPackageHouse = (req, res) => {
  const { batchID, packagingHouseID, dateOfPackaging } = req.body;
  for (let i = 0; i <= 5; i++) {
    registerPackage({
        body: {
            packageID: uuid('P'),
            batchID,
            packagingHouseID,
            dateOfPackaging
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
          dateOfDistribution : '2020-02-12'
      }
  }), 100);
};

const registerFromPackageHouseToDistributionCenter = (req, res) => {
  updatePackage(req.body);
  setTimeout(() => registerFromDistributionCenterToStore({
      body: {
          packageID : req.body.packageID,
          storeID : uuid('S'),
          dateOfDelivery : '2020-02-20'
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