import React from 'react';
import { useQuery } from '@apollo/client';
import { LIST_CONTINENTS } from '../../lib/queries';
import { useHistory } from "react-router-dom";
import Loading from './../Loading';
import Europe from '../../assets/img/eu.png';
import Asia from '../../assets/img/as.png';
import SouthAmerica from '../../assets/img/sa.png';
import NorthAmerica from '../../assets/img/na.png';
import Antartica from '../../assets/img/an.png';
import Africa from '../../assets/img/af.png';
import Australia from '../../assets/img/oc.png';


const imageMap: { [key: string]: any } = {
  "AS": Asia,
  "EU": Europe,
  "SA": SouthAmerica,
  "NA": NorthAmerica,
  "AN": Antartica,
  "AF": Africa,
  "OC": Australia
}

const Continents = () => {
  const { loading, error, data } = useQuery(LIST_CONTINENTS);
  const history = useHistory()
  if (loading || error) {
    return <Loading message={error ? error.message : 'Loading'} />
  }
  return (
    <div>
      <h2 className="text-center">World</h2>
      <div className="row">
        {
          data.continents.map((ele: any) => (
            <div key={ele.code} className="col-6 col-md-4 p-2" onClick={() => history.push(ele.code)}>
              <div className="card  position-relative  p-2 custom-card cursor-pointer">
                <img className="card-img-top zoom" width={"100%"} height={"100%"} src={imageMap[ele.code]} alt={ele.name} />
                <div className="text-overlap">{ele.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Continents;