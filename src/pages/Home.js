import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/Mapping";
import Local from "../components/Local"
import MeteoComp from "../components/Meteo";
import "../styles/Home.css";

function Home(props){
    const [StartCity, setStartCity] = useState({gps_lat: '', gps_lng:''});
    const [EndCity, setEndCity] = useState({gps_lat: '', gps_lng:''});

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
        <div className="Menu">
          <div className="SearchBar">
            {/* Start */}
            <p className="sectionTitle">Lieu de départ</p>
            <div className="localBar">
              <SearchBar selectedCity={handleStart}/>
              <Local geoloc={handleLocal}/>
            </div>
            {StartCity && <MeteoComp gps_lat={StartCity.gps_lat} gps_lng={ StartCity.gps_lng}/>}
          </div>
          
          <div className="SearchBar">
            {/* End */}
            <p className="sectionTitle">Lieu d'arrivée</p>
            <SearchBar selectedCity={handleEnd}/>
            {EndCity && <MeteoComp gps_lat={EndCity.gps_lat} gps_lng={EndCity.gps_lng}/>}
            
          </div>
        </div>
        <div className="Map">
          {StartCity && EndCity && <MapComponent start={[StartCity.gps_lat, StartCity.gps_lng]} end={[EndCity.gps_lat, EndCity.gps_lng]}/>}
          {<MapComponent start={[46.010085, 5.42875]} end={[48.86404, 2.331052]}/>}
        </div>
        </>
    );
}

export default Home;