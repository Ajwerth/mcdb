/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import Styled from 'styled-components';
// Import Components
import Character from './Character';


// |||------Styled Component Start------
const CharacterGrid = Styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    row-gap: 3rem;
`;
// ------Styled Component End------|||


class CharacterList extends Component {
  state = {
    characters: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=66ef26227cbc5462b13d6310153279e2');
      const characters = await res.json();
      this.setState({
        characters: characters.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <CharacterGrid>
        {this.state.characters.map(character => <Character key={character.id} character={character} />)}
      </CharacterGrid>
    );
  }
}


export default CharacterList;
