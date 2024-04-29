import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [listmenu, setlistmenu]=useState(false)
const [isLogedin, setisLogedin]=useState(false)

  return (
      <div id='Navbar' className='sticky top-0'>
          
          <div className="navelemen flex w-full max-h-max sm:justify-between md:grid grid-cols-2 bg-slate-100">
              <div className="logo flex m-2 text-left w-10 h-18 md:w-1/4">
                  <Link to='/' className='flex '>
                 <img src="/images/favicon.jpg" alt="not found " className='w-20 h-12 mx-3' /> Express Travel 
              
                  </Link> 
              </div>
              
              <div className="navbtn md:hidden text-center  my-auto p-2">
                  <button>
                      <i class="fa-solid fa-bars"></i>
                  </button>
              </div>

              {
                  isLogedin && <div>
                      <div className="p-logo">
                          <Link to='/profile'>
                              <button><i class="fa-regular fa-user"></i>
                              </button>
                          </Link>
                      </div>
                  </div>
              }


              <div className='namitem hidden  grid-cols-1 md:flex m-auto justify-start w-full'>
                  <ul className='flex'>
                      <li className='mx-2'>
                          <Link to='/home'>
                              Home
                          </Link> 
                      </li>
                      <li className='mx-2'>
                          <Link to='/about-us'>
                              About Us 
                          </Link>
                      </li>

                      <li className='mx-2'>
                          <Link to='/services'>
                            Services
                          </Link>
                      </li>
                      <li className='mx-2'>
                          <Link to='/contact-us'>
                              Contact us
                          </Link>
                      </li>
                  </ul>
              </div>
</div>
         
    </div>
  )
}

export default Navbar