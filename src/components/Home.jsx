import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home"
          className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>

          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
              <div className='flex flex-col justify-center h-full'>
                  <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                  <p className='text-gray-500 py-4 max-w-md'>
                    I have 8 year of experience and a very big dick.
                    Do you want to see it? I like to fuck and play video games.
                    How are you doing today little shit?
                  </p>

                  <div>
                    <Link
                      to="contact"
                      smooth
                      duration={500}
                      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 "
                      >
                        Want to work with me?
                        <span className='group-hover:rotate-90 duration-300'>
                        < MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                  </div>
              </div>

              <div>
                  <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-11/12 md:w-1/2' />
              </div>
          </div>
    </div>
  )
}

export default Home
