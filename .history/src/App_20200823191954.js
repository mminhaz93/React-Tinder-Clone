import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "../swipeButtons/SwipeButtons"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        <Switch>
          <Route path="/chat">chat</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
