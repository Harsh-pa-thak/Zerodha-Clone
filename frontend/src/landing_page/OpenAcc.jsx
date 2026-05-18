import React from "react";
import { Link } from "react-router-dom";

function OpenAcc() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mb-3">Open a Zerodha account</h1>
          <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link
            to="/signup"
            className="btn btn-primary px-4 py-2"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAcc;
