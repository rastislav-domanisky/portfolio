import React, { useState, useEffect } from 'react';
import './ProjectScreen.scss';
import techIcons from '../../models/MySkillsAssets';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from './CodeBlock/CodeBlock';
import LoadSpinner from '../UI/LoadSpinner/LoadSpinner';
import Project from '../../models/Project';
import axios from 'axios';

const ProjectScreen = (props) => {

    const id = useLocation().pathname.substring(useLocation().pathname.lastIndexOf('/') + 1);

    const project = new Project();

    const [state, setState] = useState({
        isError: false,
        isLoaded: false,
        exist: false,
        project: {},
        md: "",
    });

    const loadProjectData = async () => {
        let projectExist = true;
        let myMd = "";

        const data = await project.getProjectData(id).then((response) => {
            return response;
        }).catch((e) => {
            console.warn(e);
            return null;
        });


        if (data === undefined || data === null) {
            projectExist = false;
        }

        let mdUrl = await project.getMarkdownUrl(id).then((response) => {
            return response;
        }).catch((e) => {
            console.warn(e);
            return null;
        });

        if (mdUrl === null || mdUrl === undefined) {
            console.log("bad URL");
        } else {
            myMd = await axios.get(mdUrl).then((response) => {
                return response.data;
            }).catch((_) => {
                console.log("Cannot load markdown");
                return "";
            });
        }

        setState((current) => {
            return {
                ...current,
                project: data,
                isLoaded: true,
                exist: projectExist,
                md: myMd,
            };
        });
    };

    useEffect(() => {
        loadProjectData();
    }, []);


    if (!state.isLoaded) {
        return (
            <div className="loading">
                <LoadSpinner />
            </div>
        );
    }

    if (state.isError) {
        return (<div className="error">ERROR</div>)
    }

    if (!state.exist) {
        return (<div className="error">404</div>)
    }

    return (
        <div className="ProjectScreen">
            <div className="pHeading">
                <h1>{state.project.name}</h1>
            </div>
            <div className="pIMG">
                <img alt={state.project.name} src={state.project.imgUrl} />
            </div>
            <div className="pUsedTech">
                {

                    state.project.usedTechnologies.map((el) => {
                        return (
                            <div className="pUsedTechIcon" key={id + el}>
                                { techIcons[el]}
                            </div>
                        );
                    })
                }
            </div>
            <div className="pDescription">
                {state.project.description}
            </div>
            <div className="pRepoUrl">
                <a href={state.project.repoUrl}>{state.project.repoUrl}</a>
            </div>
            <div className="pMdArea">
                <ReactMarkdown
                    plugins={[gfm]}
                    source={state.md}
                    renderers={{
                        code: CodeBlock,

                    }}
                />
            </div>
        </div>
    );
}

export default ProjectScreen;

