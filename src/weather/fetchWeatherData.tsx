import axios from "axios";
import { useQuery } from "react-query";

const fetchWeatherData = async (lat: number, lon: number) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  const response = await axios.get(apiUrl);
  return response.data;
};

const useWeatherData = (lat: number, lon: number) => {
  return useQuery(["weather", lat, lon], () => fetchWeatherData(lat, lon), {
    enabled: !!lat && !!lon,
  });
};

export default useWeatherData;
