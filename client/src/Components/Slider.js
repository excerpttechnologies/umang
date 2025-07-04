// import React, { useState, useEffect } from 'react';
// import './Slider.css';

// // Define the slides with image and corresponding text
// const slides = [
//   { img: "./img/tool1.jpeg", text: 'Premium Tools And Machines' },
//   { img: "./img/tool2r.png", text: 'Expert Servicing' },
//   { img: "./img/tool3.jpeg", text: 'Cutting-Edge Solutions' },
//   { img: "./img/tool4.jpeg", text: 'Cutting-Edge Solutions' },
//   // Add more slides as needed
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider-text">
//         {slides[currentIndex].text}
//       </div>
//       <div className="slider-image-wrapper">
//         <div
//           className="slider-content"
//           style={{ transform: `translateX(-${currentIndex * 100}%) `}}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="slider-slide">
//               <img
//                 src={slide.img}
//                 alt={`Slide ${index}`}
//                 className="slider-image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="prev-button" onClick={prevSlide}>❮</button>
//       <button className="next-button" onClick={nextSlide}>❯</button>
//       <div className="blade-container">
//         <img src="./img/cblade.png" alt="Rotating Blade" className="rotating-blade" />
//       </div>
//     </div>
//   );
// }

// export default Slider;


//------ new GIF slider


import React, { useState, useEffect } from 'react';
import v1 from './video/v1.mp4'; // Import video directly if needed
import v2 from './video/v2.mp4';
import './Slider.css';

// Define the slides with images, videos, GIFs, and corresponding text
const slides = [
  { type: "image", src: "./img/tool1.jpeg", text: 'Premium Tools And Machines' },
  { type: "video", src: v1, text: 'Expert Servicing' },
  { type: "video", src: v2, text: 'Cutting-Edge Solutions' },
  { type: "image", src: "./img/tool4.jpeg", text: 'Innovative Technologies' },
];


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-text">
        {slides[currentIndex].text}
      </div>
      <div className="slider-image-wrapper">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              {slide.type === "image" && (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="slider-image"
                />
              )}
              {slide.type === "video" && (
                <video className="slider-video" autoPlay loop muted>
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {slide.type === "gif" && (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="slider-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="prev-button" onClick={prevSlide}>❮</button>
      <button className="next-button" onClick={nextSlide}>❯</button>
      <div className="blade-container">
        <img src="./img/cblade.png" alt="Rotating Blade" className="rotating-blade" />
      </div>
    </div>
  );
};

export default Slider;
