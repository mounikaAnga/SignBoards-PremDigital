import React from "react"

import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"
import Team from "./team/Team"

import Sector from "./price/Sector"


const Home = () => {
  return (
    <>

      <Hero /> 
     
      <Featured />
  
      <Recent />
      <Sector/>
      <Team/>
   
      
     
    
      
    </>
  )
}

export default Home
