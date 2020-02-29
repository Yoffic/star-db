import React, { Component } from 'react';

import CreatureCard from '../CreatureCard';
import ItemsList from '../ItemsList';
import Row from '../Row';
import SwapiService from '../../services/swapi-service';

import './CreaturesPage.css';

export default class CreaturesPage extends Component {
  swapiService = new SwapiService();
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

    const itemsList = (
      <ItemsList 
        onItemSelected={this.onCreatureSelect}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const creatureCard = <CreatureCard creatureId={selectedCreature}/>;

    return (
      <Row left={itemsList} right={creatureCard} />
    );
  }
}