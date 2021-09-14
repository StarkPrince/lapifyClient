import React, { useState, useEffect } from 'react'
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addLap, getProject } from '../actions/lap'

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

function Project(props)
{
    const _id = props.match.params.id;
    var ts = [];

    const dispatch = useDispatch();
    useEffect(() => { dispatch(getProject(_id)); }, [dispatch, _id]);

    const project = useSelector(state => state.lapReducer);
    ts = project.timeStamps;
    const { name } = project;

    const lap = async () =>
    {
        await addLap(_id);
        dispatch(getProject(_id));
    }

    return (
        <div className="container">
            <h1>{name} <button onClick={lap} className="btn btn-primary">New Lap</button></h1>
            <ol className="container">{ts ? ts.map(time => <h5> <li key={time}>{timeParser(time)}</li> </h5>) : null}</ol>
        </div>
    )
}

export default Project
