import React from "react";
import "./landingpage.css";
import heroImg from "../../assets/stir-fry-pasta.png";
import googlePlayImg from "../../assets/google-play-icon.svg";
import appStoreImg from "../../assets/apple-app-store.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Order <span className="highlight">Food</span> anytime, anywhere
        </h1>
        <p>
          Browse from our list of delicious meals and get them delivered to your
          doorstep in no time. Affordable,tasty and fast!
        </p>

        <div className="download-btns">
          <button className="store-btn">
            <img src={appStoreImg} alt="App Store" className="store-icon" />
            <span className="store-text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </button>
          <button className="store-btn">
            <img src={googlePlayImg} alt="Google Play" className="store-icon" />
            <span className="store-text">
              <small>Get it on</small>
              <strong>Google Play</strong>
            </span>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="hero" className="hero-img" />
      </div>
    </div>
  );
}
export default Hero;
