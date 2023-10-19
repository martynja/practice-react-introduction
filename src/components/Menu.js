import React from 'react';
import MenuItem from "./MenuItem"

const Menu = () => {

    return (
        <ul>
            <MenuItem title="home" url="/" />
            <MenuItem title="kontakt" url="/contact" />
        </ul>
    );
};

export default Menu