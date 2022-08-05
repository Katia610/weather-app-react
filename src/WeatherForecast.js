import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = "8f96c22e12424a3fb4624c20be074503";
  let unit = "metric";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="WeatherForecat">
      <div className="row">
        <div className="forecast-day col">
          <div>Thu</div>
          <div>
            <WeatherIcon code="01d" size={40} />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
