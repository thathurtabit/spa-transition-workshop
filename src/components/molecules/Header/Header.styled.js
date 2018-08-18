import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import HomeIcon from './img/home.svg';

export const HomeLink = styled(NavLink)`
  background: url(${HomeIcon}) no-repeat 4px 3px;
  background-size: 90%;
  border-radius: 100%;
  height: 30px;
  overflow: hidden;
  padding: 0 !important;
  text-indent: -9999em;
  width: 30px;

  &:hover {
    background-color: transparent;
  }
`;

export const HeaderNav = styled.nav`
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`;

export const HeaderNavUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
`;

export const HeaderNavLi = styled.li`
  list-style-type: none;
  margin: 10px;

  a {
    align-items: center;
    background: ${props => props.theme.colors.primary};
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    height: 20px;
    justify-content: center;
    padding: 5px;
    width: 20px;

    &.active {
      background: ${props => props.theme.colors.dark};
      color: ${props => props.theme.colors.primary};
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 20px;
  }
`;

const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  color: ${props => props.theme.colors.light};
  flex-direction: row;
  margin: 25px 15px 15px;
  text-align: center;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    position: fixed;
    left: 20px;
    top: 20px;
    margin-top: 0;
    right: 20px;
    z-index: 10;
  }
`;

export default HeaderStyled;