import React, { useState, useEffect } from 'react';
import './ProjectWidget.scss';
import techIcons from '../../../models/MySkillsAssets';
import { Link } from 'react-router-dom';
import Project from '../../../models/Project';
import LoadSpinner from '../../UI/LoadSpinner/LoadSpinner';

const ProjectWidget = (props) => {

    const project = new Project();

    const [state, setState] = useState({
        isError: false,
        isLoaded: false,
        projectData: {
            name: "",
            imgUrl: null,
            description: "",
            repoUrl: "",
            usedTechnologies: [],
        },
    });

    const loadProjectsIds = async () => {
        const data = await project.getProjectData(props.projectId).then((result) => {
            return result;
        }).catch((e) => {
            console.warn(e);
            return null;
        });

        setState((current) => {
            return {
                ...current,
                isError: data !== null ? false : true,
                isLoaded: true, 
                projectData: data,
            };
        });
    };

    useEffect(() => {
        loadProjectsIds();
    }, []);

    if(!state.isLoaded) {
        return (
            <div className="EmptyWidget">
                <LoadSpinner />
            </div>
        );
    }

    if(state.isError) {
        return (
            <div className="EmptyWidget">
                ERROR
            </div>
        );
    }

    return (
        <div className="ProjectWidget">
            <Link
            to={{
                pathname: "/projects/" + props.projectId,
            }}
            >
                <div className="ProjectName">
                    {state.projectData.name}
                </div>
                <div className="ProjectIMG">
                    <img alt={state.projectData.name} src={state.projectData.imgUrl}></img>
                </div>
                <div className="ProjectUsedTechnologies">
                    {   
                        state.projectData.usedTechnologies.map((el) => {
                            return (
                                
                                <div className="usedTech" key={props.projectId + el}>
                                    { techIcons[el]}
                                </div>
                                
                            );
                        })
                    }
                </div>
            </Link>
            <div className="ProjectDescription">
                {state.projectData.description}
            </div>
            <div className="ProjectRepo">
                <a href={state.projectData.repoUrl}>{state.projectData.repoUrl}</a>
            </div>
        </div>
    );
}

export default ProjectWidget;
