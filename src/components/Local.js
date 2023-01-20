import React from "react";
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Local = (props) => {

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        props.geoloc(position);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <div className="searchIcon">
        <MyLocationIcon id="clearBtn" onClick={getLocation} />
    </div>
  );
};

export default Local;