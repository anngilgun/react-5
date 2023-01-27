import React, { useState, useEffect, useCallback } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastday from "./WeatherForecastday";

export default function WeatherForecast({coordinates}) {
    let [forecast, setForecast] = useState([]);

    const handleResponse = (response) => {
        if (response) {
            setForecast(response.data.daily);
        }
    }

    const load = useCallback( () => {
        let apiKey = "f5029b784306910c19746e40c14d6cd3";
        let longitude = coordinates.lon;
        let latitude = coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse).catch(() => {
            alert("Something went wrong with fetching weather. Please try again later")
        });
    }, [coordinates.lon, coordinates.lat])

    useEffect(() => {
        load()
    }, [load]);

    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastday data={dailyForecast}/>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}
