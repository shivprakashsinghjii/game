import React from "react";

const Card = () => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="carrd">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-diamond"></i>
            </h5>
            <p className="card-text">
              With supporting text below as the natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="carrd">
          <div className="card-body">
            <h5 className="card-title">
              <i class="fa-solid fa-gamepad"></i>
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
