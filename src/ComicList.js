/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';

// Import Components
import Comic from './Comic';

class ComicList extends Component {
  state = {
    comics: [],
  }

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

  render() {
    return (
      <div>
        {this.state.comics.map(comic => <Comic key={comic.id} comic={comic} />)}
      </div>
    );
  }
}


export default ComicList;
