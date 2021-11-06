import React from "react";
import ListadoPeliculas from "./components/ListadoPeliculas";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route path="/" component={ListadoPeliculas} />
        </Switch>
      </Router>

      {/* <ListadoPeliculas /> */}
    </>
  );
};

export default App;
