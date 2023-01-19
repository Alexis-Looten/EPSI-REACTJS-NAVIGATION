import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import { getRoute } from "./GetRoutes"; // Fonction qui récupère les données d'itinéraire à partir d'une API
import L from "leaflet";
import '../styles/Map.css'

const MapComponent = ({ start, end }) => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    getRoute(start, end).then((data) => {
      setRoute(data);
    });
  }, [start, end]);

  return (
    <div className="mapping">
        <MapContainer center={start} zoom={9}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline color="cyan" positions={route} weight={5}/>
        <Marker position={[start[0], start[1]]}>
            <Popup>
                <p>{start[0]} / {start[1]}</p>
            </Popup>
        </Marker>
        <Marker position={[end[0], end[1]]}>
            <Popup>
                <p>{end[0]} / {end[1]}</p>
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  );
};

let DefaultIcon = L.icon({
    iconUrl: "marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  
L.Marker.prototype.options.icon = DefaultIcon;

export default MapComponent;