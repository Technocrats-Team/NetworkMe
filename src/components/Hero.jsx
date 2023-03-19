import React from 'react'
import {team} from '../assets'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className="flex h-[100vh] justify-center items-center gap-10">
      <div className="left mr-3">
        <h3 className='text-center text-4xl mb-3'>Networking Made Easy with</h3>
        <h1 className='text-center text-4xl mb-3 text-violet-500 font-semibold'>Network Me</h1>
      <p className='text-2xl mb-10'><span className='text-[#5956E9]'>Connect</span > with <span className='text-[#5956E9]'>like-minded</span> professionals and <br /> <p className="text-center"><span className="text-center"></span> expand your <span className='text-[#5956E9]'>network</span></p></p> 

      <div className="btn-row flex gap-10 justify-center">
      <Link to="/register">

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full w-[110px]'>
          Host
          </button>
         </Link>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full w-[120px]'>
           Attendee
          </button>
      </div>
      </div>
      <div className=" ml-5 right">
        <img src={team} alt="" className='h-[400px]' />
      </div>
    </div>
    </>
  )
}

export default Hero