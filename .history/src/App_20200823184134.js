import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <TinderCards/>
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
