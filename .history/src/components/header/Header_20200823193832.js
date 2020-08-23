import React from "react";
import "./Header.css";
import { Person, Forum } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person className="headerIcon" fontSize="large" />
      </IconButton>
      <Link to="/">
        <img
          className="headerLogo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum className="headerIcon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
