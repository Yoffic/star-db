import React from 'react';

import './ItemsList.css';

const ItemsList = (props) => {
  const { data, onItemSelected, renderItem } = props;
  let content;

  if (!data) {
    content = props.children;
  } else {
    const items = data.map((item) => {
      const { id } = item;
      const label = renderItem(item);
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