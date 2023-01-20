import axios from "axios";

export const getMeteo = async (gps_lat, gps_lng) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${gps_lat}&longitude=${gps_lng}&current_weather=true&timezone=auto`
  );
  console.log(response)
    return response.data;
};