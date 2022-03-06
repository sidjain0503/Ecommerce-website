import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Card1.css";

function Card1({title,image,desc,price,id}) {


  return (
    <div className="product">
        <img src={image} alt="product" />
        <h4> {title}</h4>
        <h4>{desc}</h4>
        <h4>Rs. {price}.00</h4>
    <Link to={`/product/${id}`} className='link'> <h4>See more&#8811; </h4></Link>
        <button className="pbutton" >Add to basket</button>


    </div>
    
  );
}

export default Card1;
