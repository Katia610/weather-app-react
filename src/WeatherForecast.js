import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecat">
      <div className="row">
        <div className="forecast-day col">
          <div>Thu</div>
          <div>
            <WeatherIcon code="01d" size={40} />
          </div>
          <div>
            <span>19°</span>
            <span>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
