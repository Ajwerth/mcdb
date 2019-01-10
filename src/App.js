/* eslint react/destructuring-assignment:0 */
// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './mcdb_logo.png';
import './App.css';
// Components
import ComicList from './ComicList';
import ComicDetail from './ComicDetail';

// App component
const App = () => (
  // wrap app in router
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
        {/* using the comic id to set up the route */}
        <Route path="/:id" component={ComicDetail} />
      </Switch>

    </div>
  </Router>
);


export default App;
