
import React from 'react';
import { createRoot } from "react-dom/client";
import MenuItem from "../src/components/MenuItem"

const root = createRoot(document.querySelector('#root'));

const Nav = () => {
    return (
        <nav> <Menu />  </nav>
    );
};

const Menu = () => {
    return (
        <ul>
            <MenuItem title="home" url="/" />
            <MenuItem title="kontakt" url="/contact" />
        </ul>
    );
};

root.render(
    <>
        <Nav />
    </>)