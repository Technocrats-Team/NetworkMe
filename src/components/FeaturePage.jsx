import React from 'react'
import {random} from '../assets'

const FeaturePage = () => {
  return (
    <div className="main    ">
        <strong>Our Features</strong>
        <div className="flex f-cardContainer justify-center items-center h-[80vh] ">
            <div className="f-card w-[250px] h-[200px]"> 
            <img src={random} alt="" />
            <h3>
              Fast
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
            </div>
            <div className="f-card w-[250px] h-[200px]"> 
             <img src={random} alt="" />
             <h3>
              Fast
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
            </div>
            <div className="f-card w-[250px] h-[200px]"> 
            <img src={random} alt="" />
            <h3>
              Fast
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturePage