import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import CreaturesPage from '../СreaturesPage/CreaturesPage';
import ErrorIndicator from '../ErrorIndicator';

import './App.css';

export default class App extends Component {
  state = {
    showHero: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  toggleHero = () => {
    this.setState(({ showHero }) => {
      return {
        showHero: !showHero
      }
    });
  };

  render() {
    const { showHero, hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }

    const hero = showHero ? <Hero /> : null;
    return (
      <div className="container">
        <Header />
        { hero }
        <button className="btn btn-primary mb-4" onClick={this.toggleHero}>
          Toggle Random Planet
        </button>
        <CreaturesPage />
      </div>
    );
  }
}
