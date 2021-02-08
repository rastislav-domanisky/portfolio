import React, { Component } from 'react';
import './Overlay.scss';

class Overlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
            className="Overlay"
            onClick={this.props.tgl}
            style={{
                height: document.body.scrollHeight,
            }}
            >
            </div>
        );
    }
}

export default Overlay;

