import React from "react";
const Header = () => {
  return (

    <>
      <header className='header'>

        <div className='header_container'>
          {/* Add two container for left & right items */}
          <div className='header_container_right'></div>
          <div className='header_container_left'></div>

        </div>
        
      </header>
    </>

  );
};

export default Header;
