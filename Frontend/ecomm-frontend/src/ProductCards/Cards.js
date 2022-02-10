import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import axios from "axios";
// import Card2 from './Card2'

import "./Cards.css";


function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/product/new").then((res) => {
      setProducts(res.data);
      console.log("products >>>",res.data);
    });
  }, []);
  return (
    <div className="cards">
      
      {products&& products.map(product => <Card1 key={product._id} name={product.name} img={product.productImage}/>)}
    </div>
  );
}

export default Cards;
