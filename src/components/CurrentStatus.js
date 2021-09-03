//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import React,{useState,useEffect} from 'react'
import DateTime from './DateTime';

export default function currentStatus() {
    const [city, setcity] = useState("");
    const [cityWeather, setCityWeather] = useState("");
    function getLocation(){
        
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error);
        function success(pos) {
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
        } 
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={API key}`)
        .then((response) => response.json())
        .then((result) => {
            console.log("Result is", result);
            setCityWeather(result);
        })
    }, [])
    return (
        <div>
            <DateTime/>
        </div>
    )
}