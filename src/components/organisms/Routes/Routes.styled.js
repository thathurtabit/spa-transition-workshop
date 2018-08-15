import styled from "styled-components";

const RoutesStyled = styled.section`
    min-height: 100vh;
    transition: transform ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut},
                opacity ${props => props.theme.transition.duration} ease-out;

    &.fade-enter {
        opacity: 0;
        transform: translateX(50%);
    }

    &.fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateX(0);
    }

    &.fade-exit {
        opacity: 1;
        transform: translateX(0);
    }

    &.fade-exit.fade-exit-active {
        opacity: 0;
        transform: scale(0);
    }
`;

export default RoutesStyled;