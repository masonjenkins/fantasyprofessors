import React from "react";
import { NavLink } from 'react-router-dom'

import "./navLinks.css";

const NavLinks = props => {
    return <ul className="navlinks">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Login</NavLink>
        </li>
    </ul>
}

export default NavLinks;