/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BY_Like } from "./../Redux/Actions";

const Filter = () => {
  const [Slected, setSlected] = useState({
    default: true,
    msg: "",
  });

  const dispach = useDispatch();

  const _handleLike = async () => {
    try {
      await dispach(BY_Like("LIKE"));
      await setSlected({ default: false, msg: "محبوترین ها" });
    } catch (err) {
      console.log("ERORR :", err);
    }
  };
  const _handelLowestPrice = async () => {
    try {
      await dispach(BY_Like("LOW"));
      await setSlected({ default: false, msg: " کمترین قیمت" });
    } catch (err) {
      console.log("ERORR :", err);
    }
  };
  const _handelHighestPrice = async () => {
    try {
      await dispach(BY_Like("UP"));
      await setSlected({ default: false, msg: "بیشترین قیمت" });
    } catch (err) {
      console.log("ERORR :", err);
    }
  };

  return (
    <>
      <div className="dropdown">
        <input
          type="checkbox"
          className="dropdown__switch"
          id="filter-switch"
          hidden
        />
        <label htmlFor="filter-switch" className="dropdown__options-filter">
          <ul className="dropdown__filter" role="listbox" tabindex="-1">
            <li
              className="dropdown__filter-selected"
              style={{ color: "#4d1091" }}
              aria-selected="true"
            >
              {Slected.default ? " نمایش بر اساس ...." : Slected.msg}
            </li>
            <li>
              <ul className="dropdown__select">
                <li
                  className="dropdown__select-option"
                  role="option"
                  onClick={() =>
                    setSlected({ default: false, msg: "بیشترین فروش" })
                  }
                >
                  بیشترین فروش
                </li>
                <li
                  className="dropdown__select-option"
                  role="option"
                  onClick={_handleLike}
                >
                  محبوترین ها
                </li>
                <li
                  className="dropdown__select-option"
                  role="option"
                  onClick={_handelHighestPrice}
                >
                  بیشترین قیمت
                </li>
                <li
                  className="dropdown__select-option"
                  role="option"
                  onClick={_handelLowestPrice}
                >
                  کمترین قیمت
                </li>
              </ul>
            </li>
          </ul>
        </label>
      </div>
    </>
  );
};

export default Filter;
