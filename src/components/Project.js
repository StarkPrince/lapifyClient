import React, { useState } from 'react'
import { addLap } from '../api';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { addLap, getProject, createProject } from '../actions/lap'


function Project(props)
{
    const { _id, name } = props.project;
    const [timeStamps, setTimeStamps] = useState(props.project.timeStamps);
    const lap = async () =>
    {
        await addLap(_id);
        setTimeStamps([...timeStamps, new Date()]);
    }
    const timeParser = (time) =>
    {
        const dt = new Date(time);
        const date1 = dt.getDate().toString().padStart(2, '0');
        const date2 = (dt.getMonth() + 1).toString().padStart(2, '0');
        const date3 = dt.getFullYear().toString();
        const date4 = dt.getHours().toString().padStart(2, '0');
        const date5 = dt.getMinutes().toString().padStart(2, '0');
        const date6 = dt.getSeconds().toString().padStart(2, '0');
        return `${date1}/${date2}/${date3} ${date4}:${date5}:${date6} `;
    }

    return (
        <div>
            <h1>{name} <button onClick={lap} className="btn btn-primary">Add a new Lap</button></h1>
            {timeStamps ? timeStamps.map(time => <p key={time}>{timeParser(time)}</p>) : null}
        </div>
    )
}

export default Project
