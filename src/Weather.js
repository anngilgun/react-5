import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
  const[ready, setReady]=useState(false);
  const [weatherData, setWeatherData]=useState({});
  function handleResponse(response) {
     setWeatherData({temperature:response.data.main.temp,humidity: response.data.main.humidity,
    });
    setTemperature(response.data.main.temp);
    setReady(true);
  }
   let apiKey = "f5029b784306910c19746e40c14d6cd3";
   let city="New York"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${url}`).then(handleResponse);
   if (ready) {
return (<div className="Weather">
      <div className="row">
        <div className="col-3">
          <img src="" alt="Clear" id="em1" />
          <h1>{Math.round(temperature)}</h1>

          <br />
          <h2 id="wind"><small>WIND: 2KM</small></h2>
        </div>
        <div className="col-2">
          <ul className="today">
            <li id="city">LVIV,UKRAINE</li>
            <li className="dayhour"></li>
            <li id="weather-description"></li>
            <li id="humidity">Humidity:</li>
          </ul>
        </div>
      </div>
      <div id="forecast">
        <ul className="list-group list-group-horizontal horiz" id="forecast">
          <li className="list-group-item">
            <ul>
              <li className="em2">
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  altclassName
                  width="42"
                />
              </li>
              <li className="TEMP">
                <span id="max">20°</span><span id="min">10°</span>
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
                <span id="max">20°</span><span id="min">10°</span>
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
                <span id="max">20°</span><span id="min">10°</span>
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
                <span id="max">20°</span><span id="min">10°</span>
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
                <span id="max">20°</span><span id="min">10°</span>
              </li>
              <li className="MON">FRI</li>
            </ul>
          </li>
        </ul>
      </div>
      <form id="form">
        <input
          type="text"
          placeholder="Enter the city"
          autocomplete="off"
          autofocus="on"
          id="search-input"
        />
        <input type="Submit" value="Search" />
      </form>
    </div>
    <div className="link">
      <a href="https://github.com/anngilgun/weather">Open-source code</a> by
      Anna Pliuiko
    </div>);}
    else { let apiKey = "f5029b784306910c19746e40c14d6cd3";
   let city="New York"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${url}`).then(handleResponse);
return "Loading...";}}