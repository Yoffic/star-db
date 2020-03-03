import React, { Component } from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { StarshipsList, StarshipCard } from '../../sw-components/index';

import './StarshipsPage.css';

export default class StarshipsPage extends Component {
  state = {
    selectedStarship: 2,
  };
  
  selectStarship = (id) => {
    this.setState({
      selectedStarship: id,
    })
  };

  render() {
    const { selectedStarship } = this.state;

    const starshipsList = (
      <StarshipsList 
        onItemSelected={this.selectStarship}
        renderName={ ({ name }) => name }
      />
    );

    const starshipCard = (
      <StarshipCard
        dataId={selectedStarship}
        type={'starship'}
      />
    );

    return (
      <ErrorBoundary>
        <Row left={starshipsList} right={starshipCard} />
      </ErrorBoundary>
    );
  }
}