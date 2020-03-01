import React from 'react';

import './CreatureView.css';

const CreatureView = ({ creature, image, children }) => {
  const { name } = creature;
  return (
    <>
      <img className="creature-image"
          src={image} alt="" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, (child) => {
                return React.cloneElement(child, { creature });
              })
            }
          </ul>
        </div>
    </>
  );
};

export default CreatureView;