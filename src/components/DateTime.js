import React, { useEffect, useState } from 'react'

function DateTime() {
    const [date, setdate] = useState(new Date());
    useEffect(() => {
        let timerId = setInterval(()=>setdate(new Date()), 1000)
        return () => {
            clearInterval(timerId);
        }
    });
    return (
        <div>
            <p>Time:{date.toLocaleTimeString()}</p>
            <p>Date:{date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime

