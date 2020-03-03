import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from '../ErrorBoundary';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="container">
          <Header />
          <Hero />
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </ErrorBoundary>
    );
  }
}
