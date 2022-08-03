import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function updateWeatherData(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      realfeel: response.data.main.feels_like,
      mintemp: response.data.main.temp_min,
      maxtemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });

    setReady(true);
  }

  function search() {
    const apiKey = "8f96c22e12424a3fb4624c20be074503";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(updateWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchCity(event) {
    setCity(event.target.value);
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
        <form className="form pt-2 pb-2" onSubmit={handleSubmit}>
          <input
            type="text"
            id="city-search"
            placeholder="Search for a city..."
            autocomplete="off"
            onChange={handleSearchCity}
          />
          <input className="m-1" type="submit" id="input-city" value="Search" />
          <input type="button" id="current-location" value="Current" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
