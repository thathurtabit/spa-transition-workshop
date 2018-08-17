import styled from 'styled-components';

const PageWrap = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;

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
            transition: transform 0.5s ${props => props.theme.transition.cubicBez},
                        opacity 0.5s ${props => props.theme.transition.easeOut};
            transition-delay: 0.5s;

            .fade-enter-done & {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
`;

export default PageWrap;