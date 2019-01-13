import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

// |||------Styled Component Start------
const Wrapper = Styled.div`
    box-shadow: .5rem .5rem .5rem #8a8a8a;
    background-color: #222;
    padding: 10px;

    &:hover{
        color: red;
    }
    
    a{
        color: #fff;
        text-decoration: none;

        :hover{
            color: ##fd0000;
        }
    }

    img {
        width: 100%;
        max-width: 200px;
        border: 2px solid ##fd0000:
    }
    

`;
// ------Styled Component End------|||

const Character = ({ character }) => (
  <Wrapper>
    <Link to={`/${character.id}`}>
      <p>{character.name}</p>
      <img src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`} alt={character.name} />
    </Link>
  </Wrapper>
);

Character.propTypes = {
  character: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default Character;
