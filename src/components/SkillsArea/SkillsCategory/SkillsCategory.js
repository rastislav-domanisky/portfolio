import React from 'react';
import './SkillsCategory.scss';
import SkillWidget from './SkillWidget/SkillWidget';

const SkillsCategory = (props) => {
    return (
        <div className="SkillsCategory">
            <div className="categoryHeading">
                <p>{ props.category }</p>
            </div>
            <div className="skillsGrid">
               {
                   props.skills.map((el) => {
                       return (
                           <SkillWidget data={el} key={el.asset}></SkillWidget>
                       );
                   })
               }
            </div>
        </div>
    );
}

export default SkillsCategory;
