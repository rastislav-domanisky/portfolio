import React from 'react';
import './NavMenu.scss';
import MenuItem from '../DropdownMenu/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div className="NavMenu">
            <ul>
                <Link to="/"><MenuItem>Home</MenuItem></Link>
                <Link to="/skills"><MenuItem>Skills</MenuItem></Link>
                <Link to="/projects"><MenuItem>Projects</MenuItem></Link>
                <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
            </ul>
        </div>
    );
}

export default NavMenu;
