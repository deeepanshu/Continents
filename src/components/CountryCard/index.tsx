import React, { useState } from 'react';
import { ICountry } from '../../lib/interfaces';
import { CURRENCY_MAP } from '../../lib/currency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const CountryCard = (props: ICountry) => {
  const [viewMore, setViewMore] = useState<boolean>(false);
  return (
    <div className="card mb-2 p-2 position-relative">
      <h5> {props.name}  </h5>
      <span className="flag">{props.emoji}</span>
      <div className="d-flex flex-row justify-content-between mt-2">
        <span className="text-muted"><b>{props.capital}</b></span>
        <span className="text-muted text-right cursor-pointer" onClick={() => setViewMore(viewMore => !viewMore)}>View More <FontAwesomeIcon icon={viewMore ? faAngleUp : faAngleDown} /></span>
      </div>
      {
        viewMore && (
          <div className="row mt-2">
            <div className="col-6 bdr" style={{margin: "auto"}}>
              <div className="detail-label ">Currency</div>
              <div className="text-muted ">
                {props.currency} {CURRENCY_MAP[props.currency] ? `(${CURRENCY_MAP[props.currency]})` : "-"}
              </div>
              <div className="detail-label">Phone (Ext.)</div>
              <div  className="text-muted ">{props.phone ? `+${props.phone}` : "-"}</div>
            </div>
           
            
            <div className="col-6" >
              <div className="detail-label">Languages Spoken</div>
              <div className="text-muted">{props.languages.length ? props.languages.map(l => l.name).join(", ") : "-"}</div>
            </div>
          </div>
        )
      }
    </div>
  )
}



export default CountryCard;