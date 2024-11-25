import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We’re here to support all your branding needs.</p>
            </div>
            {/* <button className="btn5">Contact Us Today</button> */}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            {/* <div className="logo"> */}
              {/* <img src="../images/logo3.png" alt="Logo" /> */}
              <h1>Do You Need Help With Anything</h1>
              <p>Write to us at.</p> 
              <h4>premdigitalsignage.com</h4>
              <div className="input">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            {/* </div> */}
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((item, idx) => (
                  <a href={item.link}><li key={idx}>{item.list}</li></a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal">
        <span>© 2024 PremDigitals.</span>
      </div>
    </>
  );
};

export default Footer;
