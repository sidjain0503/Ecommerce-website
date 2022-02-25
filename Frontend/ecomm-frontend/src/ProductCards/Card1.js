import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Card1.css";

function Card1({title,image,desc,price,id}) {


  return (
    <Link to={`/product/${id}`} className='link'>
    <div className="product">
        <img src={image} alt="product" />
        <h4> {title}</h4>
        <h4>{desc}</h4>
        <h4>Rs. {price}.00</h4>
        <button className="pbutton" >Add to basket</button>

    </div>
    </Link>
  );
}

export default Card1;
