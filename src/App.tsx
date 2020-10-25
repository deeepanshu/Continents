import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Continents from './components/Continents';
import ContinentDetails from './components/ContinentDetails';
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="container pt-3">
      <Router>
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
