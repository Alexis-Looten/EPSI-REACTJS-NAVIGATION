import axios from "axios";

const api_key = "5b3ce3597851110001cf6248f17e661b2f3f4df7a9607989af28dfee"

export const getRoute = async (start, end) => {
  const response = await axios.get(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${api_key}&start=${start[1]},${start[0]}&end=${end[1]},${end[0]}`
  );
  const coordinates = response.data.features[0].geometry.coordinates;
//   const center = coordinates[Math.round(coordinates.length / 2)];
  return coordinates.map((coord) => coord.reverse());
};