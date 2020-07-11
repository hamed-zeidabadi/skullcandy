import React from "react";
import logo from "../Images/skull.png";
import { FaRegUser, FaSistrix, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">

        <div className="header_container">
          {/* Add two container for left & right items */}

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
          </div>

          <div className="header_container_left">

            <nav className="header_container_left_nav">
              
              <ul>
                <li>
                  <FaRegUser />
                </li>
                <li>
                  <FaSistrix />
                </li>
                <li>
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
