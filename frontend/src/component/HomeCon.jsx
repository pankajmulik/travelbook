import React, { useState } from 'react'
import {CountrySelect,CitySelect,StateSelect,LanguageSelect} from 'react-country-state-city'
import '../App.css';

const HomeCon = () => {
    const [cityname, setcityName] = useState('konark')
    
    const serchcity = () => {
        
    }

    const handlechange = () => {
        
    }

    

  return (
      <div id='HomeCon' className='m-auto p-4'>
          

          <div className="input-city flex justify-center w-full">
              
              <div className="input-label m-2">

                  <label htmlFor="city-name">Search Country or place to travel </label>
                  
              </div>
              <div className="input-name m-2">
                  

                  <input type="text" name='city-name' id='city-name' onchanege={handlechange} placeholder='enter destination' />

              </div>

              <div className="search-btn  m-2 bg-cyan-800 rounded p-1">
                  <button className=' ' onClick={serchcity}>Search</button>
              </div>
          </div>


          <div className="place-div w-full h-40">
              
              <div className="imgs">
                  
</div>

              
          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

          

      </div>
  )
}

export default HomeCon