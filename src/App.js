/* eslint react/destructuring-assignment:0 */
// Importing Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './mcdb_logo.png';
import './App.css';

//Importing Components
import ComicList from './ComicList';
import ComicDetail from './ComicDetail';

// creating the app componenet
const App = () => (
  {/* wrap app in router */}
  <Router>
    <div className="App">

      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>

      {/* Router Switch */}
      <Switch>
        <Route exact path="/" component={ComicList} />
        <Route path="/:id" component={ComicDetail} />
      </Switch>

    </div>
  </Router>
);


export default App;
