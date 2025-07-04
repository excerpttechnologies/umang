// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
// import Service from '../Pages/Service';
// import './Splitcaros.css';

// const slides = [
//   {
//       title: "Discover Precision with Wikus - Germany",
//        subtitle: "BI-METAL BAND SAW BLADES",
//          description: "Offering high-performance cutting solutions with Wikus, a leader in precision band saw blades from Germany.",
//         backgroundImage: "./img/slidee2.jpg",
//         video: "./video/v11.mp4",
//       },
//     {
//         title: "Power Through Cutting with Tenryu - Japan",
//         subtitle: "TCT & HSS CIRCULAR CUTTERS",
//         description: "Experience superior cutting efficiency with Tenryu’s circular saw blades, the gold standard in high-speed cutting technology.",
//         backgroundImage: "./img/slidee2.jpg",
//         video: "./video/v22.mp4",
//        },
//       {
//         title: "Cutting-Edge Solutions with Solar Diamond Tools",
//         subtitle: "DIAMOND TOOLS",
//         description: "Enhance your cutting precision with Solar Diamond Tools, the trusted name in diamond-coated industrial solutions.",
//         backgroundImage: "./img/slidee2.jpg",
//         video: "./video/v11.mp4",
//       },
//       {
//          title: "Innovative Singular Cutting Tools",
//         subtitle: "SINGULAR TOOLS",
//         description: "Tailor your operations with our range of Singular Cutting Tools, crafted for durability and precision in various applications.",
//         backgroundImage: "./img/slidee2.jpg",
//         video: "./video/colles.mp4",
//        },
// ];

// const Splitcaros = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//     <div className="split-carousel">
//       <div className="content-side">
//         <div className="text-content">
//           {/* <h4>{slides[currentSlide].subtitle}</h4> */}
//           <h1>{slides[currentSlide].title}</h1>
         
//         </div>
//       </div>
//       <div className={`hero-shape-1 ${currentSlide % 2 === 0 ? 'active' : ''}`}></div>
//       <div className={`hero-shape-2 responive_hero_2 ${currentSlide % 2 !== 0 ? 'active' : ''}`}></div>
//       <div className="video-side">
        
//       {slides[currentSlide].video ? (
//           <video key={slides[currentSlide].video} autoPlay loop muted>
//             <source src={slides[currentSlide].video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             src={slides[currentSlide].image || slides[currentSlide].backgroundImage}
//             alt={slides[currentSlide].title}
//             className="slide-image"
//             style={{height:"100%",width:"100%",objectFit:"fill",marginLeft:"80px"}}
//           />
//         )}
//       </div>
      
//     </div>

//          <div className="after-slider-section responsive_slider_banner">
//          <div className="content-area" style={{ 
//            flex: 1,
//     marginLeft:'-300px',
//            zIndex: 1 // Ensure text is above the angled element
//          }}>
//            <h2 style={{ 
//              margin: 0,
//              fontSize: '24px',
//              fontWeight: 'bold',color:'white'
//            }}>
//             One Stop Shop! for all your Metal sawing and Industrial Requirements.
//            </h2>
//          </div>
//          <div className="contact-area" style={{ 
//            position: 'absolute',
//            right: '-10px', // Slight overflow to ensure no gap
//            top: 0,
//            bottom: 0,
//          width: '25%', // Approximately 25% of the container width
//           backgroundColor: '#87c6fa', // Yellow background
//            transform: 'skew(-10deg)', // Angle the element
//            display: 'flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            zIndex: 0 // Behind the text
//          }}>
//            <button 
//              style={{
//                backgroundColor: 'transparent',
//                border: 'none',
//                color: '#0d1b3e', // Dark text color
//                fontSize: '18px',
//                fontWeight: 'bold',
//                cursor: 'pointer',
//                transform: 'skew(10deg)', // Counter-skew to straighten text
//                display: 'flex',
//                alignItems: 'center',
//                gap: '10px'
//              }}
            
//            >
//               <FontAwesomeIcon icon={faTelegramPlane} style={{ fontSize: '24px', color: '#0d1b3e' }} />
//               <a href='/contact' style={{color:"white"}}>Contact Us</a>
//             {/* Right-pointing triangle */}
//            </button>
//         </div>
//        </div>


//     </>
//   );
// };

// export default Splitcaros;








// import React from "react";
// import Slider from "react-slick";
// import { TypeAnimation } from 'react-type-animation';
// import './Splitcaros.css';

// export default function Splitcaros() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   return (
//     <Slider {...settings}>
//       <div className="video_slide">
//         <video className="video_bg" autoPlay muted loop>
//           <source src="./video/v33.mp4" type="video/mp4" className="guru"/>
        
//           Your browser does not support the video tag.
//         </video>
// <TypeAnimation className="heading_h1"
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Power Through',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Power Through Cutting',
//         1000,
//         'Power Through Cutting with Tenryu',
//         1000,
//         'Power Through Cutting with Tenryu - Japan',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2.3em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//         <img src="./img/bv1.png" alt="" className="responive_carsouel_image"/>
//       </div>
//       <div className="video_slide_1">
//         <video className="video_bg" autoPlay muted loop>
//           <source src="./video/v22.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <TypeAnimation className="heading_h1"
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Discover Precision',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Discover Precision with',
//         1000,
//         'Discover Precision with Wikus',
//         1000,
//         'Discover Precision with Wikus - Germany',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2.3em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//         <img src="./img/bv1.png" alt="" className="responive_carsouel_image"/>
//       </div>
//       {/* <div className="video_slide">
//         <video className="video_bg" autoPlay muted loop>
//           <source src="./video/v33.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <TypeAnimation className="heading_h1"
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Cutting-Edge Solutions',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Cutting-Edge Solutions with',
//         1000,
//         'Cutting-Edge Solutions with Solar',
//         1000,
//         'Cutting-Edge Solutions with Solar Diamond Tools',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2.3em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//         <img src="./img/bv1.png" alt="" className="responive_carsouel_image"/>
//       </div> */}
//     </Slider>
//   );
// }


import React from "react";
import Slider from "react-slick";
import './Splitcaros.css';

export default function Splitcaros() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div className="video_slide">
        <video className="video_bg" autoPlay muted loop>
          <source src="./video/v33.mp4" type="video/mp4" className="guru"/>
          Your browser does not support the video tag.
        </video>
        <span className="heading_h1" style={{ fontSize: '2.3em', display: 'inline-block' }}>
          Power Through Cutting with Tenryu - Japan
        </span>
        <img src="./img/bv1.png" alt="" className="responive_carsouel_image"/>
      </div>
      <div className="video_slide_1">
        <video className="video_bg" autoPlay muted loop>
          <source src="./video/v22.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <span className="heading_h1" style={{ fontSize: '2.3em', display: 'inline-block' }}>
          Discover Precision with Wikus - Germany
        </span>
        <img src="./img/bv1.png" alt="" className="responive_carsouel_image"/>
      </div>
    </Slider>
  );
}
