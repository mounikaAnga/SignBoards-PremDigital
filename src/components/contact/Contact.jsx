import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact1 mb">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
        <div className="container1">
          {/* Address Section */}
          <div className="address1">
            {/* <FaMapMarkerAlt style={{ marginRight: "10px", color: "blue" }} /> */}
            <h2>Address</h2>
          </div>
          <p>
            Sy.No.195,198,Flat No.402,Anjanadri Residance,Block B,Aurobindo colony,Miyapur Rangareddy Dist - 500049,Telagana.
          </p>

          {/* Phone Section */}
          <div className="call-us">
            <FaPhoneAlt style={{ marginRight: "10px", color: "#007bff" }} />
            <h3>Call Us</h3>
          </div>
          <h2>070977 47740</h2>

          {/* Email Section */}
          <div className="email">
            <FaEnvelope style={{ marginRight: "10px", color: "#007bff" }} />
            <h3>Email Us</h3>
          </div>
          <h2>info@company.com</h2>

          {/* Contact Form */}
          <form className="shadow">
            <h4>Fill up the Form</h4>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
