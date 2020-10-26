import React from 'react';
import { useQuery } from '@apollo/client';
import { LIST_CONTINENTS } from '../../lib/queries';
import { useHistory } from "react-router-dom";
import Loading from './../Loading';
import { IContinentListData } from '../../lib/interfaces';
import ContinentCard from '../ContinentCard';

/**
 * Loads up the data from Graphql api, and if data is not present, defaults to Loading Component
 * When the data is loaded, every continent is mapped to a ContinentCard Component.
 */
const Continents = () => {
  const { loading, error, data } = useQuery<IContinentListData>(LIST_CONTINENTS);
  const history = useHistory()
  if (loading || error) {
    return <Loading message={error ? error.message : 'Loading'} />
  }
  return (
    <div>
      <h2 className="text-center">World</h2>
      <div className="row">
        {
          data?.continents.map((ele) => (
           <ContinentCard data={ele} clickHandler={() => history.push(ele.code)} /> 
          ))
        }
      </div>
    </div>
  )
}

export default Continents;