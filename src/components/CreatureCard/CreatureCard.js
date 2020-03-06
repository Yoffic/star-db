import React from 'react';

import './CreatureCard.css';
import Spinner from '../Spinner';
import CreatureView from '../CreatureView';

const CreatureCard = (props) => {
  const { loading, data } = props;

  return (
    <div className="creature-card card d-flex">
      {loading && <Spinner />}
      {!loading && data && <CreatureView {...props}></CreatureView>}
    </div>
  );
};

export default CreatureCard;
