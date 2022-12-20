import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import "./UserDetails/User.css";
import Creation from "./UserCreation/Creation";
import { DisplayUserInfo } from "./UserCreation/DisplayUserInfo";
import UpdateUser from "./UserCreation/UpdateUser";
export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">User Creation</h1>
        <Routes>
          <Route path="/" element={<Creation />}></Route>
          <Route path="/DisplayUserInfo" element={<DisplayUserInfo />}></Route>
          <Route path="/UpdateUser" element={<UpdateUser />}></Route>
        </Routes>
      </div>
    </div>
  );
}
