import React, { Component } from 'react';

import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { PeopleList, PersonCard } from '../sw-components/index';

import './CreaturesPage.css';

export default class CreaturesPage extends Component {
  state = {
    selectedCreature: 1,
  };
  
  onCreatureSelect = (id) => {
    this.setState({
      selectedCreature: id,
    })
  };

  render() {
    const { selectedCreature } = this.state;

    const itemsList = (
      <PeopleList 
        onItemSelected={this.onCreatureSelect}
        renderName={ ({ name }) => name }
      />
    );

    const creatureCard = (
      <PersonCard
        dataId={selectedCreature}
        type={'person'}
      />
    );

    return (
      <ErrorBoundary>
        <Row left={itemsList} right={creatureCard} />
      </ErrorBoundary>
    );
  }
}