import React from "react";
import "./Card1.css";

function Card1({title,image,desc,price}) {
  return (
    <div className="product">
        <img src={image} alt="product" />
        <h4> {title}</h4>
        <h4>{desc}</h4>
        <h4>Rs. {price}.00</h4>
        <button className="pbutton">Add to basket</button>

    </div>
  );
}

export default Card1;
