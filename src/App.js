/* eslint react/destructuring-assignment:0 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comic from './Comic';

class App extends Component {
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
    console.log(this.state.comics);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.comics.map(comic => <Comic key={comic.id} comic={comic} />)}
      </div>
    );
  }
}


export default App;
