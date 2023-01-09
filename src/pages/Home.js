import React from "react";
import SearchBar from "../components/SearchBar";
import BookData from "../Data.json";

function Home(props){
    return(
        <>
        <SearchBar placeholder="Entrer une région..." data={BookData} />
        </>
    );
}

export default Home;