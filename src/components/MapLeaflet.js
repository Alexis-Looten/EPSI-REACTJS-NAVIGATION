import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from 'axios';

import "../styles/Map.css"

class LeafletMap extends Component {

    state = {
        coordinates: [],
        center: [],
        zoom: 13
        
      }

      componentDidMount() {
        const apiKey = '5b3ce3597851110001cf6248f17e661b2f3f4df7a9607989af28dfee';
        const start = '8.34234,48.23424';
        const end = '8.34423,48.24824';
        
        axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`)
        .then(response => {
            const coordinates = response.data.features[0].geometry.coordinates;
            const center = coordinates[Math.round(coordinates.length / 2)];
            this.state.coordinates = coordinates;
            this.state.center = center;
            console.log(this.state)
        })
        .catch(error => {
        console.log(error);
        });
      } 

    render () {
        return(
        // <MapContainer center={[this.state.start.gps_lat, this.state.start.gps_lng]} zoom={7} scrollWheelZoom={true}>
        //     <TileLayer
        //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />

        //     {/* <Marker position={[51.505, -0.09]}>
        //         <Popup>
        //         A pretty CSS3 popup. <br /> Easily customizable.
        //         </Popup>
        //     </Marker> */}
        //     <Marker position={[this.state.start.gps_lat, this.state.start.gps_lng]}></Marker>
        //     <Marker position={[this.state.end.gps_lat, this.state.end.gps_lng]}></Marker>
            
        //     <Polyline positions={this.state.coordinates} color={'red'} weight={5} />

        //     {/* <MarkerClusterGroup>
        //         <Marker position={[49.8397, 24.0297]} />
        //         <Marker position={[52.2297, 21.0122]} />
        //         <Marker position={[51.5074, -0.0901]} />
        //     </MarkerClusterGroup> */}
        // </MapContainer>
        <MapContainer center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={this.state.coordinates} color={'red'} weight={5} />
        </MapContainer>
        )
    }
}

export default LeafletMap;