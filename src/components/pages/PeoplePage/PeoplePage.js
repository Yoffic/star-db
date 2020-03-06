import React from 'react';

import Row from '../../Row';
import ErrorBoundary from '../../ErrorBoundary';
import { PeopleList, PersonCard } from '../../sw-components/index';

import './PeoplePage.css';

const PeoplePage = ({ match, history }) => {
  const itemsList = (
    <PeopleList 
      onItemSelected={(id) => history.push(id)}
      renderName={ ({ name }) => name }
    />
  );

  const personCard = (
    <PersonCard
      dataId={match.params.id}
      type={'person'}
    />
  );

  return (
    <ErrorBoundary>
      <h2>People</h2>
      <Row left={itemsList} right={personCard} />
    </ErrorBoundary>
  );
}

export default PeoplePage;