import styled from 'styled-components';



export const PageWrap = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    transition: background-color ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut};
`;

export const IndentContent = styled.section`
    font-size: calc(${props => props.theme.fonts.baseSize} + 10vmin);
    padding: 3rem;
    position: relative;
    text-align: center;
`;

export const HomeContent = IndentContent.extend`
    font-size: calc(${props => props.theme.fonts.baseSize} + 2vmin);
`;

export const HomeContentH1 = styled.h1`
  font-size: calc(${props => props.theme.fonts.baseSize} + 3vmin);
`;

export const HeroLink = styled.a`
    background-color: ${props => props.theme.colors.dark};
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    min-height: 300px;
    position: relative;
    display: block;
`;
