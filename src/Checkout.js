import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {

    const [{basket, user}, ] = useStateValue();

    return (
        <div className="checkout">
            {/* <h1>Click this button</h1> */}

            <div className="checkout__left">

                <img 
                
                className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/UnionPay/2019/September/EN/Gateway-banner-02-1500_300-EN._CB452587450_.jpg" 
                
                alt=""
                
                />
            
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item =>(
                        
                        <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            image={item.image}
                            price={item.price}
                            rating = {item.rating}

                        
                        />

                        

                        

                    ))}


                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}


                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>

                <h2>The subtotal will go here</h2>

            </div>
                


            
        </div>
    );
}

export default Checkout
