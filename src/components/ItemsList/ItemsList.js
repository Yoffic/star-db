import React from 'react';
import PropTypes from 'prop-types';

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
    <ul className="items-list list-group">
      { content }
    </ul>
  );
}

ItemsList.defaultProps = {
  onItemSelected: () => {}
};

ItemsList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  renderName: PropTypes.func,
};

export default ItemsList;