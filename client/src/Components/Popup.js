import React, { useEffect } from 'react';
import './Popup.css';
import { motion } from 'framer-motion';
import { CgCloseO } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { TypeAnimation } from 'react-type-animation';
import { IoLocationSharp } from "react-icons/io5";

const Popup = ({ onClose }) => {
  useEffect(() => {
    // Disable scrolling when the popup is open
    document.body.style.overflow = 'hidden';

    // Clean up and enable scrolling when the popup is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="popup-overlay">
      <motion.div
        className="popup"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         <div className='new_container'>
              <h3 className='popheading'></h3>
              <CgCloseO style={{ color: "red", fontSize: "40px" }} onClick={onClose} className='close-icon'/>
            </div>
        <div className='popupcontainer'>
          <div className=''>
        
            <img src="img/12345678.png" className='popupimage ' data-aos="zoom-in" />
         
          </div>
          <div className='popupcontent'>
           

            {/* <TypeAnimation className='popheading'
              sequence={[
                'Umang',
                1000,
                'Umang Marketing',
                1000,
                'Umang Marketing &',
                1000,
                'Umang Engineering Service',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.8em', display: 'inline-block', color: "black" }}
              repeat={Infinity}
            /> */}
            <h1 className='popheading'>Umang Marketing & Engineering Service</h1>
            <p className='popupparagraph karthik12-fade-up' style={{ fontWeight: "bold" }}>...An Engineering Enterprise In Business Association with Multi Segments of Engineering Industries <br/>Since 1993...</p>
           
          
            <p className='karthik12-fade-left-bottom 'style={{fontWeight:"bold"}}>An ISO 9001: 2015 Certified Company</p>
            <p className='karthik12-fade-left-bottom ' style={{fontWeight:"bold"}}><IoLocationSharp />  Bangalore</p>
          </div>
        </div>
       
          
      </motion.div>
    </div>
  );
};

export default Popup;
