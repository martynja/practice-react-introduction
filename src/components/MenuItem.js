import React from 'react';

const headerStyle = {
    fontSize: '18px',
    color: '#BA3F1D',
    fontFamily: 'Verdana',
    letterSpacing: '2px'
}


const MenuItem = props => {
    return (
        <li style={headerStyle}><a href={props.url}>{props.title}</a></li>
    );
};


export default MenuItem;

