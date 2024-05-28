import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subtitle="Our Program" title="What We Offer"></Title>
      <Program />
      <About />
      <Title subtitle="Gallery" title="Team Photo"></Title>
      <Team />
      <Title subtitle="" title="Contact Us"></Title>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
