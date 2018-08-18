import React from 'react';
import PropTypes from "prop-types";
import { IndentTitle, IndentContent } from "./ReuseablePage.styled";
import PageStyled from './Page.styled';

const ReusablePage = (props) => {
    const { content, pageStyle } = props;
    return (
        <PageStyled className={pageStyle}>
            <IndentTitle className="title">
                {content} {pageStyle === 'page-style-4' && <span role="img" aria-label="OK emoji">👌</span>}
            </IndentTitle>

            <IndentContent className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend sit amet orci vel mollis. Morbi mattis nisl sed magna euismod porttitor ut in mi. Etiam orci diam, tincidunt non ante blandit, consectetur porttitor mi. Vestibulum vitae lacus tincidunt, ultrices libero a, elementum tellus. Donec consequat iaculis aliquam. Vestibulum porta nunc sit amet massa ultrices bibendum. Sed pharetra elit imperdiet mattis dapibus. Quisque tempor condimentum ullamcorper.</p>

                <p>Ut mattis leo non elit porttitor, at cursus dui mattis. Ut maximus sodales pellentesque. Donec volutpat sem turpis, non tempor purus scelerisque vel. Phasellus at fringilla leo, laoreet sagittis velit. Aliquam ut nunc quis risus vehicula bibendum. Fusce euismod dapibus libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras at augue lacus. Sed congue blandit consequat. Duis dictum vitae augue non dignissim.</p>

                <p>Suspendisse purus risus, facilisis quis nulla et, mattis placerat orci. Nunc et risus sit amet lectus pharetra finibus non nec mi. Proin rutrum accumsan ante non semper. Proin id pharetra ante, ac venenatis nunc. Vivamus aliquet diam et arcu ornare accumsan. Aenean euismod massa vel arcu posuere, a egestas leo sollicitudin. Quisque interdum tempus nunc. Pellentesque fringilla sollicitudin purus sit amet aliquam. Nullam quis vestibulum enim. Donec sagittis diam tellus, at iaculis elit faucibus non.</p>

                <p>Cras ut viverra neque, eu porttitor purus. Vestibulum interdum iaculis nunc. Suspendisse pulvinar, diam a dignissim dictum, lacus nisi pulvinar sapien, vitae ornare massa tortor eu tellus. Quisque neque urna, malesuada vitae risus et, efficitur egestas orci. Donec et leo ligula. Ut vitae magna et turpis blandit ullamcorper vitae non nibh. Suspendisse vitae enim sed arcu faucibus luctus. Quisque gravida felis sit amet iaculis tempus. Pellentesque viverra enim quis felis porttitor, ut vehicula enim tincidunt. Aliquam id justo dolor. Sed ex justo, sollicitudin venenatis erat a, venenatis auctor risus. Sed semper metus non pretium blandit. Suspendisse a pellentesque risus. Praesent rutrum eu augue at accumsan. Nunc lobortis dictum nisl, sit amet consequat ligula maximus et. Vivamus vestibulum orci sed orci ultricies, vitae porttitor lorem dapibus.</p>

                <p>Quisque iaculis maximus quam, nec pretium nisl fermentum a. Vestibulum a nulla vel leo ultricies dictum a quis erat. Nam facilisis, nunc eu tincidunt porttitor, metus quam eleifend mauris, in dictum risus risus eget arcu. Quisque pellentesque massa eu luctus ultricies. Vivamus at hendrerit purus. Aenean commodo auctor purus id tristique. Nam pulvinar cursus sem eget accumsan. Aenean vitae velit in nunc finibus aliquet. Ut vel lacus fringilla, lacinia lorem sed, volutpat ipsum.</p>
            </IndentContent>
        </PageStyled>
    );
};

export default ReusablePage;

ReusablePage.propTypes = {
    content: PropTypes.string.isRequired,
    pageStyle: PropTypes.string.isRequired,
}