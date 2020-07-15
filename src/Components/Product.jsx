/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const Product = () => {
  const [data, setdata] = useState([]);
  const DATA = useSelector((state) => state.data);

  console.log("DATA : ", DATA);

  useEffect(() => {
    setdata(DATA);
  }, [DATA]);

  return (
    <>
      <div className="product">
        <Filter />
        <div className="product_row">
          {DATA.length !== 0 && DATA ? (
            DATA.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                color={item.color}
                price={item.price}
                like={item.like}
                buy={item.buy}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
