import React from "react";
import img from "../Images/T-Shirts/T-1.jpg";

const Card = ({ title, image, color, price, like, buy }) => {
  console.log("data  : ", color);

  return (
    <>
      <div className="card">
        <img src={image} alt="product images" className="card_img" />
        <div className="card_colors">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="card_desc_title"> تی شرت</p>
        <div className="card_desc">
          <p className="card_desc_price"> تومان5000</p>
        </div>
      </div>
    </>
  );
};

export default Card;
