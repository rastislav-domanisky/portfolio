import React from 'react';
import './Main.scss';
import Avatar from './Avatar/Avatar';
import Heading from './Heading/Heading';
import AnimatedText from './AnimatedText/AnimatedText';
import DownBnt from '../UI/DownBtn/DownBnt';

const Main = () => {
    return (
        <main className="main">
            <Avatar width="150px" height="150px" />
            <div className="heading_area">
                <Heading />
                <AnimatedText />
            </div>
            <DownBnt />
        </main>
    );
}

export default Main;
