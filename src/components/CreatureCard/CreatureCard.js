import React from 'react';

import './CreatureCard.css';
import CreatureView from '../CreatureView';

const CreatureCard = (props) => {
  const { data, image, loading, fields } = props;
  const creatureData = loading
    ? props.children
    : <CreatureView creature={data} image={image} fields={fields}></CreatureView>;

  return (
    <div className="creature-card card d-flex bg-dark">
      {creatureData}
    </div>
  );
};

export default CreatureCard;
