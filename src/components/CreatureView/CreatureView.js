import React from 'react';

import './CreatureView.css';

const CreatureView = ({ data, image, fields }) => {
  const startKeyValue = 21;
  const { name } = data;
  const dataList = fields.map(({ field, label }, idx) => {
    const currentKey = startKeyValue + idx;
    return (
      <li className="list-group-item" key={currentKey}>
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
          <h4 className="text-primary">{name}</h4>
          <ul className="list-group list-group-flush">
            {dataList}
          </ul>
        </div>
    </>
  );
};

export default CreatureView;