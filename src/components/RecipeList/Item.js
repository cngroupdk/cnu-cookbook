import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const { title } = item;

  return (
    <li>
      <strong>{title}</strong>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
