import React from 'react';
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const headerStyle = {
    fontSize: '25px',
    color: 'olive',
    fontFamily: 'Verdana',
    letterSpacing: '2px'
}

// 1 - function

const HeaderFn = () => {
    return (
        <>
            <header style={headerStyle}>React component 1</header>
        </>
    );
};


// 2 - class ES2015

class HeaderCl extends React.Component {

    render() {

        return <header style={headerStyle}>React component 2</header>
    }
}

root.render(
    <>
        <HeaderFn />
        <HeaderCl />
    </>)