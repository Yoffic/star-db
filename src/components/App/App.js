import React, { Component } from 'react';

import Header from '../Header';
import Hero from '../Hero';
import ItemsList from '../ItemsList';
import CreatureCard from '../CreatureCard';

import './App.css';

export default class App extends Component {
  state = {
    showHero: true,
    selectedCreature: 1,
  };

  toggleHero = () => {
    this.setState(({ showHero }) => {
      return {
        showHero: !showHero
      }
    });
  };

  onCreatureSelect = (id) => {
    this.setState({
      selectedCreature: id,
    })
  };

  render() {
    const { showHero, selectedCreature } = this.state;
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
            <ItemsList onItemSelected={this.onCreatureSelect}/>
          </div>
          <div className="col-md-6">
            <CreatureCard creatureId={selectedCreature}/>
          </div>
        </div>
      </div>
    );
  }
}
