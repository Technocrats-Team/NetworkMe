import React from 'react'
import {random} from '../assets'
import { innovation ,   productivity , speed ,   accesibility ,    community , social} from '../assets'

const FeaturePage = () => {
  return (
    <div className="main h-[100vh] ">
        <strong>Our Features</strong>
        <div className="flex f-cardContainer justify-center items-center h-[80vh] w-[80vw] flex-wrap gap-5 m-auto">
            <div className="f-card w-[300px] h-[300px] text-center "> 
            <img src={innovation} alt=""  className='w-[100px] h-[100px] mx-auto' />
            <h1 className='font-bold'>
              Innovation
            </h1>
            <p className='text-gray-500'>Network Me simplifies networking by streamlining registration and connection-making, allowing attendees to easily connect through one platform.</p>
            </div>
            <div className="f-card w-[300px] h-[300px] text-center "> 
             <img src={speed} alt="" className='w-[100px] h-[100px] mx-auto' />
             <h1 className='font-bold'>
              Speed Networking
            </h1>
            <p>Ready, set, network! Our speed networking events offer a quick and efficient way to connect with other professionals in your field.</p>
            </div>
            <div className="f-card w-[300px] h-[300px] text-center "> 
            <img src={community} alt=""  className='w-[100px] h-[100px] mx-auto'/>
            <h1 className='font-bold'>
              Community
            </h1>
            <p>Join our community of professionals and expand your network. Connect with like-minded individuals, collaborate, and achieve your goals in a supportive environment.</p>
            </div>
            <div className="f-card w-[300px] h-[300px] text-center "> 
            <img src={productivity} alt="" className='w-[100px] h-[100px] mx-auto' />
            <h1 className='font-bold'>
              Productivity
            </h1>
            <p>Boost your productivity and reach your goals with our networking platform. with like-minded professionals.</p>
            </div>
            <div className="f-card w-[300px] h-[300px] text-center "> 
            <img src={social} alt="" className='w-[100px] h-[100px] mx-auto' />
            <h1 className='font-bold'>
              Social Impact
            </h1>
            <p>Create a positive impact on society by connecting with like-minded people who share similar values, goals, and interests. </p>
            </div>
            <div className="f-card w-[300px] h-[300px] text-center "> 
            <img src={accesibility} alt=""  className='w-[100px] h-[100px] mx-auto'/>
            <h1 className='font-bold'>
              Accessibilty
            </h1>
            <p>Your platform allows attendees to connect with each other regardless of their location or schedule</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturePage