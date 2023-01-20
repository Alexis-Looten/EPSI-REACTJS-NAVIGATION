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
          <div class="result">
            <div className="dep">
              {/* Start */}
              <fieldset>
                <legend>
                    Lieu de départ
                </legend>
                <div >
                  <SearchBar selectedCity={handleStart}/>
                  <div className="Meteo-depart">
                    <Local geoloc={handleLocal}/>
                    <div className="meteolabel">
                      <label class="sr-only">
                        Météo : {StartCity && <MeteoComp gps_lat={StartCity.gps_lat} gps_lng={ StartCity.gps_lng}/>}
                      </label>
                    </div>
                  </div>
                </div> 
              </fieldset>
            </div>
            <div className="arrive">
                {/* End */}
                <fieldset className="fieldarrive">
                  <legend >
                      Lieu d'arrivée
                  </legend>
                  <SearchBar selectedCity={handleEnd}/> 
                  <div className="meteo">
                      <label>
                        Météo : {EndCity && <MeteoComp gps_lat={EndCity.gps_lat} gps_lng={EndCity.gps_lng}/>}
                      </label>
                    </div> 
                </fieldset>  
            </div>
          </div>
          <div>
         
            {StartCity && EndCity && <MapComponent start={[StartCity.gps_lat, StartCity.gps_lng]} end={[EndCity.gps_lat, EndCity.gps_lng]}/>} 
             
          </div>
            
       </>
    );
}

export default Home;