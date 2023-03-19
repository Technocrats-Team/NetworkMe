import React from 'react'
import { random } from '../assets'
import {github} from '../assets'

const SponsorTile = () => {
  return (
    <>
    <div className="sponsor-card flex w-[750px] h-[150px] shadow-lg m-auto mt-10 justify-center items-center gap-8 rounded-lg pr-6">
       <img src={random} alt="" className='rounded-full sponsor-img w-[100px] h-[100px]' />
        <div className="title ">
            <strong className='text-3xl'>Ethereum</strong>
            <div className="social-icons flex flex-row gap-2 mt-4 justify-center ">
        <button>
            <img src={github} alt=""  className='w-[30x] h-[30px]'/>
        </button>
        <button>
            <img src={github} alt=""  className='w-[30px] h-[30px]'/>
        </button>
        <button>
            <img src={github} alt=""  className='w-[30px] h-[30px]'/>
        </button>
        <button>
            <img src={github} alt=""  className='w-[30px] h-[30px]'/>
        </button>
      </div>
        </div>
    </div>
    </>
  );
}

export default SponsorTile