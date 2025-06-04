import React from "react";

function RightSection({
  src,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5">
      <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
        <div className="col-md-6 mt-5 p-md-5 text-center text-md-start">
          <div className="row">
            <h1>{productName}</h1>
          </div>
          <div className="row mt-4">
            <p>{productDescription}</p>
          </div>
          <a
            style={{ textDecoration: "none" }}
            className=""
            href={learnMore}
          >
            Learn more →
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img style={{ width: "80%", maxWidth: "100%" }} src={src} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
