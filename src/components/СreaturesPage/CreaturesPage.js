import React, { Component } from 'react';

import CreatureCard from '../CreatureCard';
import ItemsList from '../ItemsList';

import './CreaturesPage.css';

export default class CreaturesPage extends Component {
  state = {
    selectedCreature: 1,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  
  onCreatureSelect = (id) => {
    this.setState({
      selectedCreature: id,
    })
  };

  render() {
    const { selectedCreature } = this.state;
    return (
      <div className="row mb-2">
        <div className="col-md-6">
          <ItemsList onItemSelected={this.onCreatureSelect}/>
        </div>
        <div className="col-md-6">
          <CreatureCard creatureId={selectedCreature}/>
        </div>
      </div>
    );
  }
}