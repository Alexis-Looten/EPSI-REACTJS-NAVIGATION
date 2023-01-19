import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/Mapping";
import Local from "../components/Local"

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
        <SearchBar selectedCity={handleStart}/>
        <Local geoloc={handleLocal}/>

        {/* End */}
        <SearchBar selectedCity={handleEnd}/>

        {StartCity && EndCity && <MapComponent start={[StartCity.gps_lat, StartCity.gps_lng]} end={[EndCity.gps_lat, EndCity.gps_lng]}/>}
        </>
    );
}

export default Home;