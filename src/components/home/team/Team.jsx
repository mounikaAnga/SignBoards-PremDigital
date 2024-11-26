import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
    <div className="why-us-section">
    <div className="why-us-content">
        <h1>Why Choose Aspire Services?</h1>
        <ul>
          <li>
            <strong>Proven Expertise : </strong> With 13 years in the industry, Aspire Security is built on a foundation of extensive knowledge and experience, guaranteeing top-tier services in every area.
          </li>
          <li>
            <strong>Tailored Solutions : </strong> Our services are fully customized to meet the unique needs of each client, whether you’re seeking security, facilities management, or property management.
          </li>
          <li>
            <strong>Highly Trained Team : </strong> Our personnel undergo rigorous training and are fully licensed, providing professional, reliable service that meets the highest standards.
          </li>
          <li>
            <strong>24/7 Support and Monitoring : </strong> We offer around-the-clock security and support services, ensuring continuous protection and prompt responses when you need them most.
          </li>
        </ul>
      </div>
    <div className="why-us-container">
      <div className="circle-container">
        <div className="center-text">
         
        </div>

        <div className="circle">Commitment</div>
        <div className="circle">Quality</div>
        <div className="circle">Potential</div>
        <div className="circle">Performance</div>
        <div className="circle">Budget</div>
        <div className="circle">Time Bound</div>
        <div className="circle " style={{ backgroundColor: '#fff', color: '#ff5733' }}>WHY US</div>
      </div>
    </div>

    </div>
      
  
    </>
  )
}

export default Team
