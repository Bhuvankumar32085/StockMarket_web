import React from "react";

function Pricing() {
  return (
    <div className="container p-4 p-md-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing&rarr;
          </a>
        </div>
        <div className="d-none d-md-block col-md-2"></div>
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-12 col-sm-6 border p-3 mb-3 mb-sm-0">
              <h1 className="mb-3">&#8377;0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 border p-3">
              <h1 className="mb-3">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
