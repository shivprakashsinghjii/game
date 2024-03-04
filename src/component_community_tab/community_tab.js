import React from "react";
import "./community.css";
import Navbar from "../component/navbar";

const CommunityTab = () => {
  const handlePurchase = () => {
    // Display an alert with some text when the purchase button is clicked
    alert("Thank you for your purchase!");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-container">
          <select id="country">
            <option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
          </select>
          <select id="steam">
            <option value="">Select Steam</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
          <select id="digital-edition">
            <option value="">Select Digital Edition</option>
            <option value="X">X</option>
            <option value="Y">Y</option>
            <option value="Z">Z</option>
          </select>
          <button className="purchase-btn" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
        <div className="right-container">
          <div className="digital-edition">DIGITAL EDITION</div>
          <div className="letters">Abudance of Joy</div>
        </div>
      </div>
    </>
  );
};

export default CommunityTab;
