/* eslint react/destructuring-assignment:0 */
// Dependencies
import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../Images/mcdb_logo.png';

const HeaderContainer = Styled.div`
  background-color: #222;
  height: 60px;
  padding: 20px;
  color: white;

  .App-logo {
      width: 150px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
  </HeaderContainer>
);


export default Header;
