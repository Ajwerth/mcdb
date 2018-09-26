import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comic = ({ comic }) => (
  <div>
    <Link to={`/${comic.id}`}>
      <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
    </Link>
  </div>
);

export default Comic;

Comic.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
