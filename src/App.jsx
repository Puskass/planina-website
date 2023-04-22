import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import ToursList from "./pages/ToursList";
import AddTour from "./pages/AddTour";
import Navbar from "./shared/UIElements/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/membership">
          <Membership />
        </Route>
        <Route path="/find-tour">
          <ToursList />
        </Route>
        <Route path="/add-tour">
          <AddTour />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
