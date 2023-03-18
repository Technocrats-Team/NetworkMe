import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="about">
      <p className='pl-28 pt-32 text-4xl'>
        Networking made easy with
      </p>
      <p className='pl-52 text-4xl text-indigo-400'>Network-me</p>
      <p className='text-justify'>
      Connect with like-minded professionals and expand your network.
    </p>
    <div className='flex mx-auto align-top'>
    <button className='btn mx-4 border border-gray-500 px-4 py-2 rounded-lg'>Host</button>
    <button className='btn mx-4 border border-gray-500 px-4 py-2 rounded-lg'>Attend</button>
    </div>
    </div>
    </>
  )
}

export default Hero