import React from "react";

function LeftSection({
  src,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={src}
            alt={productName}
            style={{ width: "80%", maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text and Links Column */}
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <h1>{productName}</h1>
          <p className="mt-4">{productDescription}</p>

          <div>
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              className="me-4"
            >
              Try demo →
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>

          <div className="mt-4">
            <a href={googleplay} className="me-3">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Store"
                style={{ maxWidth: "140px", height: "auto" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="Apple App Store"
                style={{ maxWidth: "140px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
