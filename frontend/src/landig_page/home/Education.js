import React from "react";

function Education() {
  return (
    <div className="container ps-3 pe-3 pe-md-5 ps-md-5 pb-5">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            style={{ width: "90%", maxWidth: 400 }}
            src="media/images/education.svg"
            alt="Education"
          />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            Versity&rarr;
          </a>
          <p className="mt-3">
            TradingQ$A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            TradingQ&A&rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
