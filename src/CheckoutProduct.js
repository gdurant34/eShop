import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt=""
        className="checkoutProduct_image"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          YODALA Vintage Laptop Backpack for women men, Water Resistant Cool
          BookBag Computer Bag with USB Charging Port for Work Travel College,
          Fits up to 15.6Inch Notebook in Green
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct_rating">⭐️</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
