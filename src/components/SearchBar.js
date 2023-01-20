import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Region from '../json/Region.json';
import Departement from '../json/Departement.json';
import Ville from '../json/Ville.json';

function SearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [places, setPlaces] = useState(Region);
  const [placeholder, setPlaceholder] = useState("Entrer une région...");
  const [type, setType] = useState("region");

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = places.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = (event) => {
    setFilteredData([]);
    setWordEntered("");
  };

  const clearSelected = (event) => {
    clearInput();
    setSelectedRegion('');
    setSelectedDepartment('');
    setSelectedCity('');
    setPlaces(Region);
    setPlaceholder("Entrer une région...");
    setType("region");
  }

  const handleClick = (value) => {
    clearInput();
    if (type === 'region') {
      setSelectedRegion(value.name); 
      setPlaces(Departement.filter(item => item.region_code === value.code));
      setType("department")
      setPlaceholder("Entrer un département...")
    } else if (type === 'department') {
      setSelectedDepartment(value.name);
      setPlaces(Ville.filter(item => item.department_code === value.code))
      setType("city")
      setPlaceholder("Entrer une ville...")
    } else if (type === 'city') {
      setSelectedCity(value.name);
      props.selectedCity(value);
    }
  }

  return (
    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        <div className="resetIcon">
          {((selectedRegion.length !== 0) || (selectedDepartment.length !== 0) || (selectedCity.length !== 0)) && 
          <CancelPresentationIcon className="clearBtn" onClick={clearSelected} /> }
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 100).map((value, key) => {
            return (
              <button key={value.id} className="dataItem"  onClick={() => handleClick(value)}>{value.name} ({value.code}{value.zip_code})</button>
            );
          })}
        </div>
      )}
    </div>
    
    <div className="placeChoice">
      {selectedRegion && <p>{selectedRegion}</p>}
      {selectedDepartment && <p>{selectedDepartment}</p>}
      {selectedCity && <p>{selectedCity}</p>}
    </div>
    </>
  );
}

export default SearchBar;