import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Date row" id="date-greeting">
        <h5 className="card-title date col-6 text-start" id="current-date">
          [21 July 22]
        </h5>
        <h5 className="card-text greeting col-6 text-end" id="greeting-message">
          [Good morning!]
        </h5>
      </div>
      <div className="time">
        <p className="card-text current-time text-start" id="current-time">
          [11:13]
        </p>
      </div>
      <form className="form pt-3 pb-3">
        <input
          type="text"
          id="city-search"
          placeholder="Search for a city..."
          autocomplete="off"
        />
        <input className="m-1" type="submit" id="input-city" value="Search" />
        <input type="button" id="current-location" value="Current" />
      </form>
      <div className="current-Weather">
        <div className="row">
          <div className="col">
            <p>
              <div className="city" id="display-city">
                [London]
              </div>
              <div className="weather-comment" id="display-comment">
                [Clouds]
              </div>
              <div className="temperature">
                <span id="current-temperature" />
                <span className="unit"> [19]°C </span>
                <img
                  id="icon"
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="weather-icon"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="weather-details">
        <div className="col">
          <p>
            <div className="high-low" id="high-low">
              High / low:{" "}
            </div>
            <div className="real-feel" id="real-feel">
              Real Feel:{" "}
            </div>
            <div className="humidity" id="humidity">
              Humidity:{" "}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
