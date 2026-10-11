import React from "react";
import Navbar from "../Components/Landing/Navbar";
import Hero from "../Components/Landing/Hero";
import SpecialMeals from "../Components/Landing/SpecialMeals";
import GetNotified from "../Components/Landing/GetNotified";
import Footer from "../Components/Landing/Footer";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <Navbar />
        <Hero />
        <SpecialMeals />
        <GetNotified />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
