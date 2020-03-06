import React from 'react';

import ErrorBoundary from '../../ErrorBoundary';
import { StarshipsList } from '../../sw-components/index';

import './StarshipsPage.css';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundary>
      <h2>Starships</h2>
      <StarshipsList 
        onItemSelected={(id) => history.push(id)}
        renderName={ ({ name }) => name }
      />
    </ErrorBoundary>
  );
}

export default StarshipsPage;