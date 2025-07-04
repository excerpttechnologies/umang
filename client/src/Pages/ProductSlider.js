import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ProductSlider.css'; 
const ProductSlider = () => {
    const items = [
      {
        imgSrc: 'img/Wi1.jpg',
        title: 'Wikus',
        description: 'M42 bimetal saw blades for tough material cutting like metal. Superior hardness ensures long life and precise industrial performance .',
      },
        {
          imgSrc: 'img/ten.png', // Replace with your image paths
          title: 'Tenryu',
          description: 'Precision-engineered HSS and TCT blades for metal cutting, offering high durability,smooth cutting, and accuracy in industrial applications.',
        },
        {
          imgSrc: 'img/B3-s-.png',
          title: 'Solar',
          description: 'Advanced diamond-tipped tools for precise cutting and grinding.Ideal for hard materials, ensuring durability and accuracy.',
        },
        
        // Add more items as needed
        
        {
          imgSrc: 'img/B3-sin.png',
          title: 'Singular',
          description: 'We Specialize in the design of a wide range of sawing machines which meet strict parameters of erogonomics, enviromentalism, safety and low maintenance.',
        },
        {
          imgSrc: 'img/hard1.jpg',
          title: 'Hardcastel',
          description: 'Premium lubricants and coolants designed to optimize machinery performance,ensuring efficiency in industrial settings.',
        },
        {
          imgSrc: 'img/magi-HSS-2.png',
          title: 'Magicut',
          description: 'Engineered for precision cutting, the Magicut blades is a best offer durability and accuracy for both metal and wood applications.',
        },
        {
          imgSrc: 'img/caltex2.jpg',
          title: 'Caltex',
          description: 'High-strength cutting tools for industrial use.Known for durability,precision, and smooth cutting on various metal surfaces.',
        
        },
        {
          imgSrc: 'img/tool4.jpeg',
          title: 'V-Belt',
          description: 'Durable industrial V-Belts designed for high-performance transmission, providing efficiency and reduced slippage in machines.',
        }
        
       
      ];
    
  return (
    <div>
         <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav
      responsive={{
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1500: { items: 4 },
      }}
      autoplay
      autoplayTimeout={7000}
    >
      {items.map((item, index) => (
        <div className="item" key={index}>
          <div className="img-container">
            <img src={item.imgSrc} alt={item.title} />
          </div>
          <div className="testimonial-text">
            <p>{item.description}</p>
            <div className="testimonial-name">
              <h5 style={{color:"#87c6fa"}}>{item.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
    </div>
  )
}

export default ProductSlider