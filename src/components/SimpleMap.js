import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import '../styles/Map.css'

const SimpleMap = () => {

  return (
    <>
      <div className="mapping">
        <MapContainer center={[48.8640493, 2.3310526]} zoom={8}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </>
  );
};

export default SimpleMap;