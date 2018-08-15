import styled from 'styled-components';



export const PageWrap = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

    &.color-1 {
        background: ${props => props.theme.colors.primary};
    }

    &.color-2 {
        background: ${props => props.theme.colors.secondary};
    }

    &.color-3 {
        background: ${props => props.theme.colors.tertiary};
    }

    &.color-4 {
        background: ${props => props.theme.colors.light};
    }
`;

export const IndentContent = styled.section`
    font-size: calc(${props => props.theme.fonts.baseSize} + 10vmin);
    padding: 3rem;
    position: relative;
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
