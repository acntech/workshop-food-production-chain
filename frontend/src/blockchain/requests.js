import { postData, getData } from '../requests/requests';
import { 
  registerBatchAndMockChain,
  getMockedFruits,
  getMockedPackages, 
  getMockedItem 
} from './mockChain';

export const registerBatch = (req, updateStatus) => {
  if (window.location.port === '3000') {
    // Perform mock if in developing server
    registerBatchAndMockChain(req, updateStatus);
  } else {
    postData(
      '/api/registerBatch',
      { ...req },
      () => updateStatus({loading: true, error: null, result: null}),
      ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
      ({status, result}) => updateStatus({loading: false, error: null, result, status})
    );
  }
};

export const registerFoodFromFarmToPackageHouse = (req, updateStatus) => {
  postData(
    '/api/registerFoodFromFarmToPackageHouse',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status})
  );
};

export const registerPackage = (req, updateStatus) => {
  postData(
    '/api/registerPackage',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status})
  );
};

export const registerFromPackageHouseToDistributionCenter = (req, updateStatus) => {
  postData(
    '/api/registerFromPackageHouseToDistributionCenter',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status})
  );
};

export const registerFromDistributionCenterToStore = (req, updateStatus) => {
  postData(
    '/api/registerFromDistributionCenterToStore',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status})
  );
};

export const getItem = (itemID, updateStatus) => {
  if (window.location.port === '3000') {
    getMockedItem(updateStatus);
  } else {
    getData(
      `/api/getItem/${itemID}`,
      () => updateStatus({loading: true, error: null, result: null}),
      ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
      ({status, result}) => updateStatus({loading: false, error: null, result, status})
    );
  }
};

export const getPackages = updateStatus => {
  if (window.location.port === '3000') {
    getMockedPackages(updateStatus);
  } else {
    getData(
      '/api/getPackages',
      () => updateStatus({loading: true, error: null, result: null}),
      ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
      ({status, result}) => updateStatus({loading: false, error: null, result, status})
    );
  }
};

export const getFruits = updateStatus => {
  if (window.location.port === '3000') {
    getMockedFruits(updateStatus);
  } else {
    getData(
      '/api/fruit/',
      () => updateStatus({loading: true, error: null, result: null}),
      ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
      ({status, result}) => updateStatus({loading: false, error: null, result, status})
    );
  }
};

export const getFruit = (fruitID, updateStatus) => {
  getData(
    `/api/fruit/${fruitID}`,
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status})
  );
};
