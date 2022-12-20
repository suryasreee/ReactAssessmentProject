import React from "react";
import { Link } from "react-router-dom";

export let UserHome = () => {
  return (
    <div className="Homediv">
      <label className="Hi-label">Hi!!</label>
      <label className="Q-label">
        Would you like to explore more about people..?
      </label>
      <div className="gif-width">
        <img
          src="https://media.giphy.com/media/iRz3SoYLd7PCh3ooXI/giphy.gif"
          alt="gif"
        />
      </div>
      <div>
        <Link to="./UserList">
          <button className="btnExplore">Explore</button>
        </Link>
      </div>
    </div>
  );
};
