import axios from "axios";

const forcastData = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
const getCity = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0/",
});

export { forcastData, getCity};

//https://api.openweathermap.org/data/2.5