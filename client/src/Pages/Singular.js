import React, { useState,useEffect } from 'react';
import './Singular.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from '@mui/icons-material/Phone';
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineSell } from "react-icons/md";
import { GiIncomingRocket } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { MdOutlineDoubleArrow } from "react-icons/md";

function CustomTabPanel(props) {

 

  const { children, value, index, ...other } = props;

 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Singular = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery('(max-width: 600px)');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  useEffect(() => {
    AOS.init();

  }, []);

  const tableData2 = [
    { model: 'Cutting Capacity', unit: 'mm', value: '10 - 280' },
    { model: 'Bundle Cutting', unit: '', value: '' },
    { model: 'Max.', unit: 'mm', value: 'W250 x H100' },
    { model: 'Min.', unit: 'mm', value: 'W165 x H15' },
    { model: 'Saw Blade', unit: 'Size (mm)', value: '3,820 x 34 x 1.1' },
    { model: '', unit: 'Speed (m/min)', value: '16 - 85' },
    { model: '', unit: 'Tension', value: 'Hydraulic' },
    { model: 'Motors Output', unit: 'Saw Blade', value: '3.7 KW (5 HP)' },
    { model: '', unit: 'Hydraulic Pump', value: '0.75 KW (1 HP)' },
    { model: '', unit: 'Coolant Pump', value: '0.2 KW (1/4 HP)' },
    { model: 'Tanks', unit: 'Hydraulic', value: '60 L' },
    { model: '', unit: 'Coolant', value: '80 L' },
    { model: 'Feeding Length (Single/Multiple)', unit: 'mm', value: '400/9,999' },
    { model: 'Working Height', unit: 'mm', value: '700' },
    { model: 'W x L x H Dimensions', unit: 'mm', value: 'W2,100 x L1,990 x H1,300' },
    { model: 'Net Weight', unit: 'kg', value: '1,750' }
  ];

  const tableData3 = [
    { model: 'Cutting Capacity', unit: 'mm', value: '10 - 500' },
    { model: 'Bundle Cutting', unit: '', value: '' },
    { model: 'Max.', unit: 'mm', value: 'W480 x H260' },
    { model: 'Min.', unit: 'mm', value: 'W240 x H80' },
    { model: 'Saw Blade', unit: 'Size (mm)', value: '5,450 x 41 x 1.3' },
    { model: '', unit: 'Speed (m/min)', value: '16 - 85' },
    { model: '', unit: 'Tension', value: 'Hydraulic' },
    { model: 'Motors Output', unit: 'Saw Blade', value: '5.5 KW (7.5 HP)' },
    { model: '', unit: 'Hydraulic Pump', value: '1.5 KW (2 HP)' },
    { model: '', unit: 'Coolant Pump', value: '0.2 KW (1/4 HP)' },
    { model: 'Tanks', unit: 'Hydraulic', value: '85 L' },
    { model: '', unit: 'Coolant', value: '110 L' },
    { model: 'Feeding Length (Single/Multiple)', unit: 'mm', value: '500/9,999' },
    { model: 'Working Height', unit: 'mm', value: '750' },
    { model: 'W x L x H Dimensions', unit: 'mm', value: 'W2,630 x L2,260 x H1,820' },
    { model: 'Net Weight', unit: 'kg', value: '3,000' }
  ];

  const specifications = [
    { name: 'Cutting Capacity', unit: 'mm', value: '8 ~ 75' },
    { name: 'Cutting Capacity', unit: 'mm', value: '8 x 8 ~ 60 x 60' },
    { name: 'Bland Motor', unit: 'HP', value: '15' },
    { name: 'Hydraulic Pump Motor', unit: 'HP', value: '2' },
    { name: 'Bland Speed', unit: 'rpm', value: '30 ~150' },
    { name: 'Bland Size ( x kerf x Thickness)', unit: 'mm', value: '285 x 2.0t' },
    { name: 'Bland Feed', unit: '', value: 'Servo Motor and Ball Screw' },
    { name: 'Bar Feed', unit: '', value: 'Servo Motor and Ball Screw' },
    { name: 'Automatic Feed Length', unit: 'Single', value: '6 ~ 600' },
    { name: 'Automatic Feed Length', unit: 'Multiple', value: '6,000' },
    { name: 'Automatic Chip Conveyor', unit: '', value: 'Chain Type' },
    { name: 'Cooling', unit: '', value: 'Air Compressed Oil Mist' },
    { name: 'Machine Weight with Table', unit: 'kg', value: '2,300' },
    { name: 'Floor Space (Machine With Table)', unit: 'mm', value: 'W2,680 x L6,820' },
  ];

  const specifications1 = [
    { name: 'Model', s4: 'S4 Superb Carbide Band Saw', s5: 'S5 Superb Carbide Band Saw', s8: 'S8 Superb Carbide Band Saw' },
    { name: 'Cutting Capacity', s4: '460 mm', s5: '560 mm', s8: '860 mm' },
    { name: 'Cutting Capacity', s4: '460 x 460 mm', s5: '560 x 560 mm', s8: '860 x 860 mm' },
    { name: 'Speed', s4: '10 - 150 M/min', s5: '10 - 150 M/min', s8: '8 - 120 M/min' },
    { name: 'Saw Blade Size', s4: '7300 x 54 x 1.6 mm', s5: '7800 x 67 x 1.6 mm', s8: '9895 x 67 x 1.6 mm' },
    { name: 'Tension', s4: 'Hydraulic', s5: 'Hydraulic', s8: 'Hydraulic' },
    { name: 'Saw Blade', s4: '15 HP (11 kw)', s5: '20 HP (15 kw)', s8: '25 HP (18.5 kw)' },
    { name: 'Hydraulic', s4: '3HP (2.25 kw)', s5: '5HP(3.7kw)', s8: '5HP(3.7kw)' },
    { name: 'Coolant', s4: '1HP (0.75 kw)', s5: '1HP (0.75 kw)', s8: '1HP (0.75 kw)' },
    { name: 'Wire Brush', s4: '90 W', s5: '90 W', s8: '90 W' },
    { name: 'Pressure Washing', s4: '1.5 HP (1.125 kw)', s5: '1.5 HP (1.125 kw)', s8: '1.5 HP (1.125 kw)' },
    { name: 'Chip Conveyor', s4: '1/4 HP(0.187 kw)', s5: '1/4 HP(0.187 kw)', s8: '1/4 HP(0.187 kw)' },
    { name: 'Bar Feed', s4: '1.3 kw', s5: '1.3 kw', s8: '1.8 kw' },
    { name: 'Blade Feed', s4: '1.8 kw', s5: '2.0 kw', s8: '2.9 kw' },
    { name: 'Hydraulic', s4: '130 L (34gal)', s5: '130 L (34gal)', s8: '130 L (34gal)' },
    { name: 'Coolant', s4: '300 L (79gal)', s5: '300 L (79gal)', s8: '300 L (79gal)' },
    { name: 'Bed Height', s4: '720 mm (28.3")', s5: '720 mm (28.3")', s8: '720 mm (28.3")' },
    { name: 'Dimensions', s4: '3600 L x 2260 W x 2430 H mm (141.7" x 88.9" x 95.7")', s5: '3800 L x 2260 W x 2440 H mm (149.6" x 88.9" x 96")', s8: '4600 L x 2260 W x 3310 H mm (181.1" x 88.9" x 130.3")' },
    { name: 'Net Weight', s4: '7200 kg', s5: '9500 kg', s8: '12000 kg' },
  ];

  const standardEquipment = [
    "Variable blade speed controlled by high efficient inverter",
    "Servo controlled automatic feed system",
    "Laser cutting line alignment",
    "Work roller table system",
    "Work rollback device (stopper) to capture material length",
    "Work rollback device (stopper) to capture material width",
    "Contactless blade deviation monitor",
    "Hydraulic blade tension",
    "Blade breakage detector and shutoff",
    "Full computer numerical control",
    "Cutting database included 300 different materials",
    "Hydraulic clamp adjustable cutting insert",
    "Roller feed table",
    "High efficient pressure washer of band cleaning and chip removing",
    "Multiple design of anti- vibration structure",
    "Hydraulic spiral and track style chip conveyors",
    "Hydraulic anti- vibration roller guide",
    "Variable brush speed controlled by inverter",
    "Entire machine uses roller type linear guide",
    "Fore-and-aft shift capability for both front and rear vises",
    "Rotary control board with 10.4 inch human machine interface",
    "CE-certificated full-board cover",
    "High quality NORD Motor",
    "2 meter roller stand",
    "Tool box"
  ];

  const optionalEquipment = [
    "Powered roller stand",
    "Variable vise pressure"
  ];

  const electricalControlOptions = [
    "QR Code scan system",
    "Cutting data output",
    "Remote data interface connection",
    "Database connection",
    "Production automation connection"
  ];

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
      <div className="container-fluid bg-breadcrumb_singular">
      <div class="container text-center py-5" style={{maxWidth: "900px", }}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{
    marginTop: "170px"}}>
                    <li ><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong>Singular</strong></li>
                </ol>    
            </div>
      </div>

      <div className='res-maindiv '>
        
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:"30px"}} className="paragraph-container">
        <h2 style={{textAlign:"left",color:"#0f253B"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Singular</strong></h2>
        <a href="./img/singular.pdf" download="singularcatalog">
   <button className='btn btn-outline-primary btn-page-pulse'><CiSaveDown2/> Catalog Download</button>
   </a>
   
        <p data-aos="zoom-in" style={{textAlign:"justify"}}>Our commitment is to bring our customers the best and most economic sawing solutions. In addition to premier brands like WIKUS and TENRYU, we have partnered with a leading sawing machine manufacturer from Taiwan , SINGULAR Machinery. With Singulars sawing expertise and our close relation with Wikus and Tenryu, we bring to you custom and one stop sawing solutions for all industrial purposes. </p>
        </div>
        <Marquee style={{fontWeight:"bold" , color:"black"}}>
           With each machine we are giving complimentary 3nos WIKUS M42 bandsaw machine/2 nos TENRYU circular saw blade, Extended <span style={{color:"#87c6fa" ,marginLeft:'5px'}}> free AMC </span>.  
        </Marquee>
        <div className='chart-container resposnive_entri_singular_chart'>
          <div>
            <div className='bestselling'>
            <h2 style={{fontFamily:"Crimson Pro, serif"}}>SH-3028 NC</h2>
            <button className='btn btn-outline-primary'><MdOutlineSell/>Best Selling</button>
            </div>
           
            <img src="./img/SH-3028SA.jpg" alt="SV-1212" data-aos="zoom-in" className='resposnive_sigular_image'/>
          </div>
          
          <div>
          <table border="1" cellPadding="10" cellSpacing="0" className='table-class' data-aos="zoom-in-up">
            <thead>
              <tr>
                <th>Model</th>
                <th>Unit</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map((row, index) => (
                <tr key={index}>
                  <td>{row.model}</td>
                  <td>{row.unit}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
        
       
         
        <div className='chart-container resposnive_entri_singular_chart'>
            
            <div>
              <div className='bestselling'>
              <h2 style={{fontFamily:"Crimson Pro, serif"}}>SH-5650 NC</h2>
               <button className='btn btn-outline-primary'><MdOutlineSell/>Best Selling</button>
            </div>

              <img src="./img/5620.png" alt="SV-1212"  data-aos="zoom-in" className='resposnive_sigular_image'/>
           </div>
           
            <div>
              <table  border="1" cellPadding="10" cellSpacing="0" className='table-class' data-aos="zoom-in-up">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Unit</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData3.map((row, index) => (
                    <tr key={index}>
                      <td>{row.model}</td>
                      <td>{row.unit}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         
        </div>
        <Marquee style={{fontWeight:"bold" , color:"black"}}>
           With each machine we are giving complimentary 3nos WIKUS M42 bandsaw machine/2 nos TENRYU circular saw blade, Extended <span style={{color:"#87c6fa",marginLeft:'5px'}}> free AMC </span>.  
        </Marquee>
  

    </div>

    {/* <div class="container-fluid banner py-5 wow zoomIn" data-wow-delay="0.2s">
            <div class="banner-design-1"></div>
            <div class="banner-design-2"></div>
            <div class="container py-5">
              
                <div class="row g-5">
                    <div class="col-lg-7">
                        <div class="">
                            <h4 class="text-white">Contact Us</h4>
                            <h1 class="display-4 text-white mb-0">We Provide Professional  Sawing Solutions for our customer</h1>
                            <a class="btn btn-primary py-3 px-4 px-md-5 ms-2" href="/products">EXPLORE MORE</a>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="d-flex align-items-center justify-content-lg-end h-100">
                     <a class="btn btn-outline-primary py-3 px-4 px-md-5 ms-2" href="/contact"><PhoneIcon />CALL NOW</a>
                        </div>
                    </div>
                </div>
                
            </div>
         </div> */}

    <div  className='res-maindiv'>
       
    <div className='chart-container resposnive_entri_singular_chart'>
    
    <div>
    <div className='bestselling'>
      <h2 style={{fontFamily:"Crimson Pro, serif"}}>SC-75A</h2>
               <button className='btn btn-outline-primary'><MdOutlineSell/>Best Selling</button>
            </div>

            <img src="./img/s55.png" alt="SV-1212"  data-aos="zoom-in" className='resposnive_sigular_image' width={'420px'} />


    </div>
    <div>
    <h2 className="text-2xl font-bold mb-4">Specifications</h2>
      <table className="w-full border-collapse border border-gray-300" data-aos="zoom-in-up">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Model</th>
            <th className="border border-gray-300 p-2">Unit</th>
            <th className="border border-gray-300 p-2">SC-75A</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="border border-gray-300 p-2">{spec.name}</td>
              <td className="border border-gray-300 p-2">{spec.unit}</td>
              <td className="border border-gray-300 p-2">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    
    </div>
    <Marquee style={{fontWeight:"bold" , color:"black"}}>
           With each machine we are giving complimentary 3nos WIKUS M42 bandsaw machine/2 nos TENRYU circular saw blade, Extended <span style={{color:"#87c6fa",marginLeft:'5px'}}> free AMC </span>.  
        </Marquee>
        
    <div className="p-4">
    <div className='chart-container resposnive_entri_singular_chart'>
      {/* <div  style={{width:"900px"}}> 
      <h2 style={{color:"#0f253B"}}>Superb Carbide Band Saw s5</h2>
      
      <img src="./img/s55.png" alt="SV-1212" className='resposnive_sigular_image2' data-aos="zoom-in" />
      </div> */}
      <div>
      <div className='bestselling'>
      <h2 style={{fontFamily:"Crimson Pro, serif"}}>Superb Carbide Band Saw s5</h2>
              
            </div>
            <img src="./img/SC75A.png" alt="SV-1212"  data-aos="zoom-in" className='resposnive_sigular_image'/>
      
    </div>
      <div>
      
      <div className='bestselling'>
      <h2 className="text-2xl font-bold mb-4" style={{fontFamily:"Crimson Pro, serif"}}>Band Saw Features<br/>Specifications</h2>
     
               <button className='btn btn-outline-primary'><GiIncomingRocket/>HOT NEW PRODUCTS</button>
            </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300" data-aos="zoom-in-up">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Model</th>
              <th className="border border-gray-300 p-2">S4 Superb Carbide Band Saw</th>
              <th className="border border-gray-300 p-2">S5 Superb Carbide Band Saw</th>
              <th className="border border-gray-300 p-2">S8 Superb Carbide Band Saw</th>
            </tr>
          </thead>
          <tbody>
            {specifications1.map((spec, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border border-gray-300 p-2 font-medium">{spec.name}</td>
                <td className="border border-gray-300 p-2">{spec.s4}</td>
                <td className="border border-gray-300 p-2">{spec.s5}</td>
                <td className="border border-gray-300 p-2">{spec.s8}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
      <div className="mb-6">
      
      </div> 
    </div>


    {/* <div className="container-fluid about py-5">
      <div className="container py-5">
        <OurPartners/>
      </div>
   </div> */}

    </div>
    </>
  );
};

export default Singular;