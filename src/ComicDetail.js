/* eslint-disable no-undef */
/* eslint react/destructuring-assignment:0 */
// Import Dependencies
import React, { Component } from 'react';

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
    console.log(this.state);
    return (
      <div>
        <h1>
          {/* Check if this.state.comic.data is still undefined */}
          {typeof this.state.comic.data === 'undefined' ? 'Loading' : this.state.comic.data.results[0].title}
        </h1>
        <img />
      </div>
    );
  }
}


export default ComicDetail;
