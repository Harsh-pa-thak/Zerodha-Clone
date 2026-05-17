import React from 'react';

function ImgText({img , text}){
    return (    
    <div>
        <img style={
            {
                height:"250px",
                width:"250px"
            }
        } src={img} alt="" />
        <div>
            {text}
        </div>
    </div>
    )
}

export default ImgText;