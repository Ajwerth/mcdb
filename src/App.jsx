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
// import ComicList from './Components/Comics/ComicList';
// import ComicDetail from './Components/Comics/ComicDetail';
import CharacterList from './Components/Characters/CharacterList';
import CharacterDetail from './Components/Characters/CharacterDetail';
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
        <Route exact path="/" component={CharacterList} />
        {/* using the comic id to set up the route */}
        <Route path="/:id" component={CharacterDetail} />
      </Switch>

    </div>
  </Router>
);


export default App;
