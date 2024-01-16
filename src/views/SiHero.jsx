// React
import { useState } from "react";

// local imports
import heroImage from "../assets/heroimage.jpg";


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

         

       
        </div>
      </div>
<div className="bg-white ml-[500px] mt-[100px] shadow-2xl rounded-xl h-[350px] w-[400px]">
      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[50px] text-center text-5xl leading-tight xs:text-[45px] text-black max-w-[1050px]">
          For What are you Coming for:
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-4xl text-gray-600 max-w-[500px]">
          Login as 
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
       <div>
        <a href="/DonorSi">
<button className=" mt-[50px] hover:border-4 px-4 py-2 hover:border-orange-400 bg-orange-400 animate-bounce hover:bg-white  text-xl  font-semibold hover:text-orange-400 mr-4 text-white text-[22px] rounded-xl">Donor </button>

        </a>

       </div>
       <div>
        <a href="/DonorSi">
<button className="hover:border-4 px-4 py-2 mt-[50px] hover:border-orange-400 bg-orange-400 animate-bounce hover:bg-white rounded-lg text-xl  text-white font-semibold hover:text-orange-400 mr-4">Buyer</button>

        </a>
       </div>
      </FadeIn>
      
      </div>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
