import React from "react";
import "./styles.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import AdditionalTemperature from "./AdditionalTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-Weather row">
        <div className="col-6">
          <p>
            <div className="city" id="display-city">
              {props.defaultCity}
            </div>
            <div className="weather-comment" id="display-comment">
              {props.data.description}
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </p>
        </div>
        <div className="weather-details col">
          <p>
            <AdditionalTemperature
              max={props.data.maxtemp}
              min={props.data.mintemp}
              realfeel={props.data.realfeel}
            />
            <div className="humidity" id="humidity">
              Humidity: {props.data.humidity}%
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
