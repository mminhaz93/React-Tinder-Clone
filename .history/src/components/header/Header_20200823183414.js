import React from "react";
import "./Header.css";
import { Person, Forum } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <Person className="headerIcon" fontSize="large"/>
      <img
        className="headerLogo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="logo"
      />
      <Forum className="headerIcon" fontSize="large"/>
    </div>
  );
};

export default Header;
