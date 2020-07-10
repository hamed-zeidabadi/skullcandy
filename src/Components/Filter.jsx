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
              Default option
            </li>
            <li>
              <ul class="dropdown__select">
                <li class="dropdown__select-option" role="option">
                  Option 1
                </li>
                <li class="dropdown__select-option" role="option">
                  Option 2
                </li>
                <li class="dropdown__select-option" role="option">
                  Option 3
                </li>
                <li class="dropdown__select-option" role="option">
                  Option 4
                </li>
                <li class="dropdown__select-option" role="option">
                  Option 5
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
