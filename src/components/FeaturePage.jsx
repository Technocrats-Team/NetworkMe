import React from 'react'
import {random} from '../assets'

const FeaturePage = () => {
  return (
    <div className="main    ">
        <strong>Our Features</strong>
        <div className="flex f-cardContainer justify-center items-center h-[80vh] w-[80vw] flex-wrap gap-5 m-auto">
            <div className="f-card w-[300px] h-[300px]  "> 
            <img src={random} alt="" />
            <h2>
              Innovation
            </h2>
            <p>Network Me simplifies networking by streamlining registration and connection-making, allowing attendees to easily connect through one platform.</p>
            </div>
            <div className="f-card w-[300px] h-[300px]  "> 
             <img src={random} alt="" />
             <h3>
              Speed Networking
            </h3>
            <p>Ready, set, network! Our speed networking events offer a quick and efficient way to connect with other professionals in your field.</p>
            </div>
            <div className="f-card w-[300px] h-[300px]  "> 
            <img src={random} alt="" />
            <h3>
              Community
            </h3>
            <p>Join our community of professionals and expand your network. Connect with like-minded individuals, collaborate, and achieve your goals in a supportive environment.</p>
            </div>
            <div className="f-card w-[300px] h-[300px]  "> 
            <img src={random} alt="" />
            <h3>
              Productivity
            </h3>
            <p>Boost your productivity and reach your goals with our networking platform. with like-minded professionals.</p>
            </div>
            <div className="f-card w-[300px] h-[300px]  "> 
            <img src={random} alt="" />
            <h3>
              Social Impact
            </h3>
            <p>Create a positive impact on society by connecting with like-minded people who share similar values, goals, and interests. </p>
            </div>
            <div className="f-card w-[300px] h-[300px]  "> 
            <img src={random} alt="" />
            <h3>
              Accessibilty
            </h3>
            <p>Your platform allows attendees to connect with each other regardless of their location or schedule</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturePage