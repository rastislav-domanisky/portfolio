import React from 'react';
import './Avatar.scss';
import myPic from '../../../assets/me.jpg';

const Avatar = (props) => {
    return (
        <div className="Avatar" style={{
            width: props.width,
            height: props.height,
        }}>
            <img src={myPic} alt="My picture" />
        </div>
    );
}

export default Avatar;