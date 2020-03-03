import React from 'react';

import './ItemsList.css';

const ItemsList = (props) => {
  const { data, onItemSelected, renderName } = props;
  let content;

  if (!data) {
    content = props.children;
  } else {
    const items = data.map((item) => {
      const { id } = item;
      const label = renderName(item);

      return (
        <li className="list-group-item" 
            key={id}
            onClick={ () => onItemSelected(id) }>
          {label}
        </li>
      );
    });

    content = items;
  }

  return (
    <ul className="items-list list-group bg-dark">
      { content }
    </ul>
  );
}

export default ItemsList;