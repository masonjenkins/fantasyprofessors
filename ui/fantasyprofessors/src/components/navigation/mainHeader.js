import React from "react";

import './mainHeader.css';

const MainHeader = props => {
    return <header className="mainHeader">
        {props.children}
    </header>
}

export default MainHeader;