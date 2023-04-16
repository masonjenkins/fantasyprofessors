import React from "react";
import { Link } from 'react-router-dom'

import "./mainNavigation.css"
import MainHeader from "./mainHeader";
import NavLinks from "./navLinks";

const MainNavigation = props => {
    return <MainHeader>
        <button className="menu-button">
            <span />
            <span />
            <span />
        </button>
        <h1 className="nav-title"><Link to="/">FantasyProfessors</Link></h1>
        <nav>
            <NavLinks />
        </nav>
    </MainHeader>
}

export default MainNavigation;