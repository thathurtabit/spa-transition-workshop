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
  margin: 20px;

  a {
    align-items: center;
    background: ${props => props.theme.colors.secondary};
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    height: 20px;
    justify-content: center;
    padding: 5px;
    width: 20px;

    &.active {
      background: ${props => props.theme.colors.primary};
    }
  }
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