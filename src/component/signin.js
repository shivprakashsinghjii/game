import React from "react";
import Image from "./download.webp";
import Contact from "./contact";

const Signin = () => {
  return (
    <>
      <Contact />
      <div className="social-icons">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-discord"></i>
      </div>
      <hr />
      <div className="bottom_Image">
        <img
          src={Image}
          className="img-fluid"
          alt="Responsive image"
          style={{ width: "100%", height: "auto", maxHeight: "400px" }} // Set width to 100%, height to auto, and max height to 200px
        />
      </div>
    </>
  );
};

export default Signin;
