import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center py-5">
        <div className="col-12">
          <img
            src="/homeHero.png"
            alt="Hero"
            className="mb-4 img-fluid"
            style={{ maxWidth: "750px" }}
          />
        </div>
        <div className="col-12">
          <h1 className="mt-3 mb-3">Invest in Everything</h1>
          <p className="text-muted mb-4" style={{ fontSize: "18px" }}>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <div>
            <Link to="/signup" className="btn btn-primary px-4 py-2">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;