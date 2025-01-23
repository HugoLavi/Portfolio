import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Slider from "./components/Slider/Slider";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Slider />
      <ProjectsSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
