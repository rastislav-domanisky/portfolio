import React from 'react';
import './SkillsArea.scss';
import mySkills from '../../models/MySkills';
import SkillsCategory from './SkillsCategory/SkillsCategory';

const SkillsArea = () => {

    console.log(mySkills);

    return (
        <div className="SkillsArea">
            <SkillsCategory category="Programming" skills={mySkills.programming} />
            <SkillsCategory category="Software" skills={mySkills.software} />
        </div>
    );
}

export default SkillsArea;
