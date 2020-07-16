import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import wrap from "./container/Wrap";



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={wrap} />
        </Switch>
      </Router>
    );
  }
}

export default App;
