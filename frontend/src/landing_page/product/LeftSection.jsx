import React from 'react';
function LeftSection({ img, text }) {
    return(
        <div className='container'>
            <div className="row m-5 p-5 align-items-center">
                <div className="col-6 mr-5 image">
                    <img src={img} alt="kite" style={{width:"80%"}}/>
                </div>
                <div className="col-6 text">{text}</div>
            </div>
        </div>
    )
}
export default LeftSection;