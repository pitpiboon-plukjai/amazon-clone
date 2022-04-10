import React from 'react'
import "./Home.css";
import Product from "./Product.js";


function Home() {
    return (
        <div className="home">
            {/* <p>I am the Home component.</p> */}
            <div className="home__container">
                <img className="home__image"
                
                src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg" 
                alt="" 
                
                />
                <div className="home__row">
                    {/* Products */}
                    <Product
                        id="111111"
                        title="Apple iPhone 12 Pro, 128GB, Pacific Blue - Fully Unlocked (Renewed)"
                        price={998.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41ZCg7l8N6L._AC_SY200_.jpg"

                    
                    />
                    <Product
                        id="222222"
                        title="Google Pixel 5A 5G 128GB 6GB RAM Factory Unlocked"
                        price={549.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51E7J1JKKXL._AC_SY200_.jpg"

                    
                    />

                </div>

                <div className="home__row">
                    {/* Products */}
                    <Product
                        id="333333"
                        title="Samsung Galaxy A12 (A125M) 64GB"
                        price={198.50}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81t8kQP6OQL._AC_SY200_.jpg"

                    
                    />                    
                    
                    <Product
                        id="444444"
                        title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray"
                        price={315.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_UY218_.jpg"

                
                    />                    
                
                    <Product
                        id="555555"
                        title="(Renewed) Apple MacBook Air MJVE2LL/A 13-inch Laptop 1.6GHz Core i5, 8GB RAM, 128GB SSD"
                        price={369.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61oPbujIUkL._AC_UY218_.jpg"

                    
                    />

                </div>

                <div className="home__row">
                    {/* Products */}
                    <Product
                        id="666666"
                        title="Apple MacBook Pro 15in Core i7 2.8GHz Retina (MGXG2LL/A)"
                        price={1134.00}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/716NEN4UVXL._AC_UY218_.jpg"

                    
                    />

                </div>



            </div>
        </div>
    )
}

export default Home
