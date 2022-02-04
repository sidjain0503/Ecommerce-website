import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
// import Card2 from './Card2'

import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <Card1 />
      <Card1 />
      <Card2 />
      <Card2 />
      <Card1 />
      <Card2 />
    </div>
  );
}

export default Cards;
