import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <section className="three-boxes">
      <div className="container">
        {list.map((box, index) => (
          <div
            className="box"
            key={index}
            style={{ backgroundColor: box.bgColor }}
          >
            <img src={box.image} alt={box.heading} className="box-image" />
            <h3 className="box-heading">{box.heading}</h3>
            <p className="box-content">{box.content}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default RecentCard
