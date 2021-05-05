import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
      </Switch>
    </Router>
  );
}

export default App;
