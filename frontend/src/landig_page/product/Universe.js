import React from "react";

function Universe({}) {
  return (
    <div className="container p-4 text-center">
      <h1>The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <img
            style={{ width: "50%" }}
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
          />
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            className="mt-4"
            style={{ width: "50%" }}
            src="media/images/streakLogo.png"
            alt="Streak"
          />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col">
          <img
            style={{ width: "65%" }}
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
          />
          <p className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            className="mt-4"
            style={{ width: "60%" }}
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
          />
          <p className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col">
          <img
            style={{ width: "45%" }}
            src="media/images/tijori.svg"
            alt="Tijori"
          />
          <p className="mt-2">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            className="mt-4"
            style={{ width: "40%" }}
            src="media/images/dittoLogo.png"
            alt="Ditto"
          />
          <p className="mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className="btn btn-primary mt-4">Sign up for free</button>
    </div>
  );
}

export default Universe;
