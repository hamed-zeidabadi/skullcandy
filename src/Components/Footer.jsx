import React from "react";
import { FaGithubAlt, FaInstagram, FaTwitter ,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className='footer'>
      <section className='footer_container'>

        <div className='footer_container_sign_up'>اول گوش کنید ...</div>

        <div className='footer_container_info'>

          <div className="footer_container_info_right">

          <ul className='footer_container_info_ul'>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
          </ul>
            

          </div>

          <div className="footer_container_info_middle">

          <ul className='footer_container_info_ul'>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
          </ul>

          </div>

          <div className="footer_container_info_left">

          <ul className='footer_container_info_ul'>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
            <li><a>aaaa</a></li>
          </ul>

          </div>

        </div>

        <div className='footer_container_social_media'>
        <h5>ما را دنبال کنید</h5>
          <nav className="footer_container_social_media_icons'">
           
              <ul>
                <li>
                  <FaGithubAlt />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li> 
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </nav>

        </div>
        
      </section>
     </footer>
    </>
  );
};

export default Footer;
