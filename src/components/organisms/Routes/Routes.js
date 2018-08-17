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
            <CSSTransition key={locationPath} classNames="fade" timeout={0}>
                <RoutesStyled>
                    <Switch location={location}>
                        <Route exact path="/" component={() => <Home />} />

                        {/* Here are your pages. Change 'em up, add more, or remove. I don't care. */}
                        {/* Also, I'm passing down the '.trans[1]' class to each ReusablePage, you can use that to create different transitions if you wanted */}
                        <Route exact path="/page-1" component={() => <ReusablePage content="Single Page Apps..." pageStyle="page-style-1" />} />
                        <Route exact path="/page-2" component={() => <ReusablePage content="are" pageStyle="page-style-2" />} />
                        <Route exact path="/page-3" component={() => <ReusablePage content="quite" pageStyle="page-style-3" />} />
                        <Route exact path="/page-4" component={() => <ReusablePage content="nice." pageStyle="page-style-4" />} />
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