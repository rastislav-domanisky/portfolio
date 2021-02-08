import React, { Component } from 'react';

import './MenuItem.scss';

class MenuItem extends Component {
    render() {
        return (
            <li className="menu_item">{this.props.children}</li>
        );
    }
}

export default MenuItem;

