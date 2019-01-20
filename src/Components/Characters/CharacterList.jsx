/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// Import Components
import Character from './Character';


// |||------Styled Component Start------
const CharacterGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    row-gap: 3rem;
`;

const CharContainer = styled.div`

`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 10px;
`;
// ------Styled Component End------|||

class CharacterList extends Component {
  state = {
    characters: [],
    limit: 20,
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=${this.state.limit}&apikey=66ef26227cbc5462b13d6310153279e2`);
      const characters = await res.json();
      this.setState({
        characters: characters.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.limit !== prevState.limit) {
      return ({ limit: nextProps.limit }); // <- this is setState equivalent
    }
  }

  incrementLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + 20,
    }));
  };

  render() {
    return (
      <CharContainer>
        <CharacterGrid>
          {this.state.characters.map(character => <Character key={character.id} character={character} />)}
        </CharacterGrid>
        <ButtonContainer>
          <Button onClickFunction={this.incrementLimit}>Load More</Button>
        </ButtonContainer>
      </CharContainer>
    );
  }
}


export default CharacterList;
