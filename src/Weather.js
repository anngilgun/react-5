import React, { useState, useEffect, useCallback } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather({defaultCity}) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);


  const handleError = (message) => {
    alert(message || "Oops.. Something went wrong, please try again later")
  }

  const handleResponse =(response) => {
    if (response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        coordinates: response.data.coord,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  }

  const fetchInitialWeatherData = useCallback(() => {
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${url}`).then(handleResponse).catch(handleError);
  }, [])

  useEffect(() => {
    fetchInitialWeatherData()
  }, [fetchInitialWeatherData])

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "f5029b784306910c19746e40c14d6cd3";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse).catch( () => handleError("Oops.. No city found, please try again") );
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the city"
            autoComplete="off"
            autoFocus="on"
            id="search-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  } else {
    return "Loading...";
  }
}
