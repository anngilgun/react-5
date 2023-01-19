import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./Weatherinfo";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,

      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "f5029b784306910c19746e40c14d6cd3";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />

        <div id="forecast">
          <ul className="list-group list-group-horizontal horiz" id="forecast">
            <li className="list-group-item">
              <ul>
                <li className="em2">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"
                  />
                </li>
                <li className="TEMP">
                  <span id="max">20°</span>
                  <span id="min">10°</span>
                </li>
                <li className="MON">MON</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul>
                <li className="em2">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"
                  />
                </li>
                <li className="TEMP">
                  <span id="max">20°</span>
                  <span id="min">10°</span>
                </li>
                <li className="MON">TUE</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul>
                <li className="em2">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"
                  />
                </li>
                <li className="TEMP">
                  <span id="max">20°</span>
                  <span id="min">10°</span>
                </li>
                <li className="MON">WED</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul>
                <li className="em2">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"
                  />
                </li>
                <li className="TEMP">
                  <span id="max">20°</span>
                  <span id="min">10°</span>
                </li>
                <li className="MON">THU</li>
              </ul>
            </li>
            <li className="list-group-item">
              <ul>
                <li className="em2">
                  <img
                    src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"
                  />
                </li>
                <li className="TEMP">
                  <span id="max">20°</span>
                  <span id="min">10°</span>
                </li>
                <li className="MON">FRI</li>
              </ul>
            </li>
          </ul>
        </div>
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
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${url}`).then(handleResponse);
    return "Loading...";
  }
}
