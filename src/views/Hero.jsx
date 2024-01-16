// React
import { useState } from "react";

// local imports
import heroImage from "../assets/heroimage.jpg";


import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className=" relative w-full h-[800px] items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavLink/>
      <div
        className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-10 mx-auto px-10"
      >
        
        

       
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
         <div class="block sm:hidden w-[500px] h-[350px]  border-t-2 py-2">
        <div class="flex flex-col">
          <a href="/" class="text-black text-xl font-semibold hover:text-gray-600 mb-1">Home</a>
          <a href="/Food" class="text-black text-xl font-semibold hover:text-gray-600 mb-1">Food</a>
          <a href="#" class="text-black text-xl font-semibold hover:text-gray-600 mb-1">Food Donor</a>
          <a href="/About" class="text-black text-xl font-semibold hover:text-gray-600 mb-1">About Us</a>
          <a href="/About" class="text-black text-xl font-semibold hover:text-gray-600 mb-1">Donate</a>
          <div class="flex justify-between items-center border-t-2 pt-2">
            <a href="/Signin" class="text-black text-xl font-semibold hover:text-gray-600 mr-4">Sign in</a>
            <a href="/Myprofile" class="text-black text-xl font-semibold border px-4 py-1 rounded-lg hover:text-gray-600 hover:border-purple-600">My Profile</a>
          </div>
        </div>
      </div>

         

       
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search your Fav food...."
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-gray-200 outline-none text-gray-700
              text-base xs:text-lg placeholder-gray-700"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
