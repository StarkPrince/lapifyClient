import React from 'react'
import { createProject } from '../actions/lap'
import { useDispatch, useSelector } from 'react-redux'


function Form()
{
    const dispatch = useDispatch();

    const project = async (e) =>
    {
        e.preventDefault();
        const projectName = e.target[0].value;
        createProject(projectName);
    }

    return (
        <div className="container d-inline-flex p-2">
            <form className="col-md-6 offset-md-4 text-center d-inline-flex p-2" onSubmit={project}>
                <input id="newProject" className="form-control" name="newProject" placeholder="New Project Name" />
                <button className="btn btn-primary">Add New Project</button>
            </form>
        </div >
    )
}

export default Form
