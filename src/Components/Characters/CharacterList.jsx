/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
// Import Components
import Character from './Character';


// |||------Styled Component Start------
const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 345px;
  grid-gap: 3rem;
  padding: 1rem;
  justify-items: center;
  margin: 25px;
`;

const CharContainer = styled.div`

`;

// ------Styled Component End------|||

class CharacterList extends Component {
  state = {
    characters: [],
    limit: 20,
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    try {
      // fetch initial list with default limit of 20
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=${this.state.limit}&apikey=66ef26227cbc5462b13d6310153279e2`);
      const characters = await res.json();
      this.setState({
        characters: characters.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  // increment the limit of comics by 20
  incrementLimit = async () => {
    try {
      const nextNum = this.state.limit + 20;
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=${nextNum}&apikey=66ef26227cbc5462b13d6310153279e2`);
      const characters = await res.json();
      this.setState({
        limit: this.state.limit + 20,
        characters: [...characters.data.results],
      });
    } catch (e) {
      console.log(e);
    }
  };

  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight)
      && this.state.characters.length
    ) { this.incrementLimit(); }
  }

  render() {
    if (typeof this.state.characters === 'undefined') {
      return (
        <LinearProgress />
      );
    }
    return (
      <CharContainer>
        <CharacterGrid>
          {this.state.characters
            .filter((character) => {
              if (character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
                return character;
              }
            })
            .map(character => (
              <Character key={character.id} character={character} />
            ))
          }
        </CharacterGrid>
      </CharContainer>
    );
  }
}


export default CharacterList;
