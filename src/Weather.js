import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function updateWeatherData(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      realfeel: response.data.main.feels_like,
      mintemp: response.data.main.temp_min,
      maxtemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="Date row" id="date-greeting">
          <h1 className="card-title date col-6 text-start" id="current-date">
            <FormattedDate date={weatherData.date} />
          </h1>
          <h2
            className="card-text greeting col-6 text-end"
            id="greeting-message"
          >
            [Good morning! ☕]
          </h2>
        </div>
        <div className="time">
          <p className="card-text current-time text-start" id="current-time">
            <FormattedTime date={weatherData.date} />
          </p>
        </div>
        <form className="form pt-2 pb-2">
          <input
            type="text"
            id="city-search"
            placeholder="Search for a city..."
            autocomplete="off"
          />
          <input className="m-1" type="submit" id="input-city" value="Search" />
          <input type="button" id="current-location" value="Current" />
        </form>
        <div className="current-Weather row">
          <div className="col">
            <p>
              <div className="city" id="display-city">
                {props.defaultCity}
              </div>
              <div className="weather-comment" id="display-comment">
                {weatherData.description}
              </div>
              <div className="temperature">
                <span id="current-temperature" />
                <span className="unit">
                  {" "}
                  {Math.round(weatherData.temperature)}°C{" "}
                </span>
                <img
                  id="icon"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="weather-icon"
                />
              </div>
            </p>
          </div>
        </div>
        <div className="weather-details col">
          <p>
            <div className="high-low" id="high-low">
              High / low: {Math.round(weatherData.maxtemp)}°C /{" "}
              {Math.round(weatherData.mintemp)}°C
            </div>
            <div className="real-feel" id="real-feel">
              Real Feel: {Math.round(weatherData.realfeel)}°C
            </div>
            <div className="humidity" id="humidity">
              Humidity: {weatherData.humidity}%
            </div>
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "8f96c22e12424a3fb4624c20be074503";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(updateWeatherData);

    return "Loading...";
  }
}
