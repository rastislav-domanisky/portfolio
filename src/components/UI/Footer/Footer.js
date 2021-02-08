import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            Copyright © {new Date().getFullYear()} Rastislav Domaniský
            <br />All rights reserved
        </footer>
    );
}

export default Footer;
