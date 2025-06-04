import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-4 p-md-5">
          <h1 className="fs-2">Trust with confidence</h1>
          <h2 className="fs-5 mt-3">Customer-first always</h2>
          <p className="text-muted">
            Thet's way 1.3+ core customers trust Zerodha with &#8377;3.5+ lakh
            crores worth of equity investments.
          </p>
          <h2 className="fs-5 mt-4">No spam oro gimmicks</h2>
          <p className="text-muted">
            No gimmick, spam,"gamification", or annoying push notification, High
            quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored specific to your needs.
          </p>
          <h2 className="fs-5 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Swich, we don't just facilitate
            transaction, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-12 col-md-6 text-center p-4 p-md-5">
          <img
            className="mb-4 mb-md-5"
            src="media/images/ecosystem.png"
            style={{ width: "80%", maxWidth: 400 }}
            alt="Ecosystem"
          />
          <div className="mt-3 mt-md-5">
            <a className="me-4 me-md-5" style={{ textDecoration: "none" }} href="#">
              Explore our product&rarr;
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
