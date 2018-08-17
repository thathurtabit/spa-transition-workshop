import React from 'react';
import PropTypes from "prop-types";
import { IndentContent } from "./ReuseablePage.styled";
import PageStyled from './Page.styled';

const ReusablePage = (props) => {
    const { content, pageStyle } = props;
    return (
        <PageStyled className={pageStyle}>
            <IndentContent className="content">{content} {pageStyle === 'page-style-4' && <span role="img" aria-label="OK emoji">👌</span>}</IndentContent>
        </PageStyled>
    );
};

export default ReusablePage;

ReusablePage.propTypes = {
    content: PropTypes.string.isRequired,
    pageStyle: PropTypes.string.isRequired,
}