import React from 'react';
function RightSection({ img, text }) { 

    
    return(
        <div className='container m-5 p-5 align-items-center'>
            <div className="row">
                <div className="col-6 text">{text}</div>
                <div className="col-6 ml-5 image">
                    <img src={img} alt="kite" style={{width:"80%"}}/>
                </div>
            </div>
        </div>
    )
}
export default RightSection;