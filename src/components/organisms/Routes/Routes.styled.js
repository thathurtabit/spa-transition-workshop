import styled from "styled-components";

const RoutesStyled = styled.section`

    /* My Home page elements to transition */
    .home-stuff {
        transition: transform ${props => props.theme.transition.duration} ${props => props.theme.transition.cubicBez},
                opacity ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut};
    }

    /* Home Transition from... */
    &.fade-enter,
    &.fade-exit.fade-exit-active {
        .home-stuff {
            opacity: 0;
            transform: translateX(-5vw);
        }
    }


    /* My ReusablePage elements to transition */
    .title,
    .content,
    .home-stuff {
        transition: transform ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut},
                opacity ${props => props.theme.transition.duration} ${props => props.theme.transition.easeOut};
    }

    .content {
        transition-delay: 0.5s;
    }

    /* ReusablePage Transition from... */
    &.fade-enter,
    &.fade-exit.fade-exit-active {

        .title {
            opacity: 0;
            transform: translateX(5%) rotateY(90deg) skew(45deg);
        }
        .content {
            opacity: 0;
            transform: translateY(10vh);
        }
    }
`;

export default RoutesStyled;