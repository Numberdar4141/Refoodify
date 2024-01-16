import React, { useState,useEffect,useRef } from 'react';
import image1 from '../assets/v1.jpg'
import image2 from '../assets/v2.jpg'
import image3 from '../assets/v3.jpg'
import image4 from '../assets/v4.jpg'
import image5 from '../assets/v5.jpg'
import image6 from '../assets/v6.jpg'
import image7 from '../assets/v7.jpg'
import image8 from '../assets/v8.jpg'
import image9 from '../assets/v9.jpg'
import image10 from '../assets/v10.jpg'
import image11 from '../assets/v11.jpg'
import image12 from '../assets/v12.jpg'
import image13 from '../assets/v13.jpg'
import image14 from '../assets/v14.jpg'
import image15 from '../assets/v15.jpg'



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

        setIsVisible(elementTop < windowHeight /1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef}
    className={`${
      isVisible ? 'flex   flex-col items-center mt-8  animate__animated animate__fadeInLeftBig' : 'opacity-0'
    } transition flex  duration-1000 ease-in-out`}>
     
      <div className="flex">
        
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
star_rate
</span>  
<span class="material-symbols-outlined  text-yellow-500 "   >
star_rate
</span>  
<span class="material-symbols-outlined  text-yellow-500 "   >
star_rate
</span>  
<span class="material-symbols-outlined text-yellow-500">
star_half
</span>  
                </span>
                
              </div>
             
            </div>
          </div>
        ))}
      </div>
      
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
                    <span class="material-symbols-outlined">
arrow_forward_ios
</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
