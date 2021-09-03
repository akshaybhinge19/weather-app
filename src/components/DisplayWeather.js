import React from 'react';

const CityWeather = ({cityWeather}) => {
    return (
        
        <div className="container bg-dark">
                <p>
                    <span className="text-primary">temp: </span>
                    <span className="text-success">{cityWeather.main.temp} K</span>
                </p>
                <p>
                    <span className="text-primary">humidity: </span>
                    <span className="text-success">{cityWeather.main.humidity} %</span>
                </p>
                <p>
                    <span className="text-primary">pressure: </span>
                    <span className="text-success">{cityWeather.main.pressure} mbar</span>
                </p>
                <p>
                    <span className="text-primary">wind speed: </span>
                    <span className="text-success">{cityWeather.wind.speed} m/s</span>
                </p>
                <p>
                    <span className="text-primary">weather main: </span>
                    <span className="text-success">{cityWeather.weather[0].main}</span>
                </p>
                <p>
                    <span className="text-primary">weather description: </span>
                    <span className="text-success">{cityWeather.weather[0].description}</span>
                </p>
            </div>
    );
};

export default CityWeather;