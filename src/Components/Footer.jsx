import React from "react";
import { FaGithubAlt, FaInstagram, FaTwitter ,FaYoutube,FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className='footer'>

      <section className='footer_container'>


        <div className='footer_container_sign_up'>

            <h5>اول گوش کنید ...</h5>
            <form className='footer_container_sign_up_form'>
              <input type='email' placeholder='  ثبت نام با ایمیل' />
              <button>></button>
            </form>

        </div>



        <div className='footer_container_info'>

          <div className="footer_container_info_right">

          <ul className='footer_container_info_ul'>

            <li><a href='#'>درباره ما</a></li>
            <li><a href='#'>محافظت</a></li>
            <li><a href='#'>آماده سازی</a></li>
            <li><a href='#'>سایز ها</a></li>

          </ul>
            
          </div>

          <div className="footer_container_info_middle">

          {/* اسم کلاس پایین خوب نشده  */}
          <ul className='footer_container_info_ul'>

            <li><a href='#'>تخفیف</a></li>
            <li><a href='#'> برنامه ها</a></li>
            <li><a href='#'> مقایسه</a></li>
            <li><a href='#'>محصولات</a></li>
            <li><a href='#'>تاریخچه</a></li>

          </ul>

          </div>

          <div className="footer_container_info_left">

            <ul className='footer_container_info_ul'>

              <li><a href='#'>راهنمایی</a></li>
              <li><a href='#'>ارتباط با ما</a></li>
              <li><a href='#'>پروفایل</a></li>
              <li><a href='#'>گارانتی</a></li>

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

      <div className="footer_base">

        <div className="footer_base_container">

            <div className="footer_base_copyright">
              <ul>
                <li> <FaRegCopyright /> </li>
                <li>تمامی حقوق برای   
                  <a href='https://github.com/hamed-zeidabadi' target='blanck'> حامد</a>
                 و <a href='https://github.com/amin-da' target='blanck'> امین </a>
                  محفوظ است</li>
              </ul>
            </div>

            <div className="footer_base_links">
            <ul>
                <li > <a href='#'>شرایط استفاده </a></li>
                <li className='footer_base_links_after'> <a href='#'>حقوق کاربران</a></li>
              </ul>
            </div>

        </div>

      </div>


     </footer>
    </>
  );
};

export default Footer;
