import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from 'axios';

import "../styles/Map.css"

function Itinary(props) {
    const [coordinates, setCoordinates] = useState([]);
    const [center, setCenter] = useState([]);
    const [zoom, setZoom] = useState(13);
  
    useEffect(() => {
      const apiKey = '5b3ce3597851110001cf6248f17e661b2f3f4df7a9607989af28dfee';
      const start = '8.34234,48.23424';
      const end = '8.34423,48.24824';
      axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`)
        .then(response => {
          const coordinates = response.data.features[0].geometry.coordinates;
          const center = coordinates[Math.round(coordinates.length / 2)];
          setCoordinates(coordinates);
          setCenter(center);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

        return(
        <MapContainer center={'48.23424, 8.34234'} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={coordinates} color={'red'} weight={5} />
        </MapContainer>
        )
    }

export default Itinary;