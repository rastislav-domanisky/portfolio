import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import DropdownMenu from '../components/Navigation/DropdownMenu/DropdownMenu';
import Footer from '../components/UI/Footer/Footer';
import Overlay from '../components/UI/Overlay/Overlay';
import ContactArea from '../components/ContactArea/ContactArea';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false,
        };
    }

    handleToggleDropdown = () => {
        this.setState((state) => {
            return {
                ...state,
                dropdownVisible: !state.dropdownVisible,
            }
        });
    }

    render() {
        return (
            <div>
                { this.state.dropdownVisible ? <Overlay tgl={this.handleToggleDropdown} /> : null}
                < Navigation tgl={this.handleToggleDropdown} />
                { this.state.dropdownVisible ? <DropdownMenu /> : null}
                <ContactArea />
                <Footer />
            </div>
        );
    }
}

export default Home;
