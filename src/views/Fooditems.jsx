// local imports


import imageOne from "../assets/Sig4.jpg";
import imageTwo from "../assets/v2.jpg";
import imageThree from "../assets/f8.jpg";

import FadeIn from "../components/FadeIn";

const Fooditems = () => {
  return (
    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
      <FadeIn  className="animate-spin" delay={0.2} direction="right">
          
          
  
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

        <FadeIn delay={0.2} direction="left">
          <div className="flex flex-col gap-8">
          <div class="w-[600px] h-fit group">
    <div class="relative overflow-hidden">
    <div>
            <img src={imageOne} alt="" className="w-[600px]  rounded-3xl h-[300px]"  />
          </div>    
      <div class="absolute h-full w-full bg-black/40 rounded-3xl flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div  className="grid">
          <div className="font-bold text-white text-[50px]">
            Drink Coffe
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
       
      </div>
    </div>
  );
};

export default Fooditems;
