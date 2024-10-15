// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/global.css"

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
