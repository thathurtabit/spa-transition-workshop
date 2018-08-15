import React from 'react';
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import WebFont from "webfontloader";
import {BrowserRouter, Route} from "react-router-dom";
import theme from "./theme/theme";
import GATracker from './helpers/GATracker';
import Header from './components/molecules/Header/Header';
import Routes from './components/organisms/Routes/Routes';
import ScrollToTop from './components/molecules/ScrollToTop/ScrollToTop';

/* eslint-disable */
injectGlobal`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  body {
    background: #FFF;
    color: #404040;
  }

  ::selection {
    background: #ffefd5;
    color: #404040;
  }
`;
/* eslint-enable */

WebFont.load({
  typekit: { id: 'grv2xwj' },
  google: {
    families: ['Open Sans:400']
  }
});

const AppWrapper = styled.section`
  font-family: 'futura-pt', sans-serif;
  overflow-x: hidden;
`;

const App = () => (
  <BrowserRouter basename="/">
    <ScrollToTop>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header />
          <Route path="/" component={GATracker(Routes, {})} />
        </AppWrapper>
      </ThemeProvider>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
