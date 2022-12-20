import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export function DisplayWeather(props) {
  let location = useLocation();
  const navigate = useNavigate();
  let goBack = () => {
    navigate("/SearchBar");
  };
  return (
    <div>
      <div>
        <button className="btnback" onClick={() => goBack()}>
          Back
        </button>
      </div>
      <div className="Result-bg">
        <label className="Top-lbl">
          {location.state.Degree}
          <sup>&deg;</sup>
          <span> {location.state.city} </span>
        </label>
        <div className="par-div">
          <div className="Humi-div">
            <label className="inner-lbl">Humidity</label>
            <label className="data-label">{location.state.humidity}</label>
          </div>
          <div className="Wind-div">
            <label className="inner-lbl">Wind Speed</label>
            <label className="data-label">{location.state.windspeed}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
