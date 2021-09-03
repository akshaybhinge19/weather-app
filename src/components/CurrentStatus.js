//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import React,{useState,useEffect} from 'react'
import DateTime from './DateTime';
import DisplayWeather from './DisplayWeather';

function CurrentStatus() {
    const [currentWeather, setCurrentWeather] = useState([]);
    useEffect(()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
                let {latitude, longitude} = position.coords;
                fetch(
                    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=749579295f49a09226fd9dacaeea6325`
                    )
                    .then((response) => response.json())
                    .then((result) => {
                        console.log("Result is", result.list[0]);
                        setCurrentWeather(result.list[0]);
                        // console.log(result.list.main.temp)
                    })
            });
    },[])
    
    return (
        <div>
            <DateTime/>
             
            {currentWeather.main && <DisplayWeather cityWeather = {currentWeather} />}
        </div>
    )
}
export default CurrentStatus