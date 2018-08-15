import styled from "styled-components";

export const HeaderH1 = styled.h1`
  a {
    background-color: ${props => props.theme.colors.white};
    display: block;
    color: ${props => props.theme.colors.dark};
    padding: 0 10px;
    text-decoration: none;
    transition: background-color ${props => props.theme.transition.duration};

    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 1rem;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  color: ${props => props.theme.colors.light};
  flex-direction: row;
  margin-top: 15px;
  text-align: center;
  position: relative;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    position: fixed;
    left: 10px;
    top: 10px;
    margin-top: 0;
    right: 0;
  }
`;

export default HeaderStyled;