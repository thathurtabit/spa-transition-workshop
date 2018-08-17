import styled from "styled-components";

const RoutesStyled = styled.section`
    min-height: 100vh;
    transition: transform ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut},
                opacity ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut};
    

    &.fade-enter,
    &.fade-exit.fade-exit-active {
        opacity: 0;
        transform: translateX(5%) rotateY(90deg) skew(45deg);
    }


    &.fade-enter.fade-enter-active,
    &.fade-exit {
        opacity: 1;
        transform: translateX(0) rotateY(0) skew(0);
    }

`;

export default RoutesStyled;