import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from '../ErrorBoundary';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { StarshipCard } from '../sw-components';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Router>
          <div className="container">
            <Header />
            <Hero />
            <Switch>
              <Route exact path='/' render={() => <h2>Welcome to StarDB</h2>} />
              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets/:id?' component={PlanetsPage} />
              <Route exact path='/starships/' component={StarshipsPage} />
              <Route 
                path='/starships/:id' 
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipCard dataId={id} type={'starship'} />
                }}
              />
              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
        </div>
        </Router>
      </ErrorBoundary>
    );
  }
}
