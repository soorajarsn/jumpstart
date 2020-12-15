import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./theme.css";
import Home from "./Home";
import Comment from "./Comment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/comment/:postId?" render={props => <Comment {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
