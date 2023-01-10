import React from "react";
import SearchBar from "../components/SearchBar";
import Ville from "../json/Ville.json";

function Home(props){
    return(
        <>
        <SearchBar placeholder="Entrer une région..." data={Ville} />
        </>
    );
}

export default Home;