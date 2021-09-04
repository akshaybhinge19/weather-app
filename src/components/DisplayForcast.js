import React from 'react'

function DisplayForcast({currentWeather}) {
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <div>
            {currentWeather.map((day,i)=>
                (<div key={i} className="container">
                <div>{i!==0 ? <h4>{weekday[(new Date()).getDay()]}</h4> :<h4>Today</h4> }</div>
                <div>
                 <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/>
                </div>
                <div>
                <span>{day.weather[0].description} </span>
                </div>
                <div>
                
                <span>temp: </span>
                <span>{day.temp.max} C</span>
                </div>
                
                <div>
                <span>humidity: </span>
                <span>{day.humidity} %</span>
                 </div>
                </div>
                )) 
            }
        </div>
    )
}

export default DisplayForcast
