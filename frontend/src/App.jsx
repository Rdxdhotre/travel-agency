import React from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
