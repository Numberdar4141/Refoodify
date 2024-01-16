// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image1.jpg";
import imageTwo from "../assets/image2.jpg";
import imageThree from "../assets/image3.jpg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return (
    <div id="reference" className="mb-[30px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
          <div class="w-[600px] h-fit group">
    <div class="relative overflow-hidden">
    <div>
            <img src={imageOne} alt="" className="w-[600px]  rounded-3xl h-[300px]"  />
          </div>    
      <div class="absolute h-full w-full bg-black/40 rounded-3xl flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div  className="grid">
          <div className="font-bold text-white text-[50px]">
            Eat Veg
          </div>

        <button class="bg-orange-500 rounded-2xl text-white py-2 px-5">Buy Now</button>
        </div>
      </div>
    </div> 
  </div>
  <div class="w-[600px] h-fit group">
    <div class="relative overflow-hidden">
    <img src={imageTwo} alt="" className="w-[600px]  rounded-3xl h-[304px]"  />    
      <div class="absolute h-full w-full bg-black/40 rounded-3xl flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <div  className="grid">
          <div className="font-bold text-white text-[50px]">
            Eat Non-Veg
          </div>

        <button class="bg-orange-500 rounded-2xl text-white py-2 px-5">Buy Now</button>
        </div>
      </div>
    </div> 
  </div>
          </div>
        </FadeIn>
        <FadeIn  className="animate-spin" delay={0.2} direction="left">
          
          
  
  <div class="w-[600px] h-fit group">
    <div class="relative overflow-hidden">
            <img src={imageThree} alt="" className="w-[600px]  rounded-3xl h-[640px]"  />      
      <div class="absolute h-full w-full bg-black/40 rounded-3xl flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <div  className="grid">
          <div className="font-bold text-white text-[50px]">
            Eat Fast Food
          </div>

        <button class="bg-orange-500 rounded-2xl text-white py-2 px-5">Buy Now</button>
        </div>
      </div>
    </div> 
  </div>

        </FadeIn>
      </div>
    </div>
  );
};

export default Reference;
