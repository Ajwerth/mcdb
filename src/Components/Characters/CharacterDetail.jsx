/* eslint-disable no-undef */
/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
// |||------Styled Component Start------
const CharacterItem = styled.div`
  display: flex;
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

`;

const ImageDesc = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  img{
    transform: skewY(5deg);
  }
  
  p{
    font-size: 1.3rem;
    text-align: left;
    margin: 0 0 0 1rem;
  }

`;

const AppearancesList = styled.div`
  flex: 1;
  padding: 10px;
  
  h2{
    padding: 0;
    margin: 0;
  }

  ul{
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;
    li{
      font-size: 1rem;
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
    //  Check if this.state.comic.data is still undefined
    if (typeof this.state.character.data === 'undefined') {
      return (
        <LinearProgress />
      );
    }

    // Get List of Appearances by this Character
    const appearanceList = this.state.character.data.results[0].comics.items.map((comic, index) => (
      <li key={index}>
        <p>{comic.name}</p>
      </li>
    ));


    return (
      <CharacterItem>
        {/* Character Name */}
        <h1>
          {this.state.character.data.results[0].name}
        </h1>

        <ImageDesc>
          {/* Character Image */}
          <img alt={this.state.character.data.results[0].name} src={`${this.state.character.data.results[0].thumbnail.path}.${this.state.character.data.results[0].thumbnail.extension}`} />

          {/* Character Description */}
          <p>{this.state.character.data.results[0].description}</p>
        </ImageDesc>

        {/* List Of Comic Appearance By This Character */}
        <AppearancesList>
          <h2>Appearances</h2>
          <ul>
            {appearanceList}
          </ul>
        </AppearancesList>
      </CharacterItem>
    );
  }
}


export default CharacterDetail;
