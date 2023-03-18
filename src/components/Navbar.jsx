import React from "react";
// import Logo from '../assets'
const Navbar = () => {
  return (
    <>
      <div className="navabar ">
        
          {/* <img src={Logo} alt=""  /> */}
          <h2 className="mx-12 font-bold absolute text-2xl">Network-Me</h2>
          <ul className="flex justify-center mt-3">
            <li className="mx-4">Home</li>
            <li className="mx-4">Features</li>
            <li className="mx-4">Events</li>
            <li className="mx-4">Testimonials</li>
          </ul>
    
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
