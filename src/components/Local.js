import React from "react";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import "../styles/Local.css"

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
    <div className="localIcon">
      <MyLocationIcon onClick={getLocation} />
    </div>
    
  );
};

export default Local;