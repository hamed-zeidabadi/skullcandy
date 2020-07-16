/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import logo from "../Images/men.jpg";
import { FaRegUser, FaSistrix, FaShoppingCart, FaEquals } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const HandleOpen = () => {
    setOpen(!open);
    const body = document.querySelector("body");

    if (open) {
      body.classList.remove("body_drop_dwon_menu_class");
    } else {
      body.classList.add("body_drop_dwon_menu_class");
    }
  };

  return (
    <>
      <header className="header">
        <div className="header_container">
          <div className="header_container_right">
            <img
              src={logo}
              alt="logo skull"
              className="header_container_right_logo"
            />
            <nav className="header_container_right_nav">
              <ul>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="#">قوانین</a>
                </li>
              </ul>
            </nav>

            <div className="header_container_right_menu">
              <a onClick={HandleOpen}>
                <FaEquals />
                {console.log(` a menu clicked and statse is ${open}`)}

                {open ? (
                  <ul className="header_container_right_menu_items">
                    <li>خانه</li>
                    <li>تماس با ما</li>
                    <li>قوانین</li>
                  </ul>
                ) : (
                  false
                )}
              </a>
            </div>
          </div>

          <div className="header_container_left">
            <nav className="header_container_left_nav">
              <ul>
                <li className="header_container_left_nav_user">
                  <FaRegUser />
                </li>
                <li className="header_container_left_nav_strix">
                  <FaSistrix />
                </li>
                <li className="header_container_left_nav_cart">
                  <FaShoppingCart />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
