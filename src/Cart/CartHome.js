import React from "react";
import { Link } from "react-router-dom";

export let CartHome = () => {
  return (
    <div className="Homediv">
      <label className="Hi-label">Welcome to Shopping zone</label>
      <label className="Q-label">Style your life with Big Shopping Zone</label>
      <div className="gif-width">
        <img
          src="https://img.pikbest.com/png-images/20191028/e-commerce-shopping-festival-shopping-gif_2515306.png!bw700"
          alt="gif"
        />
      </div>
      <div>
        <Link to="./ProductList">
          <button className="btnExplore">Explore</button>
        </Link>
      </div>
    </div>
  );
};
