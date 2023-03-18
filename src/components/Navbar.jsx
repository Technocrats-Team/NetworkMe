import React from "react";
import {Logo} from '../assets'
const Navbar = () => {
  return (
    <>
<div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center ">
      <img src={Logo} alt="My Company Logo" className="h-6 w-auto mr-4 px-2" />
      <p className='text-2xl font-bold'>Network-me</p>
    </div>
    <ul className="flex space-x-6">
        <li>Home</li>
        <li>Events</li>
        <li>Features</li>
        <li>Testimonials</li>
    </ul>
    <div className="flex items-center">
<button className="px-6">Sign In </button>

    </div>
  </div>
          {/* <button
            type="button"
            class="inline-block rounded border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Info
          </button> */}
    </>
  );
};

export default Navbar;
