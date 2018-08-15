import React from 'react';
import {Link} from "react-router-dom";
import HeaderStyled, {HeaderH1} from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <HeaderH1><Link to="/">Home</Link></HeaderH1>
    <nav>
      <ul>
        <li><Link to="/page-1">1.</Link></li>
        <li><Link to="/page-2">2.</Link></li>
        <li><Link to="/page-3">3.</Link></li>
        <li><Link to="/page-4">4.</Link></li>
      </ul>
    </nav>
  </HeaderStyled>
);

export default Header;