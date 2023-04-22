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
        <Route path="/O-Nama">
          <AboutUs />
        </Route>
        <Route path="/Kontakt">
          <Contact />
        </Route>
        <Route path="/Clanstvo">
          <Membership />
        </Route>
        <Route path="/Pronađi-turu">
          <ToursList />
        </Route>
        <Route path="/Dodaj-turu">
          <AddTour />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
