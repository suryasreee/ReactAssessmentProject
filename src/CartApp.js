import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cartCommonStyle.css";
import "./Cart/cartStyle.css";
import { Products } from "./Cart/ProductData";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { CartHome } from "./Cart/CartHome";
import { ProductList } from "./Cart/ProductList";
import { DisplayProductInfo } from "./Cart/DisplayProductInfo";
export default function UserApp() {
  return (
    <div className="Container">
      <header className="header-bg">
        <div>
          <label>Big Shoping Zone</label>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<CartHome />}></Route>
          <Route path="/ProductList" element={<ProductList />}></Route>
          <Route
            path="/DisplayProductInfo"
            element={<DisplayProductInfo />}
          ></Route>
        </Routes>
      </Router>
      <footer className="footer-bg"></footer>
    </div>
  );
}
