import React from 'react';
function Stats() {
    return (  
    <div className="container p-5 m-7">
            <div className="row">
                <div className="col-6">
                    <h1 className='mb-5'>Trust with confidence</h1>

                    <div className='mb-5'>
                        <h3>Customer-first always</h3>
                        <p>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
                            investments, making us India’s largest broker; contributing to 15% of daily retail
                            exchange volumes in India.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h3>No spam or gimmicks</h3>
                        <p>
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
                            that you use at your pace, the way you like. Our philosophies.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h3>The Zerodha universe</h3>
                        <p>
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
                            you tailored services specific to your needs.
                        </p>
                    </div>

                    <div className='mb-5'>
                        <h3>Do better with money</h3>
                        <p>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                            but actively help you do better with your money.
                        </p>
                    </div>
                </div>

                <div className="col-6 text-center ">
                    <img className='w-100 mb-3' src="ecosystem.png" alt="Ecosystem" />
                    <a href="/products" className="text-primary text-decoration-none ms-3 p-5">
                    Explore our products <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>                 
                    <a href="/kite" className="text-primary text-decoration-none " >Try Kite demo<i className        ="fa-solid fa-arrow-right-long"></i></a>
                </div>
                
                <div className="col-12 mt-5 text-center">
                    <img src="pressLogos.png" alt="press" />
                </div>  
            </div>
        </div>
        );
}

export default Stats;