import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            {/* <p>Prem Digitals Led & Flex Board Manufactures in Miyapur, Hyderabad,  */}
              {/* is known to satisfactorily cater to the demands of its customer base. 
              The business came into existence in 2017 and has, since then, been a known name in its field.
             <p>It stands located at House No 1-248, Opposite IndusInd Bank, Above Apollo Pharmacy, Near X Road, Miyapur-500049. Opposite IndusInd Bank, Above Apollo Pharmacy is a prominent landmark in the area,
               and this establishment is in close proximity to the same. </p>
              <p>It has earned 300 reviews and aspires to develop a loyal customer base.
                 It has earned stamps like JD Verified, JD Trusted, JD Escrow substantiating the credentials of the business. The business strives to make for a positive experience through its offerings. </p>
             <p>The accepted modes of payment such as Cash, Debit Cards,
               Credit Cards make every business transaction easy and seamless, contributing to making the entire process even more effective.</p></p>
               <p>Flex printing implies printing premium digital banners using industrial-sized colour digital printing presses. There are other flex printing alternatives, such as star flex, where the surface reflects light and gives a shiny appearance.</p>
               <p>No matter the size of a business, everyone in today’s world wants to market their products in a way that would draw a large audience. Flex Printing Services in Miyapur, Hyderabad are still used to print various images and product descriptions on plastic, paper, food service paper, brown paper, banners, hoardings, and various forms of packaging materials in this era of digital printing.</p>
            <p>Signboard pages are powerful tools for businesses and individuals alike, creating a strong visual impact that captures attention instantly. They serve as digital front doors, presenting a brand’s personality, message, and offerings in a compelling way..</p>
            <p>With bold, eye-catching designs, these pages communicate essential information at a glance—whether it’s a business name, a tagline, or key details.</p> */}
            <p>Prem Digitals, a leading manufacturer of LED and Flex Boards in Miyapur, Hyderabad, has been successfully catering to customer demands since its inception in 2017. 
              Known for its exceptional quality and service, the business has built a strong reputation in the field.</p>
              <p>Conveniently located at House No. 1-248, Opposite IndusInd Bank, Above Apollo Pharmacy, Near X Road, Miyapur-500049,
                 this establishment is easy to find. Its proximity to prominent landmarks such as IndusInd Bank and Apollo Pharmacy makes it highly accessible</p>
                 <h3>Our Achievements</h3>
                 <ul class="achievements">
                  <li>Over 300 positive reviews, reflecting customer satisfaction.</li>
                  <li>Recognized with stamps like JD Verified, JD Trusted, and JD Escrow, substantiating our credibility.</li>
                  <li>Committed to delivering a positive and seamless customer experience.</li>
                </ul>
                <h3>Our Expertise in Flex Printing</h3>
                <p>Flex printing involves premium digital banner printing using high-quality industrial presses. 
                  We also offer alternatives such as star flex, which provides a shiny, reflective surface for enhanced visual appeal.</p>
                  <p>In today’s competitive world, effective marketing is essential for businesses of all sizes. 
                    Flex Printing Services in Miyapur, Hyderabad remain popular for printing images and product descriptions on materials like plastic, 
                    paper, banners, hoardings, and packaging, even in this digital age.</p>
                  <h3>Signboard Design Excellence</h3>
                  <p>Signboards are more than just tools; they create a strong visual impact that instantly captures attention.
                     Acting as digital front doors, they showcase a brand’s personality, message, and offerings in a compelling way.</p>
                     <p>With <b>bold, eye-catching designs</b>, our signboards communicate essential information—whether it’s a business 
                      name, tagline, or key details—ensuring your brand stands out.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
