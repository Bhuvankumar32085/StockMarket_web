import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h2 className="fs-4 mt-3 text-center">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row p-5 border-top hero-content">
        <div className="col p-5">
          <p className="text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="text-muted mt-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="text-muted mt-4">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col p-5">
          <p className="text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="text-muted mt-4">
            <a
              href="https://rainmatter.com/"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="text-muted mt-4">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <div className="row p-5">
        <div className="row">
          <h2 className="text-center">People</h2>
        </div>
        <div className="row mt-5 people-section">
          <div className="col text-center">
            <img
              src="media/images/nithinKamath.jpg"
              style={{ width: "50%", borderRadius: "50%" }}
              alt="Nithin Kamath"
            />
            <h3 className="mt-2 fs-4">Nithin Kamath</h3>
            <p>Founder, CEO</p>
          </div>
          <div className="col mt-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="https://nithinkamath.me/">Homepage</a>/
              <a href="https://x.com/Nithin0dha">Twitter</a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
          }
          .hero-content > div {
            padding: 1rem !important;
            text-align: center;
          }
          .people-section {
            flex-direction: column !important;
          }
          .people-section > .col {
            margin-bottom: 2rem;
          }
          img {
            width: 70% !important;
            margin: 0 auto;
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
