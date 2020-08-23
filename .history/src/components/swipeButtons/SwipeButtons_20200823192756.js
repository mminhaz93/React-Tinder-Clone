import React from "react";
import "./SwipeButtons.css";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <Replay fontSize="large" />
      </IconButton>
      <IconButton>
        <Close fontSize="large" />
      </IconButton>
      <IconButton>
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton>
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
