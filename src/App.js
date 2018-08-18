import React from 'react';
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import WebFont from "webfontloader";
import { BrowserRouter, Route } from "react-router-dom";
import theme from "./theme/theme";
import GATracker from './helpers/GATracker';
import Header from './components/molecules/Header/Header';
import Routes from './components/organisms/Routes/Routes';
import ScrollToTop from './helpers/ScrollToTop';

/* eslint-disable */
injectGlobal`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  a:link,
  a:active,
  a:visited {
    text-decoration: none;
    color: #404040;
    padding: 5px;
  }

  a:hover {
    background-color: #404040;
    color: #f6ff56;
  }

  body {
    background: #f6ff56;
    color: #404040;
  }

  ::selection {
    background: #404040;
    color: #f6ff56;
  }
`;
/* eslint-enable */

WebFont.load({
  google: {
    families: ['Do Hyeon', 'PT Sans']
  }
});

const AppWrapper = styled.section`
  background: ${props => props.theme.colors.primary};
  font-family: 'Do Hyeon', sans-serif;
  overflow-x: hidden;
`;

const App = () => (
  <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <ScrollToTop>
          <Header />
          <Route path="/" component={GATracker(Routes, {})} />
        </ScrollToTop>
      </AppWrapper>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
