/* eslint-disable no-undef */
/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import Styled from 'styled-components';

// |||------Styled Component Start------
const CharacterItem = Styled.div`
  padding: 0 10%;

  .character-info{
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  img{
    width: 100%;
    max-width: 300px;
    height: 100%;
  }

  .character-list{
    h2{
      padding: 0;
      margin: 0;
    }

    padding: 10px;
  }

  ul{
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;

    li{
      
    }
  }
`;
// ------Styled Component End------|||

class CharacterDetail extends Component {
  state = {
    character: {},
  }


  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.match.params.id}?contains=trade%20paperback&apikey=66ef26227cbc5462b13d6310153279e2`);
      const character = await res.json();
      this.setState({
        character,
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    { /* Check if this.state.comic.data is still undefined */ }
    if (typeof this.state.character.data === 'undefined') {
      return 'Loading';
    }

    return (
      <CharacterItem>
        <h1>
          {this.state.character.data.results[0].name}
        </h1>
      </CharacterItem>
    );
  }
}


export default CharacterDetail;
