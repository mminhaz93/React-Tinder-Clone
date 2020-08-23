import React from "react";
import "./Header.css";
import { Person, Forum } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <Person />
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="logo"
      />
      <Forum />
    </div>
  );
};

export default Header;
