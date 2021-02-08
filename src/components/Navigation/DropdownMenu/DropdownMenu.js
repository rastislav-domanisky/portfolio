import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.scss';
import './MenuItem/MenuItem';
import MenuItem from './MenuItem/MenuItem';

const DropdownMenu = () => {
    return (
        <div className="dropdown_menu">
            <ul>
                <Link to="/"><MenuItem>Home</MenuItem></Link>
                <Link to="/skills"><MenuItem>Skills</MenuItem></Link>
                <Link to="/projects"><MenuItem>Projects</MenuItem></Link>
                <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
            </ul>
        </div>
    );
}

export default DropdownMenu;
