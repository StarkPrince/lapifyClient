import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, newProject } from '../actions/user'


function Content()
{
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer)
    const [projects, setProjects] = useState([])

    useEffect(() =>
    {
        setProjects(user.projects)
    }, [user]);


    const onFormSubmit = async (e) =>
    {
        e.preventDefault();
        dispatch(newProject(e.target[0].value));
        e.target[0].value = '';
    }

    return (
        <div className="container">
            <div className="container d-inline-flex p-2">
                <form className="col-md-4 offset-md-3 text-center d-inline-flex p-3" onSubmit={onFormSubmit}>
                    <input id="newProject" className="form-control" name="newProject" placeholder="New Project Name" />
                    {/* <input type="hidden" name="userId" value={user._id} /> */}
                    <button className="btn btn-primary">Add</button>
                </form>
            </div >
            <h2>Projects</h2>
            <ol className="container">
                {console.log(projects)}
                {projects ? projects.map(id => <h3 key={id}><li><a href={`/${id}`}> {id}</a></li></h3>) : null}
            </ol>
        </div>
    )
}

export default Content
