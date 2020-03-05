import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from '../ErrorBoundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <Route exact path='/' render={() => <h2>Welcome to StarDB</h2>} />
          <Route path='/people' component={PeoplePage} />
          <Route path='/planets' component={PlanetsPage} />
          <Route exact path='/starships' component={StarshipsPage} />
          <Route 
            path='/starships/:id' 
            render={({ match }) => {
              const { id } = match.params;
              return <StarshipCard dataId={id} type={'starship'} />
            }}
          />
        </div>
        </Router>
      </ErrorBoundary>
    );
  }
}
