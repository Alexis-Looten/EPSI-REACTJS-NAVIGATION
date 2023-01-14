import React, { useState } from "react";
import "./../styles/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = props.data.filter((value) => {
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

  const handleClick = (value) => {
    props.reg(value.name);
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={props.placeholder}
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
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 20).map((value, key) => {
            return (
              // <>
              //   <button>{value.name}</button>
                    <button id="ChoiceBtn" className="dataItem"  onClick={handleClick(value)}>{value.name}</button>
              // </> 
              // <a className="dataItem" href={value.name} target="_blank" rel="noreferrer">
              //   <p>{value.name}</p>
              // </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;