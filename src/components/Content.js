import React from 'react'
import { useState } from 'react'

function Content()
{
    const [laps, setLaps] = useState([]);
    function addLap()
    {
        const lap = {
            id: Date.now(),
            time: Date.now()
        }
        setLaps([...laps, lap])
        console.log(laps)
    }
    return (
        <div>
            <button onClick={addLap}>Lap</button>
        </div>
    )
}

export default Content
