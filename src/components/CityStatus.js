//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import React,{useState} from 'react'
import DisplayWeather from './DisplayWeather'
import CityInput from './CityInput';
import '../css/citySearch.css'
export default function CurrentStatus() {
    const [city, setCity] = useState("");
    const [cityWeather, setCityWeather] = useState("");
    const fetchCityWeather =() => {
        fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=749579295f49a09226fd9dacaeea6325`
        )
        .then((response) => response.json())
        .then((result) => {
            console.log("Result is", result);
            setCityWeather(result);
        })
    }
    return (
        <div className="city-output">
            <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
            {cityWeather && <DisplayWeather cityWeather = {cityWeather} />}
        </div>
    )
}