import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTractor } from '@fortawesome/free-solid-svg-icons'
import Form from '../components/form/Form';
import Input from '../components/form/input/Input';
import Card from '../components/card/Card';
import { registerBatch } from '../blockchain/requests';
import SuccessMessage from '../components/message/SuccessMessage';
import ErrorMessage from '../components/message/ErrorMessage';
import useStatus from '../requests/useStatus';
import uuid from '../uuid/uuid';
import style from './farm.module.css';

const Farm = () => {
  const [{loading, error, result, status}, updateStatus] = useStatus()
  const handleSubmit = req => registerBatch(req, updateStatus);

  return (
    <Card className={style.farm}>
      <FontAwesomeIcon icon={faTractor} size="6x"/>
      <h1>FruitFarm</h1>
      <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage title={status} messsage={error} />}
      {result && <SuccessMessage title={status} message={result} />}
        <Input 
          className={style.id}
          id="farmID"
          name="farmID"
          label="Farm-id" 
          value={uuid('F')} 
          readOnly
          disabled={loading}
        />
        <Input 
          className={style.id}
          id="batchID" 
          name="batchID"
          label="Batch-id"
          defaultValue={uuid('B')}
          errorMessage="Du må gi batchen en id."
          readOnly
          disabled={loading}
        />
        <Input 
          id="foodID" 
          name="foodID"
          label="Food type"
          defaultValue=""
          required
          disabled={loading}
        />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Input 
            id="lotNo1" 
            label="Lot"
            name="lotNo"
            type="radio"
            description="Søndre"
            value="lotSouth"
            disabled={loading}
            required
          />
          <Input 
            id="lotNo2" 
            name="lotNo"
            type="radio"
            description="Nordre"
            value="lotNorth"
            disabled={loading}
          />
          <Input 
            id="lotNo3" 
            name="lotNo"
            type="radio"
            description="Østre"
            value="lotEast"
            disabled={loading}
          />
          <Input 
            id="lotNo4" 
            name="lotNo"
            type="radio"
            description="Vestre"
            value="lotWest"
            disabled={loading}
          />
        </div>
        <Input 
          id="dateOfHarvest" 
          label="Harverest date"
          name="dateOfHarvest"
          type="date"
          defaultValue="2020-02-10"
          disabled={loading}
        />
        <Input 
          type="submit"
          value="Go"
          disabled={loading}
        />
      </Form>
    </Card>
  );
}

export default Farm;
