import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import CreaturesPage from '../СreaturesPage/CreaturesPage';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/swapi-service';

import './App.css';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showHero: true,
  };

  toggleHero = () => {
    this.setState(({ showHero }) => {
      return {
        showHero: !showHero
      }
    });
  };

  render() {
    const { showHero } = this.state;
    const hero = showHero ? <Hero /> : null;

    return (
      <ErrorBoundary>
        <div className="container">
          <Header />
          { hero }
          <button className="btn btn-primary mb-4" onClick={this.toggleHero}>
            Toggle Random Planet
          </button>
          <CreaturesPage />
        </div>
      </ErrorBoundary>
    );
  }
}
