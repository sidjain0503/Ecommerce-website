import React from "react";
import "./Card1.css";

function Card1() {
  return (
    <div className="Contaner">
      <div className="productHeader">
        <h2>Title</h2>
      </div>
      <div className="productBody">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
          alt=""
        />
      </div>
      <div className="productFooter">
        <a href="Some Where"> See More</a>
      </div>
    </div>
  );
}

export default Card1;
