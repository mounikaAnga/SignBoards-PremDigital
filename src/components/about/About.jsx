import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";
import Recent from "../home/recent/Recent";
import Sector from "../home/price/Sector";
import Team from "../home/team/Team";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Who We Are" subtitle="Check out our company story and work process" />
            <p>
              Aspire Security and Facilities Services was established by Shiva Varanasi to strive for excellence in the
              Security Services and Property Management sector.
            </p>
            <p>
              With over 13 years of experience in the security industry, Aspire Security and Facilities Services was
              formed to offer comprehensive security, facilities management, and property management solutions.
              Leveraging extensive experience, Aspire Security aims to provide customized services designed to meet the
              diverse needs of our clients across various industries.
            </p>
            <p>
              The performance of the security and facilities department is supervised and assessed by our Operations
              Management team on a daily basis. The Aspire team is regularly trained and updated on the latest
              developments in the security industry, enabling us to ensure that the services provided are current and
              relevant in the ever-changing environment.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="Aspire Security" />
          </div>
        </div>
      </section>
      <Recent/>
     <Team/>
    </>
  );
};

export default About;

