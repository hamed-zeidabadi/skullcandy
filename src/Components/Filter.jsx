import React, { useState } from "react";
const Filter = () => {
  const [Slected, setSlected] = useState({
    default: true,
    msg: "",
  });
  return (
    <>
      <div class="dropdown">
        <input
          type="checkbox"
          class="dropdown__switch"
          id="filter-switch"
          hidden
        />
        <label for="filter-switch" class="dropdown__options-filter">
          <ul class="dropdown__filter" role="listbox" tabindex="-1">
            <li
              class="dropdown__filter-selected"
              style={{ color: "#4d1091" }}
              aria-selected="true"
            >
              {Slected.default ? " نمایش بر اساس ...." : Slected.msg}
            </li>
            <li>
              <ul class="dropdown__select">
                <li
                  class="dropdown__select-option"
                  role="option"
                  onClick={() =>
                    setSlected({ default: false, msg: "بیشترین فروش" })
                  }
                >
                  بیشترین فروش
                </li>
                <li
                  class="dropdown__select-option"
                  role="option"
                  onClick={() =>
                    setSlected({ default: false, msg: "محبوترین ها" })
                  }
                >
                  محبوترین ها
                </li>
                <li
                  class="dropdown__select-option"
                  role="option"
                  onClick={() =>
                    setSlected({ default: false, msg: "بیشترین قیمت" })
                  }
                >
                  بیشترین قیمت
                </li>
                <li
                  class="dropdown__select-option"
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
