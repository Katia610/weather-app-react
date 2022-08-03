import React from "react";
import "./styles.css";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let currentDate = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div>
      {day} {currentDate} {month} {year}
    </div>
  );
}
