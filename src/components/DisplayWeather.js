import React from 'react';

const DisplayWeather = ({cityWeather}) => {
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <div>
            <h3>{cityWeather.name}</h3>
            <p>{weekday[(new Date()).getDay()]}</p>
            <p>
            <span><img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/></span>
            </p>
            <p>
                <span>{cityWeather.weather[0].description}</span>
            </p>
            
            <p>
                <span>temp: </span>
                <span>{cityWeather.main.temp} C</span>
            </p>
            <p>
                <span>humidity: </span>
                <span>{cityWeather.main.humidity} %</span>
            </p>
            <p>
                <span>wind speed: </span>
                <span>{cityWeather.wind.speed} m/s</span>
            </p>
            
        </div>
    );
};

export default DisplayWeather;