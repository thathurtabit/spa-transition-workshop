import React from 'react';
import { PageWrap, IndentContent } from "../ReusablePage/ReuseablePage.styled";

const FourOhFour = () => (
    <PageWrap>
        <IndentContent>
            <h1>404 - Page not Found <span role="img" aria-label="shrug emoji">🤷</span></h1>
        </IndentContent>
    </PageWrap>
);

export default FourOhFour;