import React from 'react';
import PropTypes from "prop-types"

const headerStyle = {
    fontSize: '22px',
    color: '#BA3F1D',
    fontFamily: 'Verdana',
    letterSpacing: '2px'
}

const MenuItem = props => {
    const { url, title } = props

    return (
        <li style={headerStyle}><a href={url}>{title}</a></li>
    );
};

MenuItem.defaultProps = { url: "/", title: "Empty menu element" }
MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}


export default MenuItem;

