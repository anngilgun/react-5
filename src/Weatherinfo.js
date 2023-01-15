import React from "react";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
              <h1>Temperature:{Math.round(props.data.temperature)}</h1>
              <h2 id="wind">
                <small>WIND: {props.data.wind}km/h</small>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="today">
            <li id="city">{props.data.city}</li>

            <li id="weather-description">{props.data.description}</li>
            <li id="humidity">Humidity:{props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
