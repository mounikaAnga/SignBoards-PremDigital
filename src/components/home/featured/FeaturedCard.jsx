import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  
  return (
    <div className="image-text-container">
      {featured.map((item, index) => (
        <div
          className={`image-text-row ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <img src={item.cover} alt={`service`} className="image" />
          <div className="text-content">
    <h2 className="heading">{item.heading}</h2>
    <p className="text">{item.text}</p>
  </div>
        </div>
      ))}
    </div>
  );
  
}

export default FeaturedCard
