import React from 'react';
import './SkillWidget.scss';
import SkillIcon from './SkillIcon/SkillIcon';
import SubSkill from './SubSkill/SubSkill';

const SkillWidget = (props) => {
    return (
        <div className="SkillWidget">
            <div className="skillWidgetName">
                <SkillIcon assetName={props.data.asset}/>
                <p>{props.data.value}</p>
            </div>
            <div className="skillSubs">
                {
                    props.data.sub.map((el) => {
                        return (
                            <SubSkill data={el} key={el.asset} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SkillWidget;
