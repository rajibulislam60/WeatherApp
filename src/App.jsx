import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  let [weatherData, setWeatherData] = useState();
  let [sunDetails, setSunDetails] = useState();
  let API_URL =
    "https://api.openweathermap.org/data/2.5/weather?lat=23.6850&lon=90.3563&appid=7eab25c1e05cc00019e44566204cba94";

  useEffect(() => {
    const fctehWeatherData = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeatherData(response.data.main);
        setSunDetails(response.data.sys);
      } catch (error) {
        console.error(error);
      }
    };
    fctehWeatherData();
  }, []);

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <div>
      <h2>Weather in Dhaka</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {(weatherData.temp - 273.15).toFixed(2)}°C</p>
          <p>Feels like: {(weatherData.feels_like - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        {sunDetails ? (
          <div>
            <p>Sun Rise: {formatTime(sunDetails.sunrise)}</p>
            <p>Sun Set: {formatTime(sunDetails.sunset)}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;