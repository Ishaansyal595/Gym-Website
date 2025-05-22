import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkoutSessions from "./components/WorkoutSessions/WorkoutSessions";
import Gallery from "./components/Gallery/Gallery";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import BMICaluculator from "./components/BMICaluculator/BMICaluculator";
import Footer from "./components/Foooter/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICaluculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
