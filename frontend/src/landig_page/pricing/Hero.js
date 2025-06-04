import React from "react";

function Hero() {
  return (
    <div className="container border-bottom p-5 mt-5 text-center">
      <h1>Pricing</h1>
      <p className="text-muted mt-4">
        Free equity investments and flat &#8377;20 traday and F&O trads
      </p>

      <div className="row p-3 mt-5">
        <div className="col-12 col-md-4 mb-5">
          <img
            className="img-fluid"
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
          />
          <h1 className="fs-4 mt-3">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <img
            className="img-fluid"
            src="media/images/other-trades (1).svg"
            alt="Intraday and F&O trades"
          />
          <h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <img
            className="img-fluid"
            src="media/images/pricing0.svg"
            alt="Free direct MF"
          />
          <h1 className="fs-4 mt-3">Free direct MF</h1>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
