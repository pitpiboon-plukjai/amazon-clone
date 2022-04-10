import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (    
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            {/* Find the meaning later */}
                            Subtotal (0 items): <strong>0</strong>

                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"} //Find the meaning later
                thousandsSeparator={true}
                prefix={"$"}


            />

            <button>Process to Checkout</button>       

        </div>
    );
    
}

export default Subtotal
