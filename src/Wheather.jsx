import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./Wheather.css"

export default function Wheather(){

let [infoWeather,setInfoWeather] = useState({
    city:"dandeli",
    temp:25.02,
    minTemp:32.09,
    maxTemp:78.80,
    feelsLike: 29.74,
    humidity:34,
    weather: "overcaste clouds"
})

let updateInfo = (newresult) =>{
   setInfoWeather(newresult);
}

    return(
        <div className="wheatherheading">
            <h2>Weather App By React.js Practice</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={infoWeather}/>
        </div>
    )
}