import React from 'react';

import ErrorBoundary from '../../ErrorBoundary';
import { StarshipsList } from '../../sw-components/index';

import './StarshipsPage.css';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundary>
      <StarshipsList 
        onItemSelected={(id) => history.push(id)}
        renderName={ ({ name }) => name }
      />
    </ErrorBoundary>
  );
}

export default StarshipsPage;