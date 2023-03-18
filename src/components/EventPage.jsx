import React from "react";
import { Photo } from "../assets";

const EventPage = () => {
  return (
    <>

      <div className="flex justify-center">
        <div class="bg-white rounded-lg shadow-lg p-6 w-[800px]">
          <h2 class="text-2xl font-bold mb-4">Reckon 4.0</h2>
          <p class="text-gray-600 text-sm mb-2">Date: September 1, 2022</p>
          {/* <p class="text-gray-600 text-sm mb-4">Time: 6:00 PM - 9:00 PM</p> */}
          <p class="text-gray-800 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacinia feugiat ipsum vel volutpat. Sed at massa euismod, faucibus
            mauris eget, scelerisque ex. Praesent vel lectus nulla. Vivamus
            tincidunt bibendum leo vel luctus.
          </p>
          {/* <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Register Now</button> */}
        </div>
      </div>
      <h1 className="text-2xl sponser">Sponsers</h1>
      <div className="sponsor-card flex w-[500px] h-[120px] m-auto mt-10 mb-2 justify-center items-center gap-8 rounded-lg pr-6">
        <img src={Photo} alt="" className="rounded-full sponsor-img w-[100px] h-[100px]"/>
        <div className="title ">
          <strong className="text-2xl">Threeway Studio</strong>
          <div className="social-icons flex flex-row gap-2 mt-4 justify-center ">
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
          </div>
        </div>
      </div>
      <div className="sponsor-card flex w-[500px] h-[120px] m-auto mt-10 justify-center items-center gap-8 rounded-lg pr-6">
        <img src={Photo} alt="" className="rounded-full sponsor-img w-[100px] h-[100px]"/>
        <div className="title ">
          <strong className="text-2xl">Threeway Studio</strong>
          <div className="social-icons flex flex-row gap-2 mt-4 justify-center ">
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
          </div>
        </div>
      </div>
      <div className="sponsor-card flex w-[500px] h-[120px] m-auto mt-10 justify-center items-center gap-8 rounded-lg pr-6">
        <img src={Photo} alt="" className="rounded-full sponsor-img w-[100px] h-[100px]"/>
        <div className="title">
          <strong className="text-2xl">Threeway Studio</strong>
          <div className="social-icons flex flex-row gap-2 mt-4 justify-center ">
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
            <button>
              {/* <img src={google} alt="" className="w-[20px] h-[20px]" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
