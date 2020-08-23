import React from "react";
import "./SwipeButtons.css";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtonsRepeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtonsLeft">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtonsStar">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtonsRight">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtonsLightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
