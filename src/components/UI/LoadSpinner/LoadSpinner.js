import React from 'react';
import './LoadSpinner.scss';

const LoadSpinner = () => {
    return (
        <div className="LoadSpinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default LoadSpinner;
