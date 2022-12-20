import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherData } from "./data";
import { List } from "./List";
export let SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  let [newdata, setdata] = useState(WeatherData);
  let handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      let newdataarray = WeatherData.filter((City) => {
        return City.City.toLowerCase().match(searchInput.toLowerCase());
      });
      setdata(newdataarray);
    }
  };
  const navigate = useNavigate();
  let showTemp = (searchInput) => {
    WeatherData.map((data, key) => {
      if (data.City.toLowerCase() === searchInput.toLowerCase()) {
        navigate("/displayWeather", {
          state: {
            city: newdata[0].City,
            degree: newdata[0].Degree,
            humidity: newdata[0].Humidity,
            windspeed: newdata[0].WindSpeed
          }
        });
      }
    });
  };

  return (
    <div>
      <p>Please select the city</p>
      <input
        className="searchbar"
        type="text"
        onChange={handleChange}
        value={searchInput}
        placeholder="Type here"
      />
      <button className="searchbtn" onClick={() => showTemp(searchInput)}>
        Search
      </button>
      <List list={newdata} />
    </div>
  );
};
