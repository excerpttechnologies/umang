import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Service.css';
import Inquiry from '../Components/Inquiry';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';

const serviceData = [
  {
    title: "Umang Engineering Services",
    path: "",
    image: "/img/circular-saw12.png",
    content: `_ An associate company of Umang Marketing, Umang Engineering Services offers Metal Cutting Facility. We have imported, fully automatic, world-class Everising Make - Band Saw Machines and Circular Saw machines.
    _We offer the metal cutting facility to various customers in the Automobile, Aerospace, Machine Tool, Forging Industries, etc.
    • Our Speciality in Metal Cutting is:
    • We ensure perfect cuts irrespective of diameters.
    • Minimize the wastage of material.
    • Materials cut on Circular saw ensure a lot of material saving - by avoiding any taper, cut to exact size, and can eliminate facing-off operation.
    • We have an experienced shop floor team.
    • We have ample storage and Overhead Crane facilities for material handling.`
  },
  {
    title: "Servicing of Band Saw & Circular Saw Machines",
    path: "servicingBandSaw",
    image: "/img/5620.png",
    content: `_Umang Engineering Services provides expert servicing of Band Saw and Circular Saw machines, catering to a wide range of industries including Mechanical, Electrical, Electronics, and Hydraulics.
    _Our comprehensive maintenance services ensure that your cutting machines operate at peak performance, minimizing downtime and extending their lifespan. Whether you're in the mechanical sector or dealing with sophisticated hydraulic systems, our services are designed to meet the rigorous demands of your industry, ensuring that your equipment runs smoothly and efficiently.`
  }
];

const Service = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const { servicePath } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on how many slides you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile view adjustments
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Smaller mobile view adjustments
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    const index = serviceData.findIndex(service => service.path === servicePath);
    if (index !== -1) {
      setActiveTab(index);
    } else {
      // If the servicePath is not found, redirect to /service
      navigate('/service', { replace: true });
    }
  }, [servicePath, navigate]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Use replace: true to prevent adding a new entry in the browser history and avoid page reload
    navigate(`/service${serviceData[index].path ? `/${serviceData[index].path}` : ''}`, { replace: true });
  };

  const renderContent = (content) => {
    if (!content) return null;
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim()) {
        return <li key={index}>{paragraph.trim().substring(1)}</li>;
      }
      return <p key={index}>{paragraph}</p>;
    });
  };

  return (
    <>
      <div className="container-fluid bg-breadcrumb_service">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Service</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active text-primary">Service</li>
          </ol>
        </div>
      </div>

      <div className='container-fluid about py-5'>
        <div className="service-container">
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4" style={{color:"#0f253B"}}>How We Work on Our Mechanical Projects with Our Services</h1>

          <div className="service-tabs">
            {serviceData.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="service-content">
            <div className="service-image-container">
              <img
                src={serviceData[activeTab].image}
                alt={serviceData[activeTab].title}
                className="service-image"
              />
            </div>
            <div className="service-text-content">
              <h3 className="service-content-title" style={{color:"#0f253B"}}>{serviceData[activeTab].title}</h3>
              <div className="service-description">
                {renderContent(serviceData[activeTab].content)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurPartners/>

      <Inquiry activeServiceTab={serviceData[activeTab].title} />
    </>
  );
}

export default Service;