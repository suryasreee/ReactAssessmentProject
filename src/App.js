import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { DisplayWeather } from "./displayWeather";
export default function App() {
  return (
    <div>
      <header className="header-bg">Weather App</header>
      <div>
        <div className="CenterSpacing">
          <h3>Highly accurate weather reports</h3>
        </div>
      </div>
      <footer className="footer-bg"></footer>
      <Routes>
        <Route path="/" element={<SearchBar />}></Route>
        <Route path="/SearchBar" element={<SearchBar />}></Route>
        <Route path="/displayWeather" element={<DisplayWeather />}></Route>
      </Routes>
    </div>
  );
}
