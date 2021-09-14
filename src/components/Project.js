import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addLap, getProject, deleteProject } from '../actions/lap'

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

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => { dispatch(getProject(_id)); }, [dispatch, _id]);
    const { name, timeStamps: ts } = useSelector(state => state.lapReducer);

    const lap = async () => { dispatch(addLap(_id)); }
    const dlt = async () => { dispatch(deleteProject(_id)); history.push("/"); }

    return (
        <div className="container">
            <h1>
                <span class="name me-3">{name}</span>
                <button onClick={lap} className="btn btn-dark me-3">
                    <i class="bi bi-plus-lg" style={{ fontSize: '1.35rem', color: 'white' }}></i>
                </button>
                <button onClick={dlt} className="btn btn-danger me-3">
                    <i class="bi bi-trash" style={{ fontSize: '1.35rem', color: 'white' }}></i>
                </button>
            </h1>
            <ol className="container">{ts ? ts.map(time => <h5> <li key={time}>{timeParser(time)}</li> </h5>) : null}</ol>
        </div>
    )
}

export default Project
