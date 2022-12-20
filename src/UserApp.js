import "./styles.css";
import "./UserDetails/User.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHome } from "./UserDetails/UserHome";
import { UserList } from "./UserDetails/UserList";
import { DisplayUserDetail } from "./UserDetails/DisplayUserDetail";
export default function UserApp() {
  return (
    <div className="Container">
      <header className="header-bg">User Details</header>
      <Routes>
        <Route path="/" element={<UserHome />}></Route>
        <Route path="/UserList" element={<UserList />}></Route>
        <Route
          path="/DisplayUserDetail"
          element={<DisplayUserDetail />}
        ></Route>
      </Routes>
      <footer className="footer-bg"></footer>
    </div>
  );
}
