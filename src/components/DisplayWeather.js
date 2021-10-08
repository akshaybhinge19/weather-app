import React from 'react';

const DisplayWeather = ({cityWeather}) => {
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return (
        <div className='search-result'>
            <div>
                <h3>{cityWeather.name}</h3>
                <p>{cityWeather.main.temp}°</p>
                <p>{weekday[(new Date()).getDay()]}</p>
            </div>
            <div className='search-weather'>
                <img src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon.replace(/^"|"$/g, '')}@2x.png`} alt="weatherIcon" className="img-responsive"/>
                {cityWeather.weather[0].description}
            </div>

            <div>
                <p>Humid:{cityWeather.main.humidity} % </p>
                <p>Wind speed:{cityWeather.wind.speed} m/s</p>
                
            </div>         
        </div>
    );
};

export default DisplayWeather;