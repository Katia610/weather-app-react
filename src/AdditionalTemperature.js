import React, { useState } from "react";
import "./styles.css";

export default function AdditionalTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="AdditionalTemperature">
        <div className="high-low" id="high-low">
          <span>
            {" "}
            High / low: {Math.round(props.max)}° / {Math.round(props.min)}
          </span>{" "}
          <span className="unit">
            {" "}
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <div className="real-feel" id="real-feel">
          <span>Real Feel: {Math.round(props.realfeel)}</span>{" "}
          <span className="unit">
            {" "}
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let maxFahrenheit = props.max * (9 / 5) + 32;
    let minFahrenheit = props.min * (9 / 5) + 32;
    let realfeelFahrenheit = props.realfeel * (9 / 5) + 32;
    return (
      <div className="AdditionalTemperature">
        <div className="high-low" id="high-low">
          <span>
            {" "}
            High / low: {Math.round(maxFahrenheit)}° /{" "}
            {Math.round(minFahrenheit)}
          </span>{" "}
          <span className="unit">
            {" "}
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>{" "}
            | °F
          </span>
        </div>
        <div className="real-feel" id="real-feel">
          <span>Real Feel: {Math.round(realfeelFahrenheit)}</span>{" "}
          <span className="unit">
            {" "}
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
