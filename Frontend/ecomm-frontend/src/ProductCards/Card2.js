import React from "react";
import "./Card1.css";
import "./Card2.css";

function Card2() {
  return (
    <div className="Contaner">
      <div className="productHeader">
        <h2>Title</h2>
      </div>
      {/* the body */}
      <div className="rows">
        <div className="row">
          <div className="row__Item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
              alt=""
            />
            <a href="some where">Headphones</a>
          </div>
          <div className="row__Item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
              alt=""
            />
            <a href="some where">Headphones</a>
          </div>
        </div>
        <div className="row">
          <div className="row__Item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
              alt=""
            />
            <a href="some where">Headphones</a>{" "}
          </div>
          <div className="row__Item">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/SW-QC-XCAT-PC_04._SY116_CB665766031_.jpg"
              alt=""
            />
            <a href="some where">Headphones</a>{" "}
          </div>
        </div>
      </div>
      <div className="productFooter">
        <a href="Some Where"> See More</a>
      </div>
    </div>
  );
}

export default Card2;
