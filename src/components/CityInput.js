
import React, {useState} from 'react';

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [error, setError] = useState("");


    const handleInputChange = (event) => {
        setCity(event.target.value);
        
    }
    //console.log("city is", city);
    const handleSubmit = () => {
    // logic to see if city field is empty
        if(!city) {
            setError("City field is empty");
        } else {
            setError("");
            // Make API calls
            fetchCityWeather();
        }
    }
    return (
        <div>
            <div>
                <label>
                <input value={city} type="text" placeholder="Enter city" onChange= {handleInputChange}/>
                </label>
                <p>{error}</p>
            </div>
            <button onClick={handleSubmit}>Find</button>
        </div>
    );
};

export default CityInput;