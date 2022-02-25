import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
// import Card2 from "./Card2";
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
    <section className="cards">
      
      {products&& products.map(product => <Card1 title={product.name} image={product.productImage} price={product.price} desc={product.description} id={product._id}/>)}
    </section>
  );
}

export default Cards;
