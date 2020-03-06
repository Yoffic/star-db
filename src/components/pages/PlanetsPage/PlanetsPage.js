import React from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PlanetsList, PlanetCard } from '../../sw-components/index';

import './PlanetsPage.css';

const PlanetsPage = ({ match, history }) => {
  const planetsList = (
    <PlanetsList 
      onItemSelected={(id) => history.push(id)}
      renderName={ ({ name }) => name }
    />
  );

  const planetCard = (
    <PlanetCard
      dataId={match.params.id}
      type={'planet'}
    />
  );

  return (
    <ErrorBoundary>
      <h2>Planets</h2>
      <Row left={planetsList} right={planetCard} />
    </ErrorBoundary>
  );
};

export default PlanetsPage;