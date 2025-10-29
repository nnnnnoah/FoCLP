import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Contributions from "./pages/Contributions";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Maps from "./pages/Maps";
import Membership from "./pages/Membership";
import Pavilion from "./pages/Pavilion";
import Raffle from "./pages/Raffle";
import Reports from "./pages/Reports";
import Resources from "./pages/Resources";
import Trails from "./pages/Trails";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/join" element={<Join />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/pavilion" element={<Pavilion />} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/trails" element={<Trails />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
