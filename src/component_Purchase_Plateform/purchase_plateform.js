import React from "react";
import Navbar from "../component/navbar";
import imageSrc from "./Abcd.jpg";
import "./purchase.css";
import image2 from "./rating-pending-likely-mature.jpg";

const PurchasePlatform = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="content">
          <h2>Join the Community</h2>
          <p>
            Discover exclusive offers and connect with like-minded individuals.
          </p>
          <button className="join-button">Join</button>
        </div>
        <div className="image-container">
          <img src={imageSrc} alt="Backdrop" className="responsive-image" />
        </div>
      </div>
      <div className="content-container class2">
        <div className="left-container">
          <h5>skate</h5>
          <nav>
            <div className="icons">
              <div className="icon">Home</div>
              <div className="icon">FAQ</div>
              <div className="icon">Section</div>
            </div>
          </nav>
        </div>
        <div className="right-container">
          <div className="icons ">
            <div className="icon mx-1">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="icon mx-1">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon mx-1">
              <i class="fa-brands fa-discord"></i>
            </div>
            <div className="icon mx-1">
              <i class="fa-brands fa-tiktok"></i>
            </div>
            <div className="icon mx-1">
              <i class="fa-brands fa-github"></i>
            </div>
            <div className="icon mx-1">
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container class2">
        <div className="left-container2">
          <nav>
            <div className="icons">
              <div className="icon">
                <i class="fa-solid fa-hippo"></i>
              </div>
              <div className="icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <div className="icon">
                <i class="fa-solid fa-car"></i>
              </div>
            </div>
          </nav>
        </div>
        <div className="right-container">
          <img src={image2} class="Image5"></img>;
        </div>
      </div>
    </>
  );
};

export default PurchasePlatform;
