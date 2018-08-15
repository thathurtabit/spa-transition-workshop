import styled from 'styled-components';

const ThumbsStyled = styled.ul`
  display: block;
  list-style-type: none;
  margin: 5vw;
  padding: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    > li {
      float: left;
      width: 45%;
      margin: 0 5% 5% 0;

      @supports( display: grid ) {
        float: none;
        width: inherit;
        margin: 0;
      }
    }

    display: grid;
    grid-gap: 5vw;
    grid-template-columns: 1fr 1fr;
    margin-left: 200px;
  }
`;

export default ThumbsStyled;