import React from "react";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import "./SwipeButtons.css"

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <Replay fontSize="large"/>
      <Close fontSize="large"/>
      <StarRate fontSize="large"/>
      <Favorite fontSize="large"/>
      <FlashOn fontSize="large"/>
    </div>
  );
};

export default SwipeButtons;
