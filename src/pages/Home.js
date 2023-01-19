import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Region from '../json/Region.json';
import Departement from '../json/Departement.json';
import Ville from '../json/Ville.json';
import MapComponent from "../components/Mapping";

function Home(props){
    const [places, setPlaces] = useState(Region);
    const [placeholder, setPlaceholder] = useState("Entrer une région...");
    const [type, setType] = useState("region");

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [startPlaces, setStartPlaces] = useState(Region);
    const [startPlaceholder, setStartPlaceholder] = useState("Entrer une région...");
    const [startType, setStartType] = useState("region");

    const [selectedStartRegion, setSelectedStartRegion] = useState('');
    const [selectedStartDepartment, setSelectedStartDepartment] = useState('');
    const [selectedStartCity, setSelectedStartCity] = useState('');

    const handleEnd = (selectedEnd) => {
        // console.log(selectedValue, type)
        if (type === 'region') {
            setSelectedRegion(selectedEnd.name); 
            setPlaces(Departement.filter(item => item.region_code === selectedEnd.code));
            setType("department")
            setPlaceholder("Entrer un département...")
          } else if (type === 'department') {
            setSelectedDepartment(selectedEnd.name);
            setPlaces(Ville.filter(item => item.department_code === selectedEnd.code))
            setType("city")
            setPlaceholder("Entrer une ville...")
          } else if (type === 'city') {
            setSelectedCity(selectedEnd);
          }
    }

    const handleStart = (selectedStart) => {
      // console.log(selectedValue, type)
      if (startType === 'region') {
        setSelectedStartRegion(selectedStart.name); 
          setStartPlaces(Departement.filter(item => item.region_code === selectedStart.code));
          setStartType("department")
          setStartPlaceholder("Entrer un département...")
        } else if (startType === 'department') {
          setSelectedStartDepartment(selectedStart.name);
          setStartPlaces(Ville.filter(item => item.department_code === selectedStart.code))
          setStartType("city")
          setStartPlaceholder("Entrer une ville...")
        } else if (startType === 'city') {
          setSelectedStartCity(selectedStart);
        }
  }

    return(
        <>

        {/* Start */}
        <SearchBar placeholder={startPlaceholder} data={startPlaces} selectedValue={handleStart}/>
        <div className="Choices">
            <p>Région choisie : {selectedStartRegion}</p>
            <p>Département choisie : {selectedStartDepartment}</p>
            <p>Ville choisie : {selectedStartCity.name}</p>
            
            
        </div>

        {/* End */}
        <SearchBar placeholder={placeholder} data={places} selectedValue={handleEnd}/>
        <div className="Choices">
            <p>Région choisie : {selectedRegion}</p>
            <p>Département choisie : {selectedDepartment}</p>
            <p>Ville choisie : {selectedCity.name}</p>
        </div>


        {selectedCity && selectedStartCity && <MapComponent start={[selectedStartCity.gps_lat, selectedStartCity.gps_lng]} end={[selectedCity.gps_lat, selectedCity.gps_lng]}/>}

        
        </>
    );
}

export default Home;