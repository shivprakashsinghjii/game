import React from "react";
import Navbar from "./navbar";
import video from "./video/video.mp4";
import "./video/front_view.css"; // Assuming you have a CSS file for styling
import Create from "./create";

const FrontView = () => {
  return (
    <div>
      <Navbar />
      <div className="text-overlay">
        <h1>Built by developers. For developers.</h1>
        <p>With fair terms for all. Let's build incredible things together.</p>
      </div>
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Create />
    </div>
  );
};

export default FrontView;
