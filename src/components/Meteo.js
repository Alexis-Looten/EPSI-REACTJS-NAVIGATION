import React, { useState, useEffect } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import EggIcon from '@mui/icons-material/Egg';
import { getMeteo } from "./GetMeteo";
import '../styles/Meteo.css'


const MeteoComp = ({ gps_lat, gps_lng }) => {
    const [temperature, setTemperature] = useState();
    const [weatherCode, setweatherCode] = useState();
    // const [weatherIcon, setweatherIcon] = useState();

    useEffect(() => {
        getMeteo(gps_lat, gps_lng).then((data) => {
            console.log(data);
            setTemperature(data.current_weather.temperature);
            setweatherCode(data.current_weather.weathercode);
        });
    }, [gps_lat, gps_lng]);

    let meteoIcon;

    if (weatherCode === 0){
        meteoIcon = <LightModeIcon/>;
    }
    if (weatherCode > 0 && weatherCode < 50 ){
        meteoIcon = <CloudIcon/>;
    }
    if (weatherCode > 50 && weatherCode < 70 ){
        meteoIcon = <EggIcon/>;
    }
    if (weatherCode > 70 && weatherCode < 90 ){
        meteoIcon = <AcUnitIcon/>;
    }
    if (weatherCode > 90) {
        meteoIcon = <ThunderstormIcon/>;
    }

  return (
    <>
    <div className="meteo">
        <div className="meteoIcon">
        {meteoIcon}
        </div>
        <div className="meteoTemp">
            <p>{temperature} °C</p>
        </div>
    </div>
    
    </>
  );
};

export default MeteoComp;