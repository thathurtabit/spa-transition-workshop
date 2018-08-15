import React from 'react';
import PropTypes from "prop-types";
import {PageWrap, IndentContent} from "./ReuseablePage.styled";

const ReusablePage = (props) => {
    const {content} = props;
    return (
        <PageWrap>
            <IndentContent>
              {content}
            </IndentContent>
        </PageWrap>
    );
};

export default ReusablePage;

ReusablePage.propTypes = {
    locationPath: PropTypes.string.isRequired,
}