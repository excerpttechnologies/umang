
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Hardcastel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

const hardcastelData =  [
  {
    title: "1. Industrial Lubricants",
    image: "./img/hard1.jpg",
    items: [
      { title: "Hydraulic Oils", description: " Antiwear, HLP type and Super Clean hydraulic oils ranging from VG 32 to VG 150 grade" },
      { title: "Gear Oils", description: " High performance Gear oil ranging from 46 to 460 cst" },
      { title: "Spindle Oils", description: " Spindle oils especially suitable in machine tool industry for hydrodynamic spindle bearings in area of grinding spindles on finish grinding machines and on roller bearings in textile machinery." },
      { title: "Way Lubricants", description: " Slideway Oils designed to provide optimum wear protection under continuous load available in VG46 to VG320 Grade." },
      { title: "Heat Transfer Oils", description: " Mineral Oil as well as synthetic based Thermic Fluids." },
    ]
  },
  {
    title: "2. Die-Casting Lubricants",
    image: "./img/productimageS192-2.png",
    items: [
      { title: "Dieface Lubricants", description: " High performance water soluble and solvent based diecasting release agents for aluminium, zinc and magnesium castings." },
      { title: "Plunger Lubricants", description: " Graphited and nongraphited liquid plunger lubricants for drip feed lubrication, sprayable or swabbing application in diecasting machines." },
      { title: "Piston Lubricants", description: " Solid piston lubricants with excellent anti wear properties combined with very low consumption." }
    ]
  },
  {
    title: "3. Hot Forging Lubricants",
    image: "./img/productimageS192-3.png",
    items: [
      { title: "Water Dilutable Forging Lubricants", description: " Spray Type water dilutable graphite based forging lubricants, for simple and critical forging applications for increased die life." },
      { title: "Oil Based Forging Lubricants", description: " Oil and graphite based forging lubricants for better die life and more precise forgings with reduced smoke generation." },
      { title: "Graphite Free Synthetic Lubricant", description: " Oil and graphite free synthetic forging lubricants for relatively simple forgings and warm forging applications." }
    ]
  },
  {
    title: "4. Cutting Coolants",
    image: "./img/productimageS192-4.png",
    items: [
      { title: "Neat Cutting Oils", description: " For general machining as well as arduous machining processes such as hobbing, broaching, cold heading, thread rolling, honing, grinding, etc for Ferrous, non-ferrous materials, carbide cutting tools, etc." },
      { title: "Soluble Cutting Oils", description: " Hardwater stable soluble cutting oils for ferrous and non-ferrous machining operations." },
      { title: "Semi-synthetic Cutting Oils", description: " Semi-synthetic ecofriendly and operator friendly cutting oils for long sump life and increased tool life." },
      { title: "Synthetic Cutting Oils", description: " For grinding and general machining operations, ecofriendly and operator friendly. Special grinding fluids for Carbide tips and tools, glass grinding, etc." },
      { title: "Lapping Compounds", description: " Water washable Lapping compounds with thixotropic properties for lapping of gears, pinions other parts for achieving excellent finish." }
    ]
  },
  {
    title: "5. Rolling & Coating Oils",
    image: "./img/productimageS192-5.png",
    items: [
      { title: "Rolling Oil", description: " Synthetic and natural ester based rolling oils for cold rolling of steel sheets which are used as water based emulsions in reversing and tandem mills." },
      { title: "Pickling Oil", description: " Rust Preventive Oil for application after pickling with HCL / H2SO4 having very good acid fume resistant characteristics." },
      { title: "Coating Oil", description: " Rust preventive Oils for application in skin pass mill for final coating." }
    ]
  },
  {
    title: "6. Fluid Power Products",
    image: "./img/productimageS192-6.png",
    items: [
      { title: "Oil in Water Emulsion", description: " DGMS approved HFA type fluids for critical applications such as roof - support system in underground mines." },
      { title: "Water in Oil Emulsion", description: " DGMS approved invert emulsion type fluids for applications such as SDLs / LHDs used in underground mines." },
      { title: "Water Glycol Fluids", description: " High performance HFC type fluids designed to provide maximum fire resistance and optimum performance in die casting units, steel plants, foundries, mines, offshore applications, power etc." },
      { title: "Anhydrous Synthetic Fluid", description: " HFDU and HFDR type Anhydrous Esters designed to work at high operating pressures in aluminum, steel, glass works etc." }
    ]
  },
  {
    title: "7. Heat Treatment Products",
    image: "./img/productimageS192-7.png",
    items: [
      { title: "Quenching & Tempering Oils", description: " Martempering Oils for distortion control/prone components & long Service Life. Quenching oils for Bright Finish. Tempering Oil for hardened parts. Specialty Quenching Oils for customized needs. Water Washable quenching oils. Normal speed, Medium speed, Medium Fast & Fast speed Quenching oils." },
      { title: "Aqueous Quenchants", description: " Polymer quenchants for Induction & tank Quenching. Advance Polymer quenchants for oil-like quenching." },
      { title: "Salts", description: " Neutral Hardening, Austempering & Marquenching salts. Carburizing Salts. Blueing & Blackening Salts." },
      { title: "Carburizing Fluids", description: " For Best Carburizing Results." },
      { title: "Blackening Oils", description: " Tempering oil for Black corrosion protection polished surfaces." }
    ]
  },
  {
    title: "8. Drawing Compounds",
    image: "./img/productimageS192-8.png",
    items: [
      { title: "Wire Drawing", description: " Water Dilutable for Copper & Steel wire drawing." },
      { title: "Deep Drawing Oils", description: " Neat & Water Dilutable for Metal Forming & Deep Drawing of Sheet Metal components." },
      { title: "Sheet Metal Forming Oils", description: " Neat & Water Dilutable for Stamping, Punching of Sheet Metal components." },
      { title: "Fin Stamping Oils", description: " Solvent Based Fin stamping oil for punching, stamping, perforating of metal sheets for air conditioning & engine cooling systems." }
    ]
  },
  {
    title: "9. Rust Preventives",
    image: "./img/productimageS192-9.png",
    items: [
      { title: "Oil based", description: " Oil based Rust preventives for in-process as well as final packing applications." },
      { title: "Water extendable", description: " Water extendable offer the flexibility to choose optimum concentration to achieve desired protection." },
      { title: "Solvent based", description: " Solvent based Rust Preventives for in-process as well as for end of the line applications." }
    ]
  },
  {
    title: "10. Cleaners",
    image: "./img/productimageS192-10.png",
    items: [
      { title: "Spray Cleaners", description: " Dip & Spray Cleaners for Ferrous & Non-Ferrous metal parts." },
      { title: "High Pressure Spray Cleaners", description: " High Pressure Cleaners for Critical applications." },
      { title: "Solvent Cleaners", description: " Degreasing Cleaners for Critical applications." },
      { title: "Ultrasonic Cleaners", description: " Water Dilutable for Ferrous & Non-Ferrous Applications." },
      { title: "Immersion Cleaners", description: " Cleaners for Dip type applications." },
      
    ]
  }
] ;

