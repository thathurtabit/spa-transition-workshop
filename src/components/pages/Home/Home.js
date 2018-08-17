import React from 'react';
import { Link } from 'react-router-dom';
import { PageWrap, HomeContent, HomeContentH1, HomeContentH2 } from "../ReusablePage/ReuseablePage.styled";

const Home = () => (
  <PageWrap>
    <HomeContent className="home-stuff">
      <HomeContentH1><em>Task:</em> Make some cool page transitions, yeah?</HomeContentH1>
      <ul>
        <li>You&#39;ll want to look at: <pre>src/components/organisms/Routes.js</pre> to view and play with your pages</li>
        <li>You&#39;ll want to look at: <pre>src/components/organisms/Routes.styles.js</pre> to view and play with your transitions styles</li>
        <li>Here are some <a href="https://medium.com/@uiuxlab/10-page-transition-effects-trends-for-web-developer-in-2018-c07df6d1f747" target="_blank" rel="noopener noreferrer">Cool transition examples</a> but just basically just fuck about and <Link to="/page-1">have fun...</Link></li>
      </ul>
      <hr />
      <HomeContentH2>Stuff that might be useful</HomeContentH2>
      <ul className="ul-row">
        <li><a href="https://reacttraining.com/react-router/web/example/basic" target="_blank" rel="noopener noreferrer">React Router</a></li>
        <li><a href="https://reactcommunity.org/react-transition-group/css-transition" target="_blank" rel="noopener noreferrer">React Transition Group</a></li>
        <li><a href="https://www.styled-components.com/docs/basics#getting-started" target="_blank" rel="noopener noreferrer">Styled Components</a></li>
      </ul>
    </HomeContent>
  </PageWrap>
);

export default Home;