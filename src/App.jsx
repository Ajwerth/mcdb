/* eslint react/destructuring-assignment:0 */
// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Interface/Header';
// Components
// import ComicList from './Components/Comics/ComicList';
// import ComicDetail from './Components/Comics/ComicDetail';
import CharacterList from './Components/Characters/CharacterList';
import CharacterDetail from './Components/Characters/CharacterDetail';
// App component
const baseUrl = process.env.PUBLIC_URL;
const App = () => (
  // wrap app in router
  <Router>
    <div className="App">

      <Header />
      {/* Router Switch */}
      <Switch>
        <Route exact path={`${baseUrl}/`} component={CharacterList} />
        {/* using the comic id to set up the route */}
        <Route path={`${baseUrl}/id`} component={CharacterDetail} />
      </Switch>

    </div>
  </Router>
);


export default App;
