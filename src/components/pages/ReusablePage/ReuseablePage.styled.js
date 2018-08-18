import styled from 'styled-components';

export const PageWrap = styled.section`
    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
    }
`;

export const IndentTitle = styled.h1`
    font-size: calc(${props => props.theme.fonts.baseSize} + 10vmin);
    padding: 3rem;
    position: relative;
    text-align: center;
`;

export const IndentContent = styled.section`
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.5vmin);
    font-family: ${props => props.theme.fonts.secondary};
    line-height: 1.5;
    margin: 0 auto;
    max-width: 860px;
    padding: 3rem;
    position: relative;

    p {
        margin-bottom: 2.5rem;
    }
`;

export const HomeContent = styled.section`
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.1vmin);
    line-height: 1.4;
    max-width: 480px;
    padding: 3rem;
    text-align: left;

    &.home-stuff a {
        color: ${props => props.theme.colors.primary};
        position: relative;
        z-index: 1;

        &::before {
            background-color: ${props => props.theme.colors.dark};
            content: '';
            height: 80%;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            position: absolute;
            right: 0;
            z-index: -1;
        }
    }

    &.home-stuff a:hover {
        background: transparent;
        color: ${props => props.theme.colors.dark};
        
        &::before {
            background-color: ${props => props.theme.colors.white};
        }
    }

    ul {
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
        .ul-row {
            display: flex;
            list-style-type: none;

            li {
                margin-right: 10px;
            }
        }
    }

    li {
        margin-bottom: 1.2rem;
    }

    pre {
        margin: 0;
        display: inline;
    }

    hr {
        border: 1px dashed ${props => props.theme.colors.dark};
    }
`;

export const HomeContentH1 = styled.h1`
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.5vmin);
    margin-bottom: 2rem;

    em {
        display: block;
        font-size: calc(${props => props.theme.fonts.baseSize} + 1.5vmin);
        font-style: normal;
    }
`;

export const HomeContentH2 = styled.h2`
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.5vmin);
    margin-bottom: 2rem;
`;
