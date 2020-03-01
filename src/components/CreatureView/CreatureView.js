import React from 'react';

import './CreatureView.css';

const CreatureView = ({ creature, image, fields }) => {
  const { name } = creature;
  const dataList = fields.map(({ field, label }) => {
    return (
      <li className="list-group-item">
        <span className="term">{label}: </span>
        <span>{field}</span>
      </li>
    );
  });

  return (
    <>
      <img className="creature-image"
          src={image} alt="" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {dataList}
          </ul>
        </div>
    </>
  );
};

export default CreatureView;