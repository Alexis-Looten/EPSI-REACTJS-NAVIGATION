import React, { useEffect} from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = (props) => {
  const map = useMap();
  useEffect(() => {
    // var marker1 = L.marker([36.8065, 10.1815]).addTo(map);
    // map.on("click", function (e) {
    //   L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    //   L.waypoints(47.24273071428573, 2.41270887755102).addTo(map);
      L.Routing.control({
        waypoints: [
        //   L.latLng(props.from.gps_lat, props.from.gps_lng),
          L.latLng(48.86404930000000, 2.33105260000000),
          L.latLng(47.24273071428573, 2.41270887755102)
        ],
        lineOptions: {
          styles: [
            {
              color: "cyan",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        // routeWhileDragging: false,
        // geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: true,
        // draggableWaypoints: false,
        // fitSelectedRoutes: false,
        // showAlternatives: false,
        // show: false,
        collapsible: true,
        
        
      })
        // .on("routesfound", function (e) {
        //   e.routes[0].coordinates.forEach((c, i) => {
        //     setTimeout(() => {
        //       marker1.setLatLng([c.lat, c.lng]);
        //     }, 1000 * i);
        //   });
        // })
        .addTo(map);
    // });
  }, []);
  return null;
};

export default LeafletRoutingMachine;