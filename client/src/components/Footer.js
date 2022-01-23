import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
 
function Footer() {
  return (
    <>
      <div className="footer_bg">
        <div className="footer_container">
          <div className="footer_content">
            <a href="#">
              <button>
                <FaFacebook className="icon"/>
              </button>
            </a>
            <a href="#">
              <button>
                <AiFillInstagram className="icon"/>
              </button>
            </a>
            <a href="#">
              <button>
                <AiFillTwitterCircle className="icon"/>
              </button>
            </a>
          </div>
          <div className="copy_right">
            <hr />
            <p> &copy; {new Date().getFullYear()} Copyright:plutotors </p>
          </div>
        </div>
      </div>
    </>
    // <div className="footer">
    //   <div className="container">
    //     <div className="footer_container">
    //       <div>
    //         <h3>About us</h3>
    //         <p>
    //           Heaven fruitful doesn't over for these theheaven fruitful doe over
    //           days appear creeping seasons sad behold beari ath of it fly signs
    //           bearing be one blessed after.
    //         </p>
    //         <div>
    //           <img src={facebook} alt="facebook" />
    //           <img src={instagram} alt="instagram" />
    //           <img src={twitter} alt="twitter" />
    //         </div>
    //       </div>

    //       <div>
    //         <h3>importent links</h3>
    //         <ul>
    //           <li>
    //             <a href="/">WHMCS-bridge</a>
    //           </li>
    //           <li>
    //             <a href="/">Search domain</a>
    //           </li>
    //           <li>
    //             <a href="/">My Account</a>
    //           </li>
    //           <li>
    //             <a href="/">shpping cart</a>
    //           </li>
    //           <li>
    //             <a href="/">our shop</a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3>Contact</h3>
    //         <p>
    //           Address :Hath of it fly signs bear be one blessed after <br />
    //           Phone : +0000 000 000 <br />
    //           Email : your@mail.com
    //         </p>
    //       </div>

    //       <div>
    //         <h3>news latter</h3>
    //         <p>
    //           Heaven fruitful doesn't over lesser in days. Appear creeping seas
    //         </p>
    //       </div>
    //     </div>
    //       <hr  />
    //     <div className="copy_right">
    //       <p> &copy; {new Date().getFullYear()} Copyright:plutotors </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
