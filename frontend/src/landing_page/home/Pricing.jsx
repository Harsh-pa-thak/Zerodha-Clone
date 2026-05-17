import React from 'react';
function Pricing() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row align-items-center">
                <div className="col-4">
                    <h1 className='mb-4'>Unbeatble Pricing</h1>
                    <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/price" className="text-primary text-decoration-none " >See Pricing<i className ="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-8">
                    <div className="row">
                    <div className='col'>
                        <div className="d-flex align-items-center">
                            <img
                            src="pricing0.svg"
                            alt="p0"
                            style={{ width: "150px" }}
                            />
                            <p className="mb-0 ms-0 text-muted ">
                            Free account <br /> opening
                            </p>
                        </div>
                    </div>
                   <div className='col'>
                        <div className="d-flex align-items-center">
                            <img
                            src="pricingEquity.svg"
                            alt="p0"
                            style={{ width: "150px" }}
                            />
                            <p className="mb-0 ms-0 text-muted ">
                            Free equity delivery
and   <br /> direct mutual funds
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="d-flex align-items-center">
                            <img
                            src="intradayTrades.svg"
                            alt="p0"
                            style={{ width: "150px" }}
                            />
                            <p className="mb-0 ms-0 text-muted ">
                            Intraday and F&O</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;