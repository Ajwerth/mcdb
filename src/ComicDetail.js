/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';

// Create ComicDetail Componenet for Individual Comic Details
class ComicDetail extends Component {
  state = {
    comics: [],
  }

  // async await for the API Fetch
  async componentDidMount() {
    try {
      const res = await fetch('https://gateway.marvel.com:443/v1/public/series?contains=trade%20paperback&apikey=66ef26227cbc5462b13d6310153279e2');
      const comics = await res.json();
      this.setState({
        comics: comics.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Render Comic
  render() {
    return (
      <div>
        <div>{this.state.comics}</div>
      </div>
    );
  }
}


export default ComicDetail;
