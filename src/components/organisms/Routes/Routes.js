import React from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import FourOhFour from "../../pages/FourOhFour/FourOhFour";
import Home from "../../pages/Home/Home";
import ReusablePage from "../../pages/ReusablePage/ReusablePage";
import RoutesStyled from './Routes.styled';

const Routes = (props) => {
    const { location } = props;
    const locationPath = location.pathname;
    return (
        <TransitionGroup>
            <CSSTransition key={locationPath} classNames="fade" timeout={500}>
                <RoutesStyled>
                    <Switch location={location}>
                        <Route exact path="/" component={() => <Home />} />
                        <Route exact path="/page-1" component={() => <ReusablePage content="Single Page Apps..." transStyle="trans1" />} />
                        <Route exact path="/page-2" component={() => <ReusablePage content="are" transStyle="trans2" />} />
                        <Route exact path="/page-3" component={() => <ReusablePage content="quite" transStyle="trans3" />} />
                        <Route exact path="/page-4" component={() => <ReusablePage content="nice." transStyle="trans4" />} />
                        <Route component={FourOhFour} />
                    </Switch>
                </RoutesStyled>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Routes;

Routes.propTypes = {
    location: PropTypes.objectOf(PropTypes.string).isRequired,
};