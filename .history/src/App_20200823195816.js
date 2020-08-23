import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";
import Chats from "./components/chats/Chats";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
