import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
        {/* Our Latest Signboard Designs */}
          <Heading title='Our Recent SignBoard Works' subtitle='' /> 
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
