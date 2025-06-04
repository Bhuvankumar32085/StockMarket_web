import React from "react";

function Awards() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
          <img
            style={{ width: "100%", maxWidth: "450px", height: "auto" }}
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
          />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-5">
          <h2>Largest stock broker in India</h2>
          <p className="mb-4 mb-md-5">
            2+ million zerodha clients contribute to over 16% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="ps-3">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="ps-3">
                <li>
                  <p>Stock & IPOs </p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <img
              style={{ width: "100%", maxWidth: "350px", height: "auto" }}
              src="media/images/pressLogos.png"
              alt="Press Logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
