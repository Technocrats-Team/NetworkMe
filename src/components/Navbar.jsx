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

    </>
  );
};

export default Navbar;
