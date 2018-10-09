/* eslint react/destructuring-assignment:0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './mcdb_logo.png';
import './App.css';

import ComicList from './ComicList';
import ComicDetail from './ComicDetail';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={ComicList} />
        <Route path="/:id" component={ComicDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;
