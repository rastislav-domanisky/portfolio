import MenuBtn from '../UI/MenuBtn/MenuBtn';
import './Navigation.scss';
import React, { Component } from 'react';
import NavMenu from './NavMenu/NavMenu';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="Nav">
                <MenuBtn tgl={this.props.tgl} />
                <NavMenu />
            </nav>
        );
    }
}

export default Navigation;
