import React from 'react';
import './SubSkill.scss';
import SkillIcon from '../SkillIcon/SkillIcon';

const SubSkill = (props) => {
    return (
        <div className="SubSkill">
            <div className="subSkillSpacer"></div>
            <SkillIcon assetName={props.data.asset} />
            <p>{ props.data.value }</p>
        </div>
    );
}

export default SubSkill;
