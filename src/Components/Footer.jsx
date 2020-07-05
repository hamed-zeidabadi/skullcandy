import React from "react";
import { FaGithubAlt, FaInstagram, FaTwitter ,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className='footer'>
      <section className='footer_container'>

        <div className='footer_container_sign_up'>اول گوش کنید ...</div>

        <div className='footer_container_info'> نقشه سایت</div>

        <div className='footer_container_social_media'>

          <nav className="footer_container_social_media_icons'">
           <h6>ما را دنبال کنید</h6>
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
