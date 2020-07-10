import React from "react";
import Card from "./Card";
import Filter from "./Filter";
const Product = () => {
  return (
    <>
      <div className="product">
        <Filter />
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Product;
