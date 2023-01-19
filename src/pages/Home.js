import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/Mapping";

function Home(props){
    const [StartCity, setStartCity] = useState();

    const handleStart = (city) => {
      console.log(city)
      setStartCity(city);
    }

    const [EndCity, setEndCity] = useState();
    
    const handleEnd = (city) => {
      console.log(city)
      setEndCity(city);
    }
    

    return(
        <>
        {/* Start */}
        <SearchBar selectedCity={handleStart}/>

        {/* End */}
        <SearchBar selectedCity={handleEnd}/>

        {StartCity && EndCity && <MapComponent start={[StartCity.gps_lat, StartCity.gps_lng]} end={[EndCity.gps_lat, EndCity.gps_lng]}/>}
        </>
    );
}

export default Home;