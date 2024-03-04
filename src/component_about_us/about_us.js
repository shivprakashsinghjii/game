import React from "react";
import "./about_us.css";
import Navbar from "../component/navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="container">
        <div className="leftContainer">
          <h1 className="aboutStake">About Skate</h1>
        </div>
        <div className="rightContainer">
          <p>
            Introducing Skater Republic, the thrilling upcoming arcade game that
            puts you right in the heart of a dynamic skateboarding adventure!
            Explore expansive skateparks, bustling cityscapes, and renowned
            real-life locations for an immersive experience like no other.
            Featuring intuitive controls, a sophisticated trick system, and a
            compelling progression framework, players will find themselves
            immersed in a world where every achievement feels truly gratifying.
            Keep an eye out as we work diligently to bring this extraordinary
            gaming experience to life.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
