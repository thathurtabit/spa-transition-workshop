import React from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import FourOhFour from "../../pages/FourOhFour/FourOhFour";
import Home from "../../pages/Home/Home";
import ReusablePage from "../../pages/ReusablePage/ReusablePage";
import PageWrap from "./Routes.styled";

const PageTransition = props => (
    <CSSTransition {...props} classNames="fade" timeout={100} />
  );

const Routes = (props) => {
    const {location} = props;
    const locationPath = location.pathname;
    return (
        <TransitionGroup>
            <PageTransition key={locationPath}>
                <PageWrap>
                    <Switch location={location}>
                        <Route exact path="/" component={() => <Home />} />
                        <Route exact path="/page-1" component={() => <ReusablePage content="Single Page Apps..." />} />
                        <Route exact path="/page-2" component={() => <ReusablePage content="Are"/>} />
                        <Route exact path="/page-3" component={() => <ReusablePage content="Quite"/>} />
                        <Route exact path="/page-4" component={() => <ReusablePage content="Nice."/>} />
                        <Route component={FourOhFour} />
                    </Switch>
                </PageWrap>
            </PageTransition>
        </TransitionGroup>
    );
};

export default Routes;

Routes.propTypes = {
    location: PropTypes.objectOf(PropTypes.string).isRequired,
};