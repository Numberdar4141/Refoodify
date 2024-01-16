import React, { useState,useRef,useEffect } from 'react';
import image1 from '../assets/n1.jpg'
import image2 from '../assets/n2.jpg'
import image3 from '../assets/n3.jpg'
import image4 from '../assets/n4.jpg'
import image5 from '../assets/n5.jpg'
import image6 from '../assets/n6.jpg'
import image7 from '../assets/n7.jpg'
import image8 from '../assets/n8.jpg'
import image9 from '../assets/n9.jpg'
import image10 from '../assets/n10.jpg'
import image11 from '../assets/n11.jpg'
import image12 from '../assets/n12.jpg'
import image13 from '../assets/n13.jpg'
import image14 from '../assets/n14.jpg'
import image15 from '../assets/n15.jpg'
import FadeIn from "../components/FadeIn";
import Pi1 from "../assets/Pi1.png"
import Bi1 from "../assets/Bi1.png"
import Veg from "./Veg"
import Fastslider from "./Fastslider"
import Products from './Products';

const images = [
  image1,
  
  
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,

 
];

const descriptions = [
 
  'Pizza',
  'Burger',
  'PanCake',
  'Sandwich',
  'Description 6',
  'Description 7',
  'Description 8',
  'Description 9',
  'Description 10',
  'Description 11',
  'Description 12',
  'Description 13',
  'Description 14',
  'Description 15',
];

const Carousel = () => {
  const totalBoxes = images.length;
  const boxesPerPage = 5;
  const totalPages = Math.ceil(totalBoxes / boxesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const goToNextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const startIndex = currentPage * boxesPerPage;
  const endIndex = Math.min(startIndex + boxesPerPage, totalBoxes);

 // const ratings = [4.5, 3.8, 5.0, 4.2, 3.7, 4.9, 4.0, 4.7, 3.5, 4.8, 3.9, 4.3, 4.6, 4.1, 4.4];
  const ratings1 = ['99/-', '49/-', '59/-', '99/-', 3.7, 4.9, 4.0, 4.7, 3.5, 4.8, 3.9, 4.3, 4.6, 4.1, 4.4];


  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsVisible(elementTop < windowHeight / 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div>
    <Products/>
    <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[10px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-8 text-black max-w-[1050px]">
        Bonus: Genuinely care
        </h1>
      </FadeIn>
    </div>
    <div>
        
       <div className=" h-auto mt-[100px]  w-screen">

<div ref={elementRef}
className="flex">


<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
40%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Bi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Burger</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
42%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
55%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
50%
</div>
</div>


</div>
<div ref={elementRef}
className="flex mt-[50px]">


<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
41%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
49%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px] hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
33%
</div>
</div>
<div className="bg-gray-100 w-[250px] ml-[70px]  hover:-translate-y-3 flex rounded-xl shadow-2xl  h-[100px]">
<img src={Pi1} alt="" className="w-[100px] rounded-2xl h-[100px]" />
<div className="text-[20px] p-[30px]">Pizza</div>
<div className="bg-red-500 w-10 h-10 -translate-y-[10px] text-[15px] text-white p-2 translate-x-5 rounded-full">
60%
</div>
</div>

</div>
</div>
    </div>

    <div>
    <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-4 text-black max-w-[1050px]">
        Non Veg : Items
        </h1>
      </FadeIn>
    </div>

    <div ref={elementRef}
    className="flex mt-[100px]  flex-col items-center">
   
      
      <FadeIn  delay={0.5} direction="down" className="flex">
        
        {images.slice(startIndex, endIndex).map((image, index) => (
          <div
            key={startIndex + index}
            className={`box w-[250px] h-[300px]  duration-300  hover:-translate-y-3 shadow-lg hover:shadow-xl rounded-3xl hover:rounded-lg hover:border-slate-300 hover:scale-105 flex flex-col items-center justify-center mx-2 border border-gray-300 ${
              index === 0 ? 'border-blue-500' : ''
            } cursor-pointer`}
            onClick={() => setCurrentPage(currentPage)}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              alt={`Box ${startIndex + index + 1}`}
              className="w-full rounded-t-lg h-[170px] object-cover"
            />
            <div className="bg-white w-full h-1/2 p-2 flex flex-col items-center justify-between">
            <p className="text-center text-[20px] font-medium mt-2">{descriptions[startIndex + index]}</p>
            <div className="flex items-center">
                <span className="text-red-500 mr-2">Price:</span>
                <span>{ratings1[startIndex + index]}</span>
              </div>
              <div className="flex items-center mb-2">
                <button className="btn border-2 hover:rounded-lg  bg-gray-300 hover:bg-gray-400 hover:font-medium rounded-3xl w-[120px] btn-secondary mr-2">{`Items Details`}</button>
                <button className="btn border-2 hover:rounded-lg  bg-gray-300 hover:bg-gray-400 hover:font-medium rounded-3xl w-[100px] btn-secondary">{`Order Now`}</button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Rating:
                <span class="material-symbols-outlined  text-yellow-500 "   >
*
</span>  
<span class="material-symbols-outlined  text-yellow-500 "   >
*
</span>  
<span class="material-symbols-outlined  text-yellow-500 "   >
*
</span>  
<span class="material-symbols-outlined text-yellow-500">
*
</span>             

                </span>
                
              </div>
             
            </div>
          </div>
        ))}
      </FadeIn>
      
      <div className="flex justify-center mt-5">
        <button
          onClick={goToPreviousSlide}
          className="btn bg-gray-700 hover:bg-black rounded-full text-white w-[35px] pt-[5px] btn-primary mr-5"
          disabled={currentPage === 0}
        >
          <span class="material-symbols-outlined">
arrow_back_ios
</span>
        </button>
        
        <button
          onClick={goToNextSlide}
          className="btn rounded-full  bg-gray-700 hover:bg-black text-white w-[35px] pt-[5px] btn-primary"
          disabled={currentPage === totalPages - 1}
        >
         <span class="material-symbols-outlined"> arrow
</span>
        </button>
      </div>
    </div>
    <div>
    <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-4 text-black max-w-[1050px]">
         Veg : Items
        </h1>
      </FadeIn>
    </div>
    <div>
        <Veg/>
    </div>
    <div>
    <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-4 text-black max-w-[1050px]">
         Fast Food : Items
        </h1>
      </FadeIn>
    </div>
    <div>
        <Fastslider/>
    </div>
    <div className='h-auto w-screen'>
    <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[80px] text-center text-5xl leading-tight xs:text-[45px] underline decoration-slate-400 mb-4 text-black max-w-[1050px]">
        
        </h1>
      </FadeIn>
     
    </div>

    
    </>
  );
};

export default Carousel;
