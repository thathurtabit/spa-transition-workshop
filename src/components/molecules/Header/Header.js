import React from 'react';
import {Link} from "react-router-dom";
import HeaderStyled, {HeaderH1, HeaderNav} from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <HeaderH1><Link to="/">Home</Link></HeaderH1>
    <HeaderNav>
      <ul>
        <li><Link to="/page-1">1.</Link></li>
        <li><Link to="/page-2">2.</Link></li>
        <li><Link to="/page-3">3.</Link></li>
        <li><Link to="/page-4">4.</Link></li>
      </ul>
    </HeaderNav>
  </HeaderStyled>
);

export default Header;