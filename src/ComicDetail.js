/* eslint react/destructuring-assignment:0 */
import React, { Component } from 'react';

class ComicDetail extends Component {
  state = {
    comic: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/series?contains=trade%20paperback${this.props.match.params.id}$ts=$apikey=66ef26227cbc5462b13d6310153279e2$hash=`);
      const comic = await res.json();
      this.setState({
        comic,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}


export default ComicDetail;
