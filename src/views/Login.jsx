// React
import { useState } from "react";
import {Link } from "react-router-dom";
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

      <FadeIn delay={0.2} direction="down" padding fullWidth>
      <div className="   hover:border-2  hover:scale-105  p-4 m-8 rounded-xl   hover:shadow-2xl  border-2 hover:border-slate-300 shadow-lg   bg-white">
 
  

 <div className=" text-center text-black font-serif font-extrabold  text-[30px] mb-5 ">  <big>Sign In</big> </div>
  <div className=" text-center font-serif text-[25px]  mb-[20px]">  Enter your Details</div>
  <div className="mb-10"> 
      <label className="m-5 text-[20px] font-medium"> Email address  </label> <br />
      
      <input className="border-2  p-1 rounded-xl pl-2 w-[350px] ml-5 border-slate-500" placeholder="Enter your Email" type="text">
          </input>
  </div>
  <div className=" mb-10">
      <label className="m-5 text-[19px] font-medium"> Enter Password </label> <br />
      <input className="border-2 p-1 rounded-xl pl-2 w-[350px] border-slate-500 ml-5" placeholder=  "*********" type="password">
  </input>
  <div className="flex  justify-between">
      <div className="flex  place-content-center  ">

      <input className="ml-5 mt-[10px]" type="checkbox" ></input>
      <label className="font-medium mt-[10px]">Remember me</label>
      </div>
      <div className="flex  justify-end">
      <Link to="/Login"><button className="  text-blue-700   w-30 mt-[10px] font-medium  " >Forgot Password?</button> </Link>
      </div>
  </div>
  </div>
 <div className="flex justify-center">
  <a href="/Myprofile">
 <button className=" p-2 ml-5  w-[350px] bg-blue-700 rounded-xl hover:bg-white  hover:text-blue-700  hover:border-blue-700 border-2 font-medium text-white ">Submit</button>

  </a>
 </div>
 <div>
 <Link to="/DonorSi"><button className="  text-blue-700 m-3  w-30 p-1 font-medium  " >Dont have an account? Register now!</button> </Link>
 </div>
 </div>
      </FadeIn>
      
      

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
