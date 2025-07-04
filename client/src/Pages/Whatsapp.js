import React from 'react';
import { GiVibratingSmartphone } from "react-icons/gi";
import './Whatsapp.css';

const Whatsapp = () => {
  return (
    <div>
      {/* WhatsApp icon for desktop view */}
      <a href="https://wa.me/+919606645009" className="btn-whatsapp-pulse" target='_blank' rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Phone call icon for mobile view */}
      <a href="tel:+919606645009" className="btn-phone-call">
        <i className="fas fa-phone-alt"></i>
      </a>
    </div>
  );
}

export default Whatsapp;
