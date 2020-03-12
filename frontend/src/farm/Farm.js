import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTractor } from '@fortawesome/free-solid-svg-icons'
import Form from '../components/form/Form';
import Input from '../components/form/input/Input';
import Card from '../components/card/Card';
import { registerBatch, getFruits } from '../blockchain/requests';
import SuccessMessage from '../components/message/SuccessMessage';
import ErrorMessage from '../components/message/ErrorMessage';
import uuid from '../uuid/uuid';
import style from './farm.module.css';
import Dropdown from '../components/form/dropdown/Dropdown';
import { useRequest, useStatus } from '../requests/hooks';

const Farm = () => {
  const [request, updateStatus] = useStatus()
  const fruits = useRequest(getFruits);
  const handleSubmit = req => registerBatch(req, updateStatus);

  const elements = fruits.result ? fruits.result.map(({ name, foodID }) => ({ description: name, value: foodID })) : [];

  return (
    <Card className={style.farm}>
      <FontAwesomeIcon icon={faTractor} size="6x"/>
      <h1>FruitFarm</h1>
      <Form onSubmit={handleSubmit}>
      {request.error && <ErrorMessage title={request.status} messsage={request.error} />}
      {request.result && <SuccessMessage title={request.status} message={request.result} />}
        <Input 
          className={style.id}
          id="farmID"
          name="farmID"
          label="Farm-id" 
          defaultValue={uuid('F')}
          errorMessage="Du må gi gården en id." 
          required
          disabled={request.loading}
        />
        <Input 
          className={style.id}
          id="batchID" 
          name="batchID"
          label="Batch-id"
          defaultValue={uuid('B')}
          errorMessage="Du må gi batchen en id."
          required
          disabled={request.loading}  
        />
        <Dropdown 
          id="foodID" 
          name="foodID"
          label="Food type"
          elements={elements}
          required
          disabled={request.loading || fruits.loading}
        />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Input 
            id="lotNo1" 
            label="Lot"
            name="lotNo"
            type="radio"
            description="Søndre"
            value="lotSouth"
            disabled={request.loading}
            required
          />
          <Input 
            id="lotNo2" 
            name="lotNo"
            type="radio"
            description="Nordre"
            value="lotNorth"
            disabled={request.loading}
          />
          <Input 
            id="lotNo3" 
            name="lotNo"
            type="radio"
            description="Østre"
            value="lotEast"
            disabled={request.loading}
          />
          <Input 
            id="lotNo4" 
            name="lotNo"
            type="radio"
            description="Vestre"
            value="lotWest"
            disabled={request.loading}
          />
        </div>
        <Input 
          id="dateOfHarvest" 
          label="Harverest date"
          name="dateOfHarvest"
          type="date"
          defaultValue="2020-02-10"
          disabled={request.loading}
        />
        <Input 
          type="submit"
          value="Go"
          disabled={request.loading}
        />
      </Form>
    </Card>
  );
}

export default Farm;
