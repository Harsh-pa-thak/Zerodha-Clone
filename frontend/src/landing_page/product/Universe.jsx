import Uni from "./Uni";
import { Link } from "react-router-dom";
function Universe() {
  let img1 = "zerodhaFundhouse.png";
  let img2 = "sensibullLogo.svg";
  let img3 = "goldenpiLogo.png";
  let img4 = "streakLogo.png";
  let img5 = "smallcaseLogo.png";
  let img6 = "dittoLogo.png";
  return (
    <div className="container">
      <div className="row m-5 p-5 text-center">
        <h4 className=" m-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h4>
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row m-5">
          <div className="col">
            <Uni img={img1}></Uni>
          </div>
          <div className="col">
            <Uni img={img2}></Uni>
          </div>
          <div className="col">
            <Uni img={img3}></Uni>
          </div>
        </div>
        <div className="row m-5">
          <div className="col">
            <Uni img={img4}></Uni>
          </div>
          <div className="col">
            <Uni img={img5}></Uni>
          </div>
          <div className="col">
            <Uni img={img6}></Uni>
          </div>
        </div>
        <div className="mt-4">
          <Link
            to="/signup"
            className="btn btn-primary px-4 py-2"
            style={{ fontSize: "18px" }}
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
