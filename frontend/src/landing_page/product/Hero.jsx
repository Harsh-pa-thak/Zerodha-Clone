import React from 'react';
function Hero() {
    return(
       <div className="container">
            <div className="row" >
                <div className="col m-5 p-5 text-center">
                    <h1>Zerodha Products
                    </h1>
                    <h5>
                        Sleek, modern, and intuitive trading platforms
                    </h5>
                    <p>Check out our <a href="/products" className="text-primary text-decoration-none">
                    investment offerings <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>  
                    </p>
                    
                </div>
            <hr />
            </div>
        </div>

    )
}
export default Hero;