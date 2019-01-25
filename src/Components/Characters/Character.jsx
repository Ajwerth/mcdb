import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

// |||------Styled Component Start------
const CharacterIcon = Styled.div`
    box-shadow: .5rem .5rem .5rem #8a8a8a;
    padding: 10px 0;
    transform: skewY(5deg);
    overflow: hidden;
    width: 100%;
    background: #222;
    
    a{
        color: #fff;
        text-decoration: none;

        P{
          transform: skewY(-5deg);
        }


    }

    img {
        width: 100%;

        border: 2px solid ##fd0000:
    }
    

`;
// ------Styled Component End------|||

const Character = ({ character }) => (

  <CharacterIcon>
    <Link to={`/${character.id}`}>
      <p>{character.name}</p>
      <img src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`} alt={character.name} />
    </Link>
  </CharacterIcon>


);

Character.propTypes = {
  character: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default Character;
