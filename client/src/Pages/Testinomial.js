
import React, { useState, useEffect } from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import './Testinomial.css';

const testimonials = [
  {
    id: 1,
    name: 'Michael Davis CEO',
    text: '"The level of expertise and service provided by Umang Marketing is exceptional. Their Bimetal Band Saw Blades and TCT Cutters are of the highest quality, and the team goes above and beyond to ensure customer satisfaction.", Precision Tools Ltd.',
    image: 'img/pp1.png'
  },
  {
    id: 2,
    name: 'Michale William',
    text: 'We’ve been using Umang Marketing’s products for years, and they consistently deliver outstanding performance. Their dedication to quality and prompt service sets them apart from the competition. We highly recommend them.',
    image: 'img/pp1.png'
  },
  {
    id: 3,
    name: 'Dylan Adams',
    text: 'Umang Marketing’s tools have significantly improved our production capabilities. Their team is knowledgeable, responsive, and always available to provide support when needed. We couldn’t ask for a better partner in the industry.',
    image: 'img/pp1.png'
  },
  {
    id: 4,
    name: 'Michale William',
    text: 'We’ve been using Umang Marketing’s products for years, and they consistently deliver outstanding performance. Their dedication to quality and prompt service sets them apart from the competition. We highly recommend them.',
    image: 'img/pp1.png'
  },
  // Add more testimonials as needed
];

const limitedStyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2, // Limit to 2 lines
  overflow: 'hidden',  // Hide overflow text
  textOverflow: 'ellipsis', // Add ellipsis (...) at the end
  lineHeight: '1.5',  // Adjust line height as needed
  maxHeight: '3em',    // Adjust based on line-height (2 lines)
  color: '#0F253B',    // Set text color directly here
};

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* <div className="container-fluid bg-breadcrumb_othercutting">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h2 style={{color:"black"}}>Testinomial</h2>
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px"}}>
                     <li class=""><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                     <li class="breadcrumb-item active text-primary"><strong>Testinomial</strong></li>
                 </ol>    
            </div>
      </div> */}

    {/* <div className="testimonial-container ">
      <div className="container py-5" >
            <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                <h4 className='text-primary'style={{textAlign:"left"}}>Our Testimonial</h4>
                <h1 className="display-4 mb-4" style={{color: '#0F253B',textAlign:"left"}}>Our Clients Says!</h1>
                <p className="mb-0" style={{color: '#0F253B'}}>At Umang Marketing & Engineering Services, we pride ourselves on delivering cutting-edge industrial solutions and unmatched service. Our clients trust us to provide the tools and expertise that drive their success. Here’s what they have to say about working with us.</p>
            </div>

      <div className="testimonial-slider" style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))` }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`Profile of ${testimonial.name}`}
              className="testimonial-image"
            />
            <p className="testimonial-text">{testimonial.text}</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
      <div className="testimonial-background"></div>
      <div className="slider-controls">
        <button onClick={prevTestimonial}>&lt;</button>
        <button onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
    </div> */}

{/* <div className="testimonial-container ">
      <div className="container py-5" >
            <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" >
            <h4 className="display-4 mb-4 responive_our_channel_heading" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px",textAlign:"center"}}>Our Testimonial</h4>
                <h1 className="display-4 mb-4" style={{color: '#0F253B',textAlign:"center",fontFamily:"Crimson Pro"}}>Our Clients Says!</h1>
                <p className="mb-0" style={{color: '#0F253B'}}>At Umang Marketing & Engineering Services, we pride ourselves on delivering cutting-edge industrial solutions and unmatched service. Our clients trust us to provide the tools and expertise that drive their success. Here’s what they have to say about working with us.</p>
            </div>

      <div className="testimonial-slider" style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))` }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={`Profile of ${testimonial.name}`}
              className="testimonial-image"
            />
            <p className="testimonial-text">{testimonial.text}</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
      <div className="testimonial-background"></div>
      <div className="slider-controls">
        <button onClick={prevTestimonial} style={{margin:"5px",borderRadius:"50px"}}>&lt;</button>
        <button onClick={nextTestimonial} style={{margin:"5px",borderRadius:"50px"}}>&gt;</button>
      </div>
    </div>
    </div> */}

    </>
  );
};

export default TestimonialCard;