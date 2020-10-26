import React from 'react';
import { IContinent } from '../../lib/interfaces';
import Europe from '../../assets/img/eu.png';
import Asia from '../../assets/img/as.png';
import SouthAmerica from '../../assets/img/sa.png';
import NorthAmerica from '../../assets/img/na.png';
import Antartica from '../../assets/img/an.png';
import Africa from '../../assets/img/af.png';
import Australia from '../../assets/img/oc.png';

/**
 * Creating an image map, to map continent maps with the continent codes
 */
const imageMap: { [key: string]: any } = {
  "AS": Asia,
  "EU": Europe,
  "SA": SouthAmerica,
  "NA": NorthAmerica,
  "AN": Antartica,
  "AF": Africa,
  "OC": Australia
}

interface IProps {
  data: IContinent,
  clickHandler: () => void
}

const ContinentCard = ({ data, clickHandler }: IProps) => {
  return (
    <div key={data.code} className="col-6 col-md-4 p-2" onClick={clickHandler}>
      <div className="card  position-relative  p-2 custom-card cursor-pointer">
        <img className="card-img-top zoom" width={"100%"} height={"100%"} src={imageMap[data.code]} alt={data.name} />
        <div className="text-overlap">{data.name}</div>
      </div>
    </div>
  )
}

export default ContinentCard;