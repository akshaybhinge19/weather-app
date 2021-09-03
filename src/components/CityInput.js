
import React from 'react';

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [error, setError] = React.useState("");


    const handleInputChange = (event) => {
        setCity(event.target.value);
        
    }
    //console.log("city is", city);
    const handleSubmit = () => {
    // write logic to see if city field is empty
        if(!city) {
            setError("City field is empty");
        } else {
            setError("");
            // Make API calls
            fetchCityWeather();
        }
    }
    return (
        
    );
};

export default CityInput;