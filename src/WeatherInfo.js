import React from "react";
import "./styles.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-weather row">
        <div className="col-6">
          <ul>
            <li className="city" id="display-city">
              {props.data.city}
            </li>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li className="weather-comment" id="display-comment">
              {props.data.description}{" "}
            </li>
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={60}
            />
          </ul>
        </div>
        <div className="weather-details col">
          <ul>
            <li className="humidity" id="humidity">
              Humidity: {props.data.humidity}%
            </li>
            <li className="wind" id="wind">
              Wind: {props.data.wind} m/h
            </li>
            <li className="pressure" id="pressure">
              Pressure: {props.data.pressure} hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
