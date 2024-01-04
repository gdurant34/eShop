import React from "react";
import "./Home.css";
import Image from "./ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1520x800.webp";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src={Image} alt="" className="home_image" />
                    <div className="home_row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="home_row">
                        <Product />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;