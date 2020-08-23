import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards />
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
