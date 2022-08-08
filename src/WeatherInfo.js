import React from "react";
import "./styles.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-weather row">
        <div className="col-7">
          <ul>
            <li className="city" id="display-city">
              {props.data.city} <span className="hyphen">-</span>{" "}
              <span className="weather-comment" id="display-comment">
                {props.data.description}{" "}
              </span>
            </li>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />{" "}
              <span>
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                  size={60}
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="weather-details col-5">
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
