import React from 'react'
import {images} from '../assets'   
// import {google} from '../assets' 
 
const Testimonials = () => {
  return (
    <>
  <h1 className='font-bold text-3xl text-center'>Testimonials</h1>
    <div className="flex flex-wrap">
<<<<<<< HEAD
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-s ">
      <img src={images} alt="" className='profile-img w-[120px] h-[120px]'/>
=======
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
      <img srcSet={images} alt=""  className='profile-img w-[120px] h-[120px]'/>
>>>>>>> 13ea5f6700af3795bdd17b6c6460f44fa9e583a4
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab.</p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
<<<<<<< HEAD
      <img src={images} alt="" className='profile-img w-[120px] h-[120px]'/>
      <p className='text-center text-gray-400' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
=======
      <img srcSet={images} alt=""  className='profile-img w-[120px] h-[120px]'/>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
>>>>>>> 13ea5f6700af3795bdd17b6c6460f44fa9e583a4
      </p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
    <div className="flex flex-col w-[280px] h-[290px] justify-center items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 shadow-xl ">
<<<<<<< HEAD
      <img src={images} alt="" className='profile-img w-[120px] h-[120px]'/>
=======
      <img srcSet={images} alt=""  className='profile-img w-[120px] h-[120px]'/>
>>>>>>> 13ea5f6700af3795bdd17b6c6460f44fa9e583a4
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</p>
      <strong className='text-xl'>Alok Singh</strong>
      <p className='text-lg'>Web Developer</p>
    </div>
 
    </div>
    </>
  );
  
};

 
export default Testimonials