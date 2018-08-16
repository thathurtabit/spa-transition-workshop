import React from 'react';
import PropTypes from "prop-types";
import { PageWrap, IndentContent } from "./ReuseablePage.styled";

const ReusablePage = (props) => {
    const { content, transStyle } = props;
    return (
        <PageWrap className={transStyle}>
            <IndentContent>
                {content}
            </IndentContent>
        </PageWrap>
    );
};

export default ReusablePage;

ReusablePage.propTypes = {
    content: PropTypes.string.isRequired,
    transStyle: PropTypes.string.isRequired,
}