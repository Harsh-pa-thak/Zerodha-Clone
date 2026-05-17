import React from 'react';

function Award() {
    return (
        <div className="container py-5 my-4">
            <div className="row">
                <div className="col-6 text-center">
                    <img src="/largestBroker.svg" alt="awards" className='w-75' />
                </div>
                <div className="col-6">
                    <h1 className="mb-4">India's largest broker</h1>

                    <p className="mb-5">
                        With over 1.6 crore customers and ~ ₹6 lakh crores of equity investments,
                        Zerodha is India's largest broker, contributing to 15% of daily retail
                        exchange volumes in India.
                    </p>

                    <div className="row">
                        <div className="col-6">
                        <ul className="list-unstyled">
                            <li className="mb-4">• Futures and Options</li>
                            <li className="mb-4">• Commodity derivatives</li>
                            <li className="mb-4">• Currency derivatives</li>
                        </ul>
                        </div>

                        <div className="col-6">
                        <ul className="list-unstyled">
                            <li className="mb-4">• Stocks & IPOs</li>
                            <li className="mb-4">• Direct mutual funds</li>
                            <li className="mb-4">• Bonds and Govt. Securities</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Award;