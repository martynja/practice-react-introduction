import React from 'react';
import PropTypes from "prop-types"

const headerStyle = {
    fontSize: '22px',
    color: '#BA3F1D',
    fontFamily: 'Verdana',
    letterSpacing: '2px'
}

const MenuItem = props => {
    const { url, text } = props

    return (
        <li style={headerStyle}><a href={url}>{text}</a></li>
    );
};

MenuItem.defaultProps = { url: "/", text: "Empty menu element" }
MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}


export default MenuItem;

