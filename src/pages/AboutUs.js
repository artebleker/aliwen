import React from "react";
import './aboutUs.css'
import { testText } from "../test/test";
const AboutUs = () => {
  const nosotros = testText.find((f) => f.name === "Nosotros");

  return (
    <div className="about-us">
      <h1>Nosotros</h1>
      <div className="about-us-grid">
        <p className="text-aboutus1">{nosotros.text1}</p>
        <img className="product photo-aboutus1" src={nosotros.photo1} alt="nosotros" />
        <img className="product photo-aboutus2" src={nosotros.photo2} alt="nosotros" />
        <p className="text-aboutus2">{nosotros.text2}</p>
      </div>
    </div>
  );
};

export default AboutUs;
