function Pricing() {
  return (
    <div className="container py-5 mb-5">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="text-primary text-decoration-none">
            See pricing{" "}
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="/pricing0.svg"
                  alt="Free account opening"
                  style={{ width: "120px", marginBottom: "16px" }}
                />
                <p className="mb-0 text-muted">
                  Free account
                  <br />
                  opening
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="/pricingEquity.svg"
                  alt="Free equity delivery"
                  style={{ width: "120px", marginBottom: "16px" }}
                />
                <p className="mb-0 text-muted">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="/intradayTrades.svg"
                  alt="Intraday and F&O"
                  style={{ width: "120px", marginBottom: "16px" }}
                />
                <p className="mb-0 text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;