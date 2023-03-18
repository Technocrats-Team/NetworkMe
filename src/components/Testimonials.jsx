import React from 'react'
import {images} from '../assets'   
// import {google} from '../assets' 
 
const Testimonials = () => {
  return (
    <>
  <h1 className='font-bold text-3xl text-center'>Testimonials</h1>
    <div className="flex flex-wrap">
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
      <img src={images} alt="" srcset="" className='profile-img w-[120px] h-[120px]'/>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab.</p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
      <img src={images} alt="" srcset="" className='profile-img w-[120px] h-[120px]'/>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      </p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
      <img src={images} alt="" srcset="" className='profile-img w-[120px] h-[120px]'/>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
 
    </div>
    </>
<<<<<<< HEAD
  );
  
};
=======
  )
}
>>>>>>> fffc8708cd5bb8c08e4dfac50c0cf0a5c2114532
 
export default Testimonials