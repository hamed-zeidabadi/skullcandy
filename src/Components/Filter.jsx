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
  const _lowestPrice = async () => {
    try {
      await dispach(BY_Like("LIKE"));
      await setSlected({ default: false, msg: "محبوترین ها" });
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
                  onClick={() =>
                    setSlected({ default: false, msg: "بیشترین قیمت" })
                  }
                >
                  بیشترین قیمت
                </li>
                <li
                  className="dropdown__select-option"
                  role="option"
                  onClick={() =>
                    setSlected({ default: false, msg: " کمترین قیمت" })
                  }
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
