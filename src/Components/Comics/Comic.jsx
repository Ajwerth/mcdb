import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

// |||------Styled Component Start------
const Wrapper = Styled.div`
  img {
    width: 100%;
    max-width: 200px;
  }
`;
// ------Styled Component End------|||

const Comic = ({ comic }) => (
  <Wrapper>
    <Link to={`/${comic.id}`}>
      <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
    </Link>
  </Wrapper>
);

Comic.propTypes = {
  comic: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comic;
