import React from "react";
import Image from "./pexels-photo-275033.jpeg";
import Image2 from "./maxresdefault.jpg";
import Image3 from "./photo-1493711662062-fa541adb3fc8.avif";

const footer = () => {
  return (
    <div>
      <div className="card-deck">
        <div className="carrd">
          <img
            className="card-img-top img-fluid"
            src={Image}
            alt="Card image cap"
            style={{
              maxWidth: "245px",
              maxHeight: "245px",
              width: "auto",
              height: "auto",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">GET UNREAL ENGINE</h5>
            <p className="card-text">
              Get started for free! Unreal Engine is free to use for creating
              linear content, custom projects, and internal projects.
            </p>
            <p className="card-text">
              <small className="text-muted">
                It's also free to get started for game development—a 5% royalty
                only kicks in when your title earns over $1 million USD.
              </small>
            </p>
          </div>
        </div>
        <div className="carrd">
          <img
            className="card-img-top img-fluid"
            src={Image2}
            alt="Card image cap"
            style={{
              maxWidth: "245px",
              maxHeight: "245px",
              width: "auto",
              height: "auto",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">NEWS</h5>
            <p className="card-text">
              Unreal Editor for Fortnite is now available in Public Beta! Unreal
              Editor for Fortnite (UEFN) combines the power of Unreal Engine
              with the scale of Fortnite..
            </p>
            <p className="card-text">
              <small className="text-muted">
                Use development tools to build games and experiences that can be
                unlike anything seen in Fortnite so far and publish for millions
                of players to enjoy.
              </small>
            </p>
          </div>
        </div>
        <div className="carrd">
          <img
            className="card-img-top img-fluid"
            src={Image3}
            alt="Card image cap"
            style={{
              maxWidth: "245px",
              maxHeight: "245px",
              width: "auto",
              height: "auto",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">EVENT</h5>
            <p className="card-text">
              GDC 2023 Join Epic Games at GDC 2023 for the State of Unreal,
              insightful tech talks, and the chance to play the latest Unreal
              Engine games at our booths on the show floor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
