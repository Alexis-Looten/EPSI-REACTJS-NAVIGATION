import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Region from '../json/Region.json';
import Departement from '../json/Departement.json';
import Ville from '../json/Ville.json';

function Home(props){
    const [places, setPlaces] = useState(Region);
    const [placeholder, setPlaceholder] = useState("Entrer une région...");

    let reg = "";
    const dep = "";
    const vil = "";

    const handleReg = (data) => {
        reg = data;
        console.log("reg : "+reg);
    }

    const handlePlaces = () => {

        if (reg === "") {
            setPlaces(Region);
            return
        } 

        if (dep === "") {
            setPlaces(Departement);
            return
        }

        if (vil === "") {
            setPlaces(Ville);
            return
        }
        
    }

    return(
        <>
        <SearchBar placeholder={placeholder} data={places} reg={handleReg}/> 
        </>
    );
}

export default Home;