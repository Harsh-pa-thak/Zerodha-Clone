import React from 'react';
function Hero() {
    return (
    <div>
        <div className="container p-5 m-3">
            <div className="row text-center">
                <div className="col">
                    <img src= "homeHero.png" alt="Hero Image" className="hero-image" className='mb-3 w-100'/>
                </div>
            </div>
            <div className="row text-center">
                <h1 className='mt-3'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-3' style={{width:"15%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    </div>);
}

export default Hero;