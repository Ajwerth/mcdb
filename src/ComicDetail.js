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
<<<<<<< HEAD
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${this.props.match.params.id}?ts={hash.getExpiryTime(300);}&apikey=66ef26227cbc5462b13d6310153279e2&hash={hash.append(hash.getExpiryTime(240)).append("2e5d72da891f2b5ca57fe0b1a06a26f20a622220").append("66ef26227cbc5462b13d6310153279e2").encodeMd5().toHex().printDigest();}`);
      const comic = await res.json();
=======
      const res = await fetch('https://gateway.marvel.com:443/v1/public/series?contains=trade%20paperback&apikey=66ef26227cbc5462b13d6310153279e2');
      const comics = await res.json();
>>>>>>> old-state
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
<<<<<<< HEAD
        <h1>Hello</h1>
=======
        <div>{this.state.comics}</div>
>>>>>>> old-state
      </div>

    );
  }
}


export default ComicDetail;
