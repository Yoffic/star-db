import React, { Component } from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PeopleList, PersonCard } from '../../sw-components/index';

import './PeoplePage.css';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
  };
  
  selectPerson = (id) => {
    this.setState({
      selectedPerson: id,
    })
  };

  render() {
    const { selectedPerson } = this.state;

    const itemsList = (
      <PeopleList 
        onItemSelected={this.selectPerson}
        renderName={ ({ name }) => name }
      />
    );

    const personCard = (
      <PersonCard
        dataId={selectedPerson}
        type={'person'}
      />
    );

    return (
      <ErrorBoundary>
        <Row left={itemsList} right={personCard} />
      </ErrorBoundary>
    );
  }
}