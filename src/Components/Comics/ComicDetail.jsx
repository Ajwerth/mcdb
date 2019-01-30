/* eslint-disable no-undef */
/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';
import Styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
// |||------Styled Component Start------
const ComicItem = Styled.div`
  padding: 0 10%;

  .comic-info{
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

class ComicDetail extends Component {
  state = {
    comic: {},
  }


  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${this.props.match.params.id}?contains=trade%20paperback&apikey=66ef26227cbc5462b13d6310153279e2`);
      const comic = await res.json();
      this.setState({
        comic,
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    { /* Check if this.state.comic.data is still undefined */ }
    if (typeof this.state.comic.data === 'undefined') {
      loading = true;
      return (
        <ClipLoader
          css={override}
          sizeUnit="px"
          size={150}
          color="#123abc"
          loading={this.state.loading}
        />
      );
    }

    // Map Through the List of Characters in the individual Comic
    const characterList = this.state.comic.data.results[0].characters.items.map((character, index) => (
      <li key={index}>
        <h3>{character.name}</h3>
      </li>
    ));

    return (
      <ComicItem>
        <h1>
          {this.state.comic.data.results[0].title}
        </h1>
        <div className="comic-info">
          {/* Pull the image of the Individual Comic */}
          <img alt={`${this.state.comic.data.results[0].title} Cover`} src={`${this.state.comic.data.results[0].thumbnail.path}` + `.${this.state.comic.data.results[0].thumbnail.extension}`} />

          {/* Create the UL of Characters in Individual Comic */}
          <div className="character-list">
            <h2>Characters</h2>
            <ul>
              {characterList}
            </ul>
          </div>
        </div>
      </ComicItem>
    );
  }
}


export default ComicDetail;
