import React from "react";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
              <WeatherTemperature celsius={props.data.temperature} />
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
