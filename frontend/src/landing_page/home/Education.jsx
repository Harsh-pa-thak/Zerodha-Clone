function Education() {
    return (
        <div className="container p-5 m-5">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src="/education.svg" alt="education" className="img-fluid" />
                    </div>
                    <div className="col">
                        <h2 className='mb-5'>Free and open market education</h2>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <br />
                        <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "20px" }}>
                        Varsity
                        <i className="fa-solid fa-arrow-right-long ms-2 mb-4" ></i>
                        </a> 

                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <br />
                        <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "20px" }}>
                        TradingQ&A 
                        <i className="fa-solid fa-arrow-right-long ms-2 mb-4"></i>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;