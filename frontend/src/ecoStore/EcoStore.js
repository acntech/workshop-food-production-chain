import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import style from './ecoStore.module.css';
import Form from '../components/form/Form';
import Input from '../components/form/input/Input';
import History from './history/History';
import Card from '../components/card/Card';
import SuccessMessage from '../components/message/SuccessMessage';
import ErrorMessage from '../components/message/ErrorMessage';
import useStatus from '../requests/useStatus';
import { getItem, getPackages } from '../blockchain/requests';
import uuid from '../uuid/uuid';
import Packages from './packages/packages';

const resposponseToEvents = response => {
  const events = [];
  if (!response) return events;
  
  if (response.dateOfHarvest) {
    events.push({
      timestamp: response.dateOfHarvest,
      description: `Batch ${response.batchID} was harvested at ${response.farmID} on lotNo: ${response.lotNo}`
    })
  }
  if (response.dateOfPackaging) {
    events.push({
      timestamp: response.dateOfPackaging,
      description: `Was packaged at ${response.packagingHouseID}`
    })
  }
  if (response.dateOfDistribution) {
    events.push({
      timestamp: response.dateOfDistribution,
      description: `Was distributed by ${response.distributionCenterID}`
    })
  }
  if (response.dateOfDelivery) {
    events.push({
      timestamp: response.dateOfDelivery,
      description: `Was delivered to ${response.storeID}`
    })
  }
  return events;
}

const EcoStore = () => {
  const [idStatus, updateIdStatus] = useStatus()
  const [{loading, error, result, status}, updatePackageStatus] = useStatus()
  const [packageID, setPackageID] = useState(uuid('P'));
  const handleSubmit = req => getItem(req.packageID, updatePackageStatus);

  useEffect(() => {
    getPackages(updateIdStatus);
  }, []);

  return (
    <div>
      <header className={style.background}>
        <Packages 
          packageIDs={idStatus.result} 
          onClick={setPackageID} 
        />
        <Card>
          <FontAwesomeIcon icon={faStoreAlt} size="6x"/>
          <h1>EcoStore</h1>
          <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage title={status} messsage={error} />}
          {result && <SuccessMessage title={status} />}
            <Input 
              id="packageID"
              name="packageID"
              label="Package-Id" 
              value={packageID} 
              onChange={e => setPackageID(e.target.value)}
              disabled={loading}
            />
            <Input 
              type="submit"
              value="Submit"
              disabled={loading}
            />
          </Form>
          <History events={resposponseToEvents(result)} />
        </Card>
      </header>
    </div>
  );
}

export default EcoStore;
