/* eslint react/destructuring-assignment:0 */
import React, { Component } from 'react';

class ComicDetail extends Component {
  state = {
    comic: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${this.props.match.params.id}apikey=66ef26227cbc5462b13d6310153279e2`);
      const comic = await res.json();
      this.setState({
        comic,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const results = this.state.comic.data.results.map(result => (
      <div key={result.id}>
        <h1>{result.title}</h1>
        <p>{result.startYear}</p>
      </div>
    ));
    return (
      <div>
        {results}
      </div>
    );
  }
}


export default ComicDetail;
