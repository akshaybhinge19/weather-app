import React, { useEffect, useState } from 'react'

function DateTime() {
    const [date, setdate] = useState(new Date());
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    useEffect(() => {
        let timerId = setInterval(()=>setdate(new Date()), 1000)
        return () => {
            clearInterval(timerId);
        }
    });
    return (
        <div className='get-time'>
            <h4>{weekday[date.getDay()]}</h4>
            <p>{date.toLocaleTimeString()}</p>
            <p>{date.toLocaleDateString()}</p> 
        </div>
    )
}

export default DateTime

