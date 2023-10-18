
import React from 'react';
import { createRoot } from "react-dom/client";
import MenuItem from "../src/components/MenuItem"

const root = createRoot(document.querySelector('#root'));


root.render(
    <>
        <MenuItem title="Element 1" url="/home" />
        <MenuItem title="Element 2" url="/about" />
        <MenuItem title="Element 3" url="/contact" />
    </>)