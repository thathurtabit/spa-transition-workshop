import React from 'react';
import { PageWrap, HomeContent, HomeContentH1 } from "../ReusablePage/ReuseablePage.styled";

const Home = () => (
  <PageWrap>
    <HomeContent>
      <HomeContentH1>Make some cool page transitions, yeah?</HomeContentH1>
      <ul>
        <li><a href="https://medium.com/@uiuxlab/10-page-transition-effects-trends-for-web-developer-in-2018-c07df6d1f747" target="_blank" rel="noopener noreferrer">Cool transition examples</a></li>
      </ul>
    </HomeContent>
  </PageWrap>
);

export default Home;