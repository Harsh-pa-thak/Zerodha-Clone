import React from "react";

function People() {
  return (
    <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="row align-items-center justify-content-center">
        
        <div className="col-md-5 text-center">
          <img
            src="nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "50%",
              height: "300px",
              width: "300px",
              objectFit: "cover",
            }}
          />

          <div style={{ marginTop: "25px" }}>
            <h4 style={{ fontWeight: "500", marginBottom: "8px" }}>
              Nithin Kamath
            </h4>

            <h6 style={{ color: "#6c757d", fontWeight: "400" }}>
              Founder, CEO
            </h6>
          </div>
        </div>

        <div className="col-md-6">
          <h1 style={{ fontWeight: "500", marginBottom: "30px" }}>
            People
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            and the Market Data Advisory Committee.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            Playing basketball is his zen.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            Connect on{" "}
            <a
              href="#"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="#"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="#"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;