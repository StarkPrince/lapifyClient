import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLap, getProject, getProjects, createProject } from '../actions/lap'


function Content()
{
    const dispatch = useDispatch()
    const [projects, setProjects] = useState({})
    const fn = async () =>
    {
        const res = await getProjects()
        console.log(res)
    }
    fn();
    return (
        <div>
            <button onClick={addLap}>Lap</button>
        </div>
    )
}

export default Content
