//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import React,{useState,useEffect} from 'react'
import DisplayCurrentWeather from './DisplayCurrentWeather';
import DisplayForcast from './DisplayForcast';

function CurrentStatus() {
    const [currentWeather, setCurrentWeather] = useState([]);
    useEffect(()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
                let {latitude, longitude} = position.coords;
                fetch(
                    `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&appid=749579295f49a09226fd9dacaeea6325`
                    )
                    .then((response) => response.json())
                    .then((result) => {
                        // console.log("Result is", result);
                        setCurrentWeather(result);
                        // console.log(result.current.temp);
                    })
            });
    },[])
    
    return (
        <div>
            {currentWeather.current && <DisplayCurrentWeather currentWeather = {currentWeather} />}
            
            {currentWeather.daily && <DisplayForcast currentWeather = {currentWeather.daily} />}
        </div>
    )
}
export default CurrentStatus