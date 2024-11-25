import React from "react"
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from "react-icons/fa"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <h2 className="address">
            <FaMapMarkerAlt style={{ marginRight: "10px", color: "blue" }} />
            Address
          </h2>
          <p>
            1-112/3/5/A, 1st floor, beside Testy king bakers and Apollo pharmacy, 
            Opposite Sai Teja west side liquors wine shop, Balaji Nagar,
            Kalapuram basti, Miyapur cross (X) road signal, Bollaram road, 
            Miyapur Rd, Hyderabad, Telangana 500049
          </p>

          <h3>
            <FaArrowRight style={{ marginRight: "10px", color: "#447128" }} />
            Alternatively, you can use the following website to contact us.
          </h3>
          <a href="https://www.justdial.com/jdmart/Hyderabad/Prem-Digitals-Best-Ads-Flex-Led-Sinage-Boards-Manufacturers-Nearby-Miyapur-Signal-X-Road-Beside-Testy-King-Bekers-Opposite-Sai-Teja-West-Side-Wine-ShopBollar-Miyapur/040PXX40-XX40-171226171153-Q4S4_BZDET/catalogue/photos" target="_blank" rel="noopener noreferrer">
            Prem Digitals
          </a>

          <h3>
            <FaPhoneAlt style={{ marginRight: "10px", color: "#007bff" }} />
            Call Us
          </h3>
          <h2>070977 47740</h2>

          <form className='shadow'>
            <h4>Fill up the Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact