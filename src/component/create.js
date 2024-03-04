import React from "react";
import Card from "./card";
import Footer from "./footer";
import Signin from "./signin";
import Purchaser from "./purchaser";

const Create = () => {
  return (
    <div>
      <div className="card carrrd text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Create without limits</h5>
          <p className="card-text">
            With Unreal Engine, you can bring amazing real-time experiences to
            life using the world’s most advanced real-time 3D creation tool.
            From first projects to the most demanding challenges, our free and
            accessible resources and inspirational community empower everyone to
            realize their ambitions.
          </p>
          <a href="#" className="btn btn-primary">
            PLAY GAMES
          </a>
          <hr />
          <div className="d-flex justify-content-around">
            {/* Wrap cards in a flex container */}
            <Card />
          </div>
          <hr />
          <Footer />
          <Purchaser />
          <Signin />
        </div>
      </div>
    </div>
  );
};

export default Create;
