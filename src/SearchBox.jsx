import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"


export default function SearchBox({updateInfo}){

let [city,setCity] = useState("");
let [error,setError] = useState(false);

const API_KEY = "782eac086ead372869e413e8465a848b";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

let getWeatherInfo = async () => {
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }

    console.log(result);
    return result;
    }catch(err){
        throw err;
    }
    
}

let handleClick = (event) =>{
    setCity(event.target.value);
}

let handleSubmit = async (event) =>{
    try{
  event.preventDefault();
  console.log(city);
  let newResult = await getWeatherInfo(city);
  setCity("");
  updateInfo(newResult);
    }catch(err){
        setError(true);
    }
}

    return(
        <div className='searchbox'>
        <form onSubmit={handleSubmit}>
            <TextField
            id="city" 
            label="city Name" 
            variant="outlined" 
            value={city} 
            onChange={handleClick}/>
            <br/><br/>
            <Button type='submit' variant="contained" >Search City</Button>
            {error && <p style={{color:"red"}}>No Such Place Exists</p>}
        </form>
        </div>
    )
}