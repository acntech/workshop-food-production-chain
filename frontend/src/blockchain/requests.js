import { postData, getData } from '../requests/requests';
import registerBatchAndMockChain from './mockChain';

export const registerBatch = (req, updateStatus) => {
    if (window.location.port === '3000') {
      // Perform mock if in developing server
      registerBatchAndMockChain(req, updateStatus);
    } else {
      postData(
        '/registerBatch',
        { ...req },
        () => updateStatus({loading: true, error: null, result: null}),
        ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
        ({status, result}) => updateStatus({loading: false, error: null, result, status}),
      );
    }
  }

export const registerFoodFromFarmToPackageHouse = (req, updateStatus) => {
  postData(
    '/registerFoodFromFarmToPackageHouse',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}
export const registerPackage = (req, updateStatus) => {
  postData(
    '/registerPackage',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}
export const registerFromPackageHouseToDistributionCenter = (req, updateStatus) => {
  postData(
    '/registerFromPackageHouseToDistributionCenter',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}

export const registerFromDistributionCenterToStore = (req, updateStatus) => {
  postData(
    '/registerFromDistributionCenterToStore',
    { ...req },
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}

export const getItem = (itemID, updateStatus) => {
  getData(
    `/getItem/${itemID}`,
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}

export const getInformationAboutFruit = (fruitId, updateStatus) => {
  getData(
    `/getInformationAboutFruit/${fruitId}`,
    () => updateStatus({loading: true, error: null, result: null}),
    ({status, message}) => updateStatus({loading: false, error: message, result: null, status}),
    ({status, result}) => updateStatus({loading: false, error: null, result, status}),
  )
}
