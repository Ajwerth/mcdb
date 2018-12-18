/* eslint react/destructuring-assignment:0 */
import React, { Component } from 'react';

class ComicDetail extends Component {
  state = {
    comic: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/series/${this.props.match.params.id}?ts={hash.getExpiryTime(300);}&apikey=66ef26227cbc5462b13d6310153279e2&hash={hash.append(hash.getExpiryTime(240)).append("2e5d72da891f2b5ca57fe0b1a06a26f20a622220").append("66ef26227cbc5462b13d6310153279e2").encodeMd5().toHex().printDigest();}`);
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
