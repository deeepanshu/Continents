import React from 'react';
import { ICountry } from '../../lib/interfaces';
import { CURRENCY_MAP } from '../../lib/currency';

const ContinentCard = (props: ICountry) => {
  return (
    <div className="card m-2 p-2">
      <h5>{props.name}</h5>
    </div>
  )
}

export default ContinentCard;