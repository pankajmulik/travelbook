import React from 'react'
import Navbar from '../component/Navbar'
import HomeCon from '../component/HomeCon'

const Home = () => {
  return (
    <div id='Home'>

      <div className="nav">

        <Navbar />

      </div>
      
      <div id="homecon  grid h-40 w-full bg-blue-400">
        <HomeCon/>
      </div>
    </div>
  )
}

export default Home