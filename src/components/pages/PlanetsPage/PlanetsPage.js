import React, { Component } from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PlanetsList, PlanetCard } from '../../sw-components/index';

import './PlanetsPage.css';

export default class PlanetsPage extends Component {
  state = {
    selectedPlanet: 2,
  };
  
  selectPlanet = (id) => {
    this.setState({
      selectedPlanet: id,
    })
  };

  render() {
    const { selectedPlanet } = this.state;

    const planetsList = (
      <PlanetsList 
        onItemSelected={this.selectPlanet}
        renderName={ ({ name }) => name }
      />
    );

    const planetCard = (
      <PlanetCard
        dataId={selectedPlanet}
        type={'planet'}
      />
    );

    return (
      <ErrorBoundary>
        <Row left={planetsList} right={planetCard} />
      </ErrorBoundary>
    );
  }
}