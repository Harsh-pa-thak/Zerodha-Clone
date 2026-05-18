import React from "react";
import ImgText from "./ImgText";

function Hero() {
  let p0 = "pricing0.svg";
  const text0 = (
    <div className="text-center">
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "500",
          color: "#424242",
          marginBottom: "18px",
        }}
      >
        Free equity delivery
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "#666",
          lineHeight: "1.7",
          maxWidth: "360px",
          margin: "0 auto",
        }}
      >
        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
        brokerage.
      </p>
    </div>
  );

  let p1 = "intradayTrades.svg";
  const text1 = (
    <div className="text-center">
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "500",
          color: "#424242",
          marginBottom: "18px",
        }}
      >
        Intraday and F&O trades
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "#666",
          lineHeight: "1.7",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday
        trades across equity, currency, and commodity trades. Flat ₹20 on all
        option trades.
      </p>
    </div>
  );

  let p2 = "pricingMF.svg";
  const text2 = (
    <div className="text-center">
      <h3
        style={{
          fontSize: "28px",
          fontWeight: "500",
          color: "#424242",
          marginBottom: "18px",
        }}
      >
        Free direct MF
      </h3>

      <p
        style={{
          fontSize: "16px",
          color: "#666",
          lineHeight: "1.7",
          maxWidth: "360px",
          margin: "0 auto",
        }}
      >
        All direct mutual fund investments are absolutely free — ₹ 0 commissions
        & DP charges.
      </p>
    </div>
  );

  return (
    <div
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "80px",
      }}
    >
      <div className="row">
        <div className="col text-center">
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "15px",
            }}
          >
            Charges
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#9b9b9b",
              marginBottom: "100px",
            }}
          >
            List of all charges and taxes
          </p>
        </div>
      </div>

      <div className="row align-items-start justify-content-center">
        <div className="col-md-4 text-center">
          <ImgText img={p0} text={text0} />
        </div>

        <div className="col-md-4 text-center">
          <ImgText img={p1} text={text1} />
        </div>

        <div className="col-md-4 text-center">
          <ImgText img={p2} text={text2} />
        </div>
      </div>
    </div>
  );
}

export default Hero;