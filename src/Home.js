import React from "react";
import "./Home.css";
import Image from "./ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1520x800.webp";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src={Image} alt="" className="home_image" />
          <div className="home_row">
            <Product
              id="1"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={5}
            />
            <Product
              id="2"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={4}
            />
            <Product
              id="4"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={5}
            />
            <Product
              id="5"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={2}
            />
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="YODALA Vintage Laptop Backpack for women men, Water Resistant Cool BookBag Computer Bag with USB Charging Port for Work Travel College, Fits up to 15.6Inch Notebook in Green"
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
              price={42}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
