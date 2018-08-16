import React from 'react';
import { NavLink } from "react-router-dom";
import HeaderStyled, { HomeLink, HeaderNav, HeaderNavUl, HeaderNavLi } from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <HomeLink to="/" exact activeClassName="active">Transition are fun</HomeLink>
    <HeaderNav>
      <HeaderNavUl>
        <HeaderNavLi><NavLink to="/page-1" activeClassName="active">1</NavLink></HeaderNavLi>
        <HeaderNavLi><NavLink to="/page-2" activeClassName="active">2</NavLink></HeaderNavLi>
        <HeaderNavLi><NavLink to="/page-3" activeClassName="active">3</NavLink></HeaderNavLi>
        <HeaderNavLi><NavLink to="/page-4" activeClassName="active">4</NavLink></HeaderNavLi>
      </HeaderNavUl>
    </HeaderNav>
  </HeaderStyled>
);

export default Header;