import React from 'react';
import PropTypes from "prop-types";
import {PageWrap, IndentContent} from "./ReuseablePage.styled";

const ReusablePage = (props) => {
    const {content, color} = props;
    return (
        <PageWrap className={color}>
            <IndentContent>
              {content}
            </IndentContent>
        </PageWrap>
    );
};

export default ReusablePage;

ReusablePage.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}