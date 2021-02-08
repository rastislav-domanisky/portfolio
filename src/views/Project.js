import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import DropdownMenu from '../components/Navigation/DropdownMenu/DropdownMenu';
import Footer from '../components/UI/Footer/Footer';
import Overlay from '../components/UI/Overlay/Overlay';
import ProjectScreen from '../components/ProjectScreen/ProjectScreen';

class Project extends Component {
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
                <ProjectScreen />
                <Footer />
            </div>
        );
    }
}

export default Project;
