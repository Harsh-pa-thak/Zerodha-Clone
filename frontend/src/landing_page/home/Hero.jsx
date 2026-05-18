import { Link } from "react-router-dom";
function Hero() {
    return (
    <div>
        <div className="container p-5 m-3">
            <div className="row text-center">
                <div className="col">
                    <img src="/homeHero.png" alt="Hero" className="mb-3 w-100" />
                </div>
            </div>
            <div className="row text-center">
                <h1 className='mt-3'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div>
                  <Link to="/signup" className="btn btn-primary px-4 py-2 mt-2">
                    Sign up for free
                  </Link>
                </div>
            </div>
        </div>
    </div>);
}

export default Hero;