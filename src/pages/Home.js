import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Region from '../json/Region.json';
import Departement from '../json/Departement.json';
import Ville from '../json/Ville.json';
import Mapping from '../components/Mapping'

function Home(props){
    const [places, setPlaces] = useState(Region);
    const [placeholder, setPlaceholder] = useState("Entrer une région...");
    const [type, setType] = useState("region");

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleReg = (selectedValue) => {
        console.log(selectedValue, type)
        if (type === 'region') {
            setSelectedRegion(selectedValue.name); 
            setPlaces(Departement.filter(item => item.region_code === selectedValue.code));
            setType("department")
            setPlaceholder("Entrer un département...")
          } else if (type === 'department') {
            setSelectedDepartment(selectedValue.name);
            setPlaces(Ville.filter(item => item.department_code === selectedValue.code))
            setType("city")
            setPlaceholder("Entrer une ville...")
          } else if (type === 'city') {
            setSelectedCity(selectedValue.name);
          }
    }

    return(
        <>
        <SearchBar placeholder={placeholder} data={places} selectedValue={handleReg}/>
        <div className="Choices">
            <p>Région choisie : {selectedRegion}</p>
            <p>Département choisie : {selectedDepartment}</p>
            <p>Ville choisie : {selectedCity}</p>
        </div>
        <Mapping from={selectedCity}></Mapping>
        </>
    );
}

export default Home;