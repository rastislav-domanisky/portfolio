import React from 'react';
import './SkillIcon.scss';
import assets from '../../../../../models/MySkillsAssets';

const SkillIcon = (props) => {
    const assetIcon = assets[props.assetName];

    return (
        <div className="SkillIcon">
            { assetIcon }
        </div>
    );
}

export default SkillIcon;
