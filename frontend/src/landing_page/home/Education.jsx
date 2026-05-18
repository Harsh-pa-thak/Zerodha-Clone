function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-6 col-md-12">
          <img src="/education.svg" alt="Education" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2 className="mb-4">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-primary text-decoration-none d-inline-block mb-4"
            style={{ fontSize: "18px" }}
          >
            Varsity
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-primary text-decoration-none d-inline-block"
            style={{ fontSize: "18px" }}
          >
            TradingQ&A
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;