import React from 'react';
import DateTime from './DateTime';
import '../css/currentWeather.css'

const DisplayCurrentWeather = ({currentWeather}) => {
    let description = currentWeather.current.weather[0].description;
    return (
        <div className='current-contaner'>
            <div className='sub-currect-container'>
                <div><h3>Current Weather</h3></div>
                <div>Timezone {currentWeather.timezone}
                </div>
            </div>
            <DateTime/>
            <div>
                <img src={`http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/>
                <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            </div>
            <div className='current-details'>
                <p>{currentWeather.current.temp}° </p>
                <p>Humid:{currentWeather.current.humidity}%</p>
                <p>Wind speed:{currentWeather.current.wind_speed}m/s </p>
            </div>
        </div>
    );
};

export default DisplayCurrentWeather;