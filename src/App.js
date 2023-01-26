import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="link">
          <a href="https://github.com/anngilgun/weather">Open-source code</a> by
          Anna Pliuiko
        </div>
        <a
          href="https://incandescent-stroopwafel-00eef4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </div>
    </div>
  );
}
