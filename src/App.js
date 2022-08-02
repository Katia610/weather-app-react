import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card bg-dark text-white">
          <img
            src="/levitan-nad-vechnym-pokoem.jpg"
            className="card-img"
            alt="background"
          />
          <div className="card-img-overlay">
            <Weather defaultCity="London" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
