import React from "react";
import logo from "../src/logo.png";

const Header = () => {
  return (
    <div className="section-title">
      <img src={logo} className="App-logo" alt="logo" />

      <h1>Github Users</h1>
    </div>
  );
};

export default Header;
