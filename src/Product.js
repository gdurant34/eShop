import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>Title</p>
          <p className="product_price">
            <small>$</small>
            <strong>30</strong>
          </p>
          <div className="product_rating">⭐️⭐️⭐️⭐️</div>
          <img
            // src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4d2532083d1f9f15b0b9e81f52af2f6f.jpg?imageView2/2/w/800/q/70"
            src=""
            alt=""
            // style={{ maxHeight: '200px' }}

          />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
