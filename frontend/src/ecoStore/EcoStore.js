import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import style from './ecoStore.module.css';
import Form from '../components/form/Form';
import Input from '../components/form/input/Input';
import History from './history/History';
import Card from '../components/card/Card';
import SuccessMessage from '../components/message/SuccessMessage';
import ErrorMessage from '../components/message/ErrorMessage';
import { getItem, getPackages, getFruits } from '../blockchain/requests';
import Packages from './packages/packages';
import { useRequest, useStatus } from '../requests/hooks';
import resposponseToEvents from './responseToEvents';

const EcoStore = () => {  
  const fruits = useRequest(getFruits);
  const pkgs = useRequest(getPackages);
  const [pkg, updatePackageStatus] = useStatus({});
  const [pkgID, setPackageID] = useState('');
  
  const handleSubmit = req => getItem(req.packageID, updatePackageStatus);
  
  return (
    <div>
      <header className={style.background}>
        <Packages 
          packages={pkgs.result} 
          onClick={setPackageID} 
        />
        <Card>
          <FontAwesomeIcon icon={faStoreAlt} size="6x"/>
          <h1>EcoStore</h1>
          <Form onSubmit={handleSubmit}>
          {pkg.error && <ErrorMessage title={pkg.status} messsage={pkg.error} />}
          {pkg.result && <SuccessMessage title={pkg.status} />}
            <Input 
              id="packageID"
              name="packageID"
              label="Package-Id" 
              defaultValue={pkgID} 
              onChange={e => setPackageID(e.target.value)}
              disabled={pkg.loading}
            />
            <Input 
              type="submit"
              value="Submit"
              disabled={pkg.loading}
            />
          </Form>
          <History events={resposponseToEvents(pkg.result, fruits.result)} />
        </Card>
      </header>
    </div>
  );
}

export default EcoStore;
