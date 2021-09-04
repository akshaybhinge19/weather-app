import React from 'react';
import DateTime from './DateTime';
const DisplayCurrentWeather = ({currentWeather}) => {
    return (
        <div>
            <div className='container'>
                <h3>Current Weather</h3>
                <DateTime/>
            </div>
            <div>
                {currentWeather.timezone}
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/>
            </div>
            <div>
                <span>{currentWeather.current.weather[0].description}</span>
            </div>
            <div>
                <span>temp: </span>
                <span>{currentWeather.current.temp} C</span>
            </div>
            <div>
                <span>humidity: </span>
                <span>{currentWeather.current.humidity} %</span>
            </div>
            <div>
                <span>wind speed: </span>
                <span>{currentWeather.current.wind_speed} m/s</span>
            </div>
            
            
        </div>
    );
};

export default DisplayCurrentWeather;