import React, { useState, useEffect } from "react";
import red from "../Images/T-Shirts/T-1.jpg";
import pink from "../Images/T-Shirts/T-7.jpg";
import blue from "../Images/T-Shirts/T-8.jpg";
import black from "../Images/T-Shirts/T-5.jpg";

const Card = ({ title, image, color, price, like, buy }) => {
  const [Color, setColor] = useState(null);

  return (
    <>
      <div className="card">
        <img
          src={Color ? Color : image}
          alt="product images"
          className="card_img"
        />
        <div className="card_colors">
          <div
            style={{ backgroundColor: "red" }}
            onClick={() => setColor(red)}
          ></div>
          <div
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor(blue)}
          ></div>
          <div
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor(pink)}
          ></div>
          <div
            style={{ backgroundColor: "black" }}
            onClick={() => setColor(black)}
          ></div>
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
