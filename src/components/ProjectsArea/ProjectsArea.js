import React, { useState, useEffect } from 'react';
import './ProjectsArea.scss';
import ProjectWidget from './ProjectWidget/ProjectWidget';
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner';
import Project from '../../models/Project';


const ProjectsArea = () => {

    const project = new Project();

    const [state, setState] = useState({
        isError: false,
        isLoaded: false,
        projectsIds: [],
    });

    const loadProjectsIds = async () => {
        const ids = await project.getProjects().then((result) => {
            return result;
        }).catch((e) => {
            console.warn(e);
            return null;
        });

        setState((current) => {
            return {
                ...current,
                isError: ids !== null ? false : true,
                isLoaded: true, 
                projectsIds: ids,
            };
        });
    };

    useEffect(() => {
        loadProjectsIds();
    }, []);

    if(!state.isLoaded) {
        return (
            <div className="loading">
                <LoadSpinner />
            </div>
        );
    }

    if(state.isError) {
        return (
            <div className="error">
                ERROR
            </div>
        );
    }

    return (
        <div className="ProjectsArea">
            {
                state.projectsIds.map((el, index) => {
                    return (
                        <ProjectWidget projectId={state.projectsIds[index]} key={el} />
                    );
                })
            }
        </div>
    );
}

export default ProjectsArea;
