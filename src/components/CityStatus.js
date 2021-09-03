//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import React,{useState,useEffect} from 'react'
import DisplayWeather from './DisplayWeather'
import CityInput from './CityInput';

export default function currentStatus() {
    const [city, setCity] = useState("");
    const [cityWeather, setCityWeather] = useState("");
    useEffect(() => {
        const fetchCityWeather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
        .then((response) => response.json())
        .then((result) => {
            console.log("Result is", result);
            setCityWeather(result);
        })
    }, [city])
    return (
        <div>
            <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
            <DisplayWeather cityWeather = {cityWeather} />
        </div>
    )
}