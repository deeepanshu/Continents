import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Continents from './components/Continents';
import ContinentDetails from './components/ContinentDetails';

/** Adding source url to apollo client to estabilish connection with GraphQL. */
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
});

/** 
 * Creating Router with two routes - Continents, Continent details
 * Adding basename /Continents, since site is hosted on GH-Pages
 * Adding ApolloProvider to the whole application using React Context
*/
function App() {
  return (
    <div className="container pt-3">
      <Router basename="/Continents">
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/:code">
              <ContinentDetails />
            </Route>
            <Route exact path="/">
              <Continents />
            </Route>
          </Switch>
        </ApolloProvider>
      </Router>
    </div>
  )

}

export default App;
