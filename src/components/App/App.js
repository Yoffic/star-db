import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import ItemsList from '../ItemsList';
import PersonCard from '../PersonCard';

import './App.css';

export default class App extends Component {
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
      <div className="container">
        <Header />
        { hero }
        <button className="btn btn-primary mb-4" onClick={this.toggleHero}>
          Toggle Random Planet
        </button>
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemsList />
          </div>
          <div className="col-md-6">
            <PersonCard />
          </div>
        </div>
      </div>
    );
  }
}
