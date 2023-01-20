import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/Mapping";
import Local from "../components/Local"
import MeteoComp from "../components/Meteo";

function Home(props){
    const [StartCity, setStartCity] = useState();
    const [EndCity, setEndCity] = useState();

    const handleStart = (city) => {
      setStartCity(city);
    }

    const handleEnd = (city) => {
      
      setEndCity(city);
    }

    const handleLocal = (geoloc) => { 
      setStartCity({
        gps_lat: geoloc.coords.latitude,
        gps_lng: geoloc.coords.longitude
        });
      window.confirm("Position actuelle utilisée comme lieu de départ")
    }
    
    return(
        <>
        {/* Start */}
        <fieldset className="">
          <legend>
              Lieu de départ
          </legend>
          <SearchBar selectedCity={handleStart}/>
          <Local geoloc={handleLocal}/>
          <label>
            Météo :
            {StartCity && <MeteoComp gps_lat={StartCity.gps_lat} gps_lng={ StartCity.gps_lng}/>}
          </label>
        </fieldset>

        {/* End */}
        <fieldset className="">
          <legend>
              Lieu de d'arrivée
          </legend>
          <SearchBar selectedCity={handleEnd}/>
          <label>
            Météo :
            {EndCity && <MeteoComp gps_lat={EndCity.gps_lat} gps_lng={EndCity.gps_lng}/>}
          </label>
        </fieldset>

        {StartCity && EndCity && <MapComponent start={[StartCity.gps_lat, StartCity.gps_lng]} end={[EndCity.gps_lat, EndCity.gps_lng]}/>}
        </>
    );
}

export default Home;