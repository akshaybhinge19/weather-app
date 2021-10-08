import React from 'react'
import '../css/forcast.css'
function DisplayForcast({currentWeather}) {
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <div className="container-forcast">
            {currentWeather.map((day,i)=>
                (<div key={i} className="container">
                <div>
                    {i!==0 ? (<h4>{weekday[(new Date()).getDay()]}</h4>) : (<h4>Today</h4>) } 
                    <div>{day.temp.max}°</div>
                </div>
                <div>
                 <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/>
                </div>
                <div>{day.weather[0].description} </div>
                
                <div>Humid {day.humidity}%</div>
                </div>
                )) 
            }
        </div>
    )
}

export default DisplayForcast
