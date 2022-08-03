import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-Weather row">
        <div className="col">
          <p>
            <div className="city" id="display-city">
              {props.defaultCity}
            </div>
            <div className="weather-comment" id="display-comment">
              {props.data.description}
            </div>
            <div className="temperature">
              <span id="current-temperature" />
              <span className="unit">
                {" "}
                {Math.round(props.data.temperature)}°C{" "}
              </span>
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
          </p>
        </div>
      </div>
      <div className="weather-details col">
        <p>
          <div className="high-low" id="high-low">
            High / low: {Math.round(props.data.maxtemp)}°C /{" "}
            {Math.round(props.data.mintemp)}°C
          </div>
          <div className="real-feel" id="real-feel">
            Real Feel: {Math.round(props.data.realfeel)}°C
          </div>
          <div className="humidity" id="humidity">
            Humidity: {props.data.humidity}%
          </div>
        </p>
      </div>
    </div>
  );
}
