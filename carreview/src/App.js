
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;