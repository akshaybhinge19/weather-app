import React from 'react';

const DisplayWeather = ({cityWeather}) => {
    return (
        <div>
            <p>
                <span>temp: </span>
                <span>{cityWeather.main.temp} C</span>
            </p>
            <p>
                <span>humidity: </span>
                <span>{cityWeather.main.humidity} %</span>
            </p>
            <p>
                <span>pressure: </span>
                <span>{cityWeather.main.pressure} mbar</span>
            </p>
            <p>
                <span>wind speed: </span>
                <span>{cityWeather.wind.speed} m/s</span>
            </p>
            <p>
                <span>weather main: </span>
                <span>{cityWeather.weather[0].main}</span>
                <spna>{cityWeather.weather[0].icon}</spna>
            </p>
            <p>
                <span>weather description: </span>
                <span>{cityWeather.weather[0].description}</span>
            </p>
        </div>
    );
};

export default DisplayWeather;