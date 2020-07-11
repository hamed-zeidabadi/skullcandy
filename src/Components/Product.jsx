import React, { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Fake_Data from "../Data/data";
const Product = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    //fetch fake data in local
    setdata(Fake_Data);
  }, [data]);

  return (
    <>
      <div className="product">
        <Filter />
        <div className="product_row">
          {data.length !== 0 && data ? (
            data.map((item) => (
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
            <p>loading ...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
