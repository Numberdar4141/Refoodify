import React, { useState,useEffect } from 'react';
import H1 from "../assets/H1 .jpg"
import Wlogo from "../assets/Wlogo.png"

const NavLink = () => {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const handleMouseEnter1 = () => {
    setIsDropdown1Open(true);
  };
  const handleMouseLeave1 = () => {
    setIsDropdown1Open(false);
  };
  const handleMouseEnter2 = () => {
    setIsDropdown2Open(true);
  };
  const handleMouseLeave2 = () => {
    setIsDropdown2Open(false);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <nav  className='bg-transparent h-[68px]    shadow-6xl  ' style={{ top: visible ? '0' : '-100px' }}  >    
<div class=" font-sans w-full h-[70px] m-0">
	<div class=" bg-transparent shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div className='flex text-white  font-semibold font-serif  text-[22px]'>
        <img src={Wlogo} alt=""  className='w-[50px] h-[50px]  rounded-full'/> <div className='  text m-[10px]'>
          Refoodify
          </div>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <a href="/" class="text-orange-500 text-xl font-semibold  relative before:content-['']  before:absolute before:block before:w-full before:h-[2px] before:-bottom-4 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-bottom-left before:transition before:ease-in-out before:duration-500 hover:text-white mr-4">Home</a>
          <a href="/Food" class="text-white text-xl   relative before:content-['']  before:absolute before:block before:w-full before:h-[2px] before:-bottom-4 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-bottom-left before:transition before:ease-in-out before:duration-500 font-semibold hover:text-white mr-4">Food</a>
          <a href="#" class="text-blue-500 text-xl font-semibold  relative before:content-['']  before:absolute before:block before:w-full before:h-[2px] before:-bottom-4 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-bottom-left before:transition before:ease-in-out before:duration-500 hover:text-white mr-4">Food Donor</a>
          <a href="/About" class="text-white text-xl font-semibold  relative before:content-['']  before:absolute before:block before:w-full before:h-[2px] before:-bottom-4 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-bottom-left before:transition before:ease-in-out before:duration-500 hover:text-white mr-4">About Us</a>
          <a href="#" class="text-green-500 text-xl  relative before:content-['']  before:absolute before:block before:w-full before:h-[2px] before:-bottom-4 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-bottom-left before:transition before:ease-in-out before:duration-500 font-semibold hover:text-white">Donate</a>
        </div>
        <div class="hidden sm:flex sm:items-center">
          <a href="/Signin" class="text-white hover:border-[2px] px-2 py-1 hover:border-orange-400 bg-orange-400 animate-bounce hover:bg-white rounded-lg text-xl  font-semibold hover:text-orange-400 mr-2">Sign in</a>
          <a href="Myprofile" class=" translate-x-[30px] "><img src={H1} alt=""    className='w-[40px] h-[40px] rounded-full'/></a>
        </div>
        <div class="sm:hidden cursor-pointer"> 
        </div>
      </div>
    </div>
  </div>
</div>
    </nav>
  );
};
export default NavLink;
 