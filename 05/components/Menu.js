import React from 'react';
import MenuItem from "./MenuItem"

const Menu = props => {

    console.log(props)

    // const menuItems = props.items.map(({ text, url }) => {
    //     return < MenuItem text={text} url={url} />
    // })

    const menuItems = props.items.map(item => {
        const { text, url } = item
        return < MenuItem text={text} url={url} />
    })


    return (
        <ul>
            {menuItems}
        </ul>
    );
};

export default Menu