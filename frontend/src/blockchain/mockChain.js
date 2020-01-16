import uuid from '../uuid/uuid';

const postData = (endpoint, body, start, error, success) => {
    start();
    setTimeout(() => success({ status: 'OK - ' + endpoint }), 1500);
};
  
const stores = new Array(1).map(i => uuid('S'));
const randomStore = () => stores[Math.floor(Math.random() * stores.length)];

const mockRegisterFromDistributionCenterToStore = (req, start, error, success) => postData(
    '/registerFromDistributionCenterToStore',
    { ...req },
    start, error, success
  );

const mockRegisterFromPackageHouseToDistributionCenter = (req, start, error, success) => postData(
    '/registerFromPackageHouseToDistributionCenter',
    { ...req },
    start, error,
    res => {
        mockRegisterFromDistributionCenterToStore({
        packageID: req.packageID,
        storeID: randomStore(),
        dateofDelivery: '2020-02-29'
        }, () => {}, error, success);
        success(res);
    }
);

const mockRegisterPackage = (req, start, error, success, repeat = 1) => postData(
  '/registerPackage',
  { ...req },
  () => {
    // Multiple packages registered at once
    if (repeat > 1) {
        setTimeout(() => mockRegisterPackage({
            packageID: uuid('P'),
            batchID: req.batchID
        }, start, error, success, repeat - 1), 200);
    }
    start();
  },
  error,
  res => {
    mockRegisterFromPackageHouseToDistributionCenter({
      packageID: req.packageID,
      distributionCenterID: uuid('DC'),
      dateOfDistribution: '2020-02-25'
    }, start, error, success);
    success(res);
  }
);

const mockRegisterFoodFromFarmToPackageHouse = (req, start, error, success) => postData(
  '/registerFoodFromFarmToPackageHouse',
  { ...req },
  start,  error,
  res => {
    mockRegisterPackage({
      packageID: uuid('P'),
      batchID: req.batchID
    }, start, error, success, 5);
    success(res);
  }
);

const mockRegisterBatch = (req, start, error, success) => postData(
    '/registerBatch',
    { ...req },
    start, error,
    res => {
      mockRegisterFoodFromFarmToPackageHouse({
        batchID: req.batchID, 
        dateOfPacking: '2020-02-20',
        packagingHouseID: uuid('PH'),
      }, start, error, success);
      success(res);
    }
  );

const registerBatchAndMockChain = (request, update) => {
    const start = () => {};
    const error = ({ error }) => update({ error });
    const success = ({ status }) => update({ result: status });

    mockRegisterBatch(request, start, error, success);
}

export default registerBatchAndMockChain;