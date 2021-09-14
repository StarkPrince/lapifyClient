import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addLap, getProject, getProjects, createProject } from '../actions/lap'
import { getProjects, createProject } from '../actions/lap'
import Project from './Project'


function Content()
{
    const dispatch = useDispatch()
    useEffect(() =>
    {
        dispatch(getProjects())
    }, [dispatch])


    const onFormSubmit = async (e) =>
    {
        e.preventDefault();
        dispatch(createProject(e.target[0].value));
    }
    const projects = useSelector(state => state.projectReducer)

    return (
        <div className="container">
            <div className="container d-inline-flex p-2">
                <form className="col-md-4 offset-md-3 text-center d-inline-flex p-3" onSubmit={onFormSubmit}>
                    <input id="newProject" className="form-control" name="newProject" placeholder="New Project Name" />
                    <button className="btn btn-primary">Add</button>
                </form>
            </div >
            <h2>Projects</h2>
            <ol className="container">
                {projects ? projects.map(project => <h3 key={project._id}><li><a href={`/${project._id}`}> {project.name}</a></li></h3>) : null}
            </ol>
        </div>
    )
}

export default Content