const Hardcastel = () => {
 
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    

    const renderItems = (items) => {
      if (!items) return null;
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
             <b>{item.title} :</b>{item.description}
            </li>
          ))}
        </ul>
      );
    };
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
  
    return (
      <>
        <div className="container-fluid bg-breadcrumb_service">
        <div class="container text-center py-5" style={{maxWidth: "900px", }}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
    marginTop: "300px"}}>
                    <li ><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong>Hardcastel</strong></li>
                </ol>    
            </div>
        </div>
        <div className="paragraph-container">
  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
  <h2 style={{textAlign:"left",color:"#0f253B"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Hardcastel</strong></h2>
  {/* <a href="" >
  <button className='btn btn-outline-primary btn-page-pulse' ><CiSaveDown2/>  Catalog Download</button>
  </a> */}
    </div>
    </div>

        <div className='container-fluid about'>
          <div className="service-container">
            <h4 className="text-primary">Our Products</h4>
            <h1 className="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}} >Explore Our Hardcastel Lubricants & Solutions</h1>
  
            <div className="service-tabs">
              {hardcastelData.map((product, index) => (
                <button
                  key={index}
                  className={`service-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {product.title}
                </button>
              ))}
            </div>
  
            <div className="service-content">
              <div className="service-image-container">
                <img
                  src={hardcastelData[activeTab].image}
                  alt={hardcastelData[activeTab].title}
                  className="service-image"
                  // style={{width:'500px',height:'300px'}}
                />
              </div>
              <div className="service-text-content">
                <h3 className="service-content-title" ><b style={{fontFamily:"Crimson Pro, serif"}}>{hardcastelData[activeTab].title}</b></h3>
                <div className="service-description responive_karthik_description" >
                  {renderItems(hardcastelData[activeTab].items)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
        
  </>
  );
};

export default Hardcastel;