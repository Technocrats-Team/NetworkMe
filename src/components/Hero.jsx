import React from 'react'
import {team} from '../assets'
const Hero = () => {
  return (
    <>
    <div className="about">
      <p className='pl-28 pt-32 text-4xl'>
        Networking made easy with
      </p>
      <p className='pl-52 text-4xl text-indigo-400'>Network-me</p>
      <p className='text-center mt-10 ml-24 text-xl  max-w-md'>
      <span className='text-[#5956E9]'>Connect</span > with <span className='text-[#5956E9]'>like-minded</span> professionals and expand your <span className='text-[#5956E9]'>network</span>.
    </p>
      {/* <div>
        <img src={team} alt="" />
      </div> */}
    <div class="  space-x-32 mt-8 mx-52">
  <button
    type="button"
    class="inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]">
    Success
  </button>
  
  <button
    type="button"
    class="inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
    Info
  </button>
</div>
    </div>
    </>
  )
}

export default Hero