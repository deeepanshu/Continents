import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTINENT } from '../../lib/queries';
import { IContinentData, IContinentVars } from '../../lib/interfaces';
import { useParams } from "react-router-dom";
import CountryCard from '../CountryCard';
import CountryTable from '../CountryTable';
import Loading from '../Loading';
import useWindowSize from '../../lib/hooks/useWindowSize';

interface ParamTypes {
  code: string
}

const ContinentDetails = () => {
  const { code } = useParams<ParamTypes>();
  const { isMobile } = useWindowSize()
  const { loading, error, data } = useQuery<IContinentData, IContinentVars>(GET_CONTINENT, { variables: { code: code } });

  if (loading || error) {
    return <Loading message={error ? error.message : 'Loading'} />;
  }

  return (
    <div>
      <div className="card p-2 mt-2 mb-3">
        <h2>{data?.continent.name}</h2>
        <h5 className="text-muted">No of Countries: {data?.continent.countries.length}</h5>
      </div>
      {isMobile ? 
        data?.continent.countries.map(ele => <CountryCard key={ele.code} {...ele} /> )
       : (
        <CountryTable  data={data} />
      )}
    </div>
  )
}

export default ContinentDetails;