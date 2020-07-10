import React from "react";
const Filter = () => {
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
            <li class="dropdown__filter-selected" aria-selected="true">
              جدیدترین ها
            </li>
            <li>
              <ul class="dropdown__select">
                <li class="dropdown__select-option" role="option">
                  بیشترین فروش
                </li>
                <li class="dropdown__select-option" role="option">
                  محبوترین
                </li>
                <li class="dropdown__select-option" role="option">
                  بیشترین قیمت
                </li>
                <li class="dropdown__select-option" role="option">
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
