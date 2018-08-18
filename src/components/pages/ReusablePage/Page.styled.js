import styled from 'styled-components';

const PageStyled = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
    overflow: hidden;

    &.page-style-1 {
        /* Stuff here ? */
    }

    &.page-style-2 {
        /* Stuff here ? */
    }

    &.page-style-3 {
        /* Stuff here ? */
    }

    &.page-style-4 {
        /* Stuff here ? */

        [role="img"] {
            display: inline-block;
            opacity: 0;
            transform: translateY(50%);
            transition: transform 0.75s ${props => props.theme.transition.cubicBez},
                        opacity 0.75s ${props => props.theme.transition.easeOut};
            transition-delay: 1s;

            .fade-enter-done & {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
`;

export default PageStyled;