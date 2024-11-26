import React from "react"
import Heading from "../../common/Heading"
import "./sector.css"
import PriceCard from "./sectorCard"

const Sector = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='What We Offer and Who We Serve' subtitle='Customized services for diverse sectors, driven by excellence and professionalism' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Sector
