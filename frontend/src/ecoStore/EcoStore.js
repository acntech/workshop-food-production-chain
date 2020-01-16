import React from 'react';
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
import {registerBatch} from '../blockchain/requests';

const EcoStore = () => {
  const [{loading, error, result, status}, updateStatus] = useStatus()
  const handleSubmit = req => registerBatch(req, updateStatus);



  return (
    <div>
      <header className={style.background}>
        <Card>
          <FontAwesomeIcon icon={faStoreAlt} size="6x"/>
          <h1>EcoStore</h1>
          <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage title={status} messsage={error} />}
          {result && <SuccessMessage title={status} />}
            <Input 
              id="packageId"
              name="packagaId"
              label="Package-Id" 
              defaultValue="PK-8yt3-co5l-l9d2" 
              disabled={loading}
            />
            <Input 
              type="submit"
              value="Submit"
              disabled={loading}
            />
          </Form>
          <History events={[]} />
        </Card>
      </header>
    </div>
  );
}

export default EcoStore;
