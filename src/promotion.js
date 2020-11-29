import React from "react";

function Promo(price) {
    return (
        
        <div>
            <h1>Today's Offers</h1>
            <h2>Iphone price was <s>$1200</s>  now {price.iphone}</h2>
            <h2>Samsung S10 price was <s>OMR 250 </s>  now {price.samsung}</h2>
            
        </div>




    )

}
export default Promo;