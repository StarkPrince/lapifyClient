import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addLap, getProject, getProjects, createProject } from '../actions/lap'
import { getProjects } from '../actions/lap'
import Project from './Project'


function Content()
{
    const dispatch = useDispatch()
    useEffect(() =>
    {
        dispatch(getProjects())
    }, [dispatch])

    const projects = useSelector(state => state.projectReducer)


    return (
        <div className="container">
            {projects.map(project => <Project key={project._id} project={project} />)}
        </div>
    )
}

export default Content
