import React from 'react';
import PropTypes from 'prop-types';

const Comic = ({ comic }) => (
  <div>
    <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
  </div>
);

export default Comic;

Comic.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
