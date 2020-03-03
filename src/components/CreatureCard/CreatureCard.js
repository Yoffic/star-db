import React from 'react';

import './CreatureCard.css';
import CreatureView from '../CreatureView';

const CreatureCard = (props) => {
  const { loading } = props;
  const creatureData = loading
    ? props.children
    : <CreatureView {...props}></CreatureView>;

  return (
    <div className="creature-card card d-flex bg-dark">
      {creatureData}
    </div>
  );
};

export default CreatureCard;
