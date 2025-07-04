import React,{useEffect} from 'react'
// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faTachometerAlt, faLightbulb, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Wikus.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from '@mui/icons-material/Phone';
import { CiSaveDown2 } from "react-icons/ci";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdOutlineDoubleArrow } from "react-icons/md";

import { FaArrowCircleRight } from "react-icons/fa";
import OurPartners from '../Components/OurPartners';

const Wikus = () => {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  useEffect(() => {
    AOS.init();

  }, []);
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
    <div>
         <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth: "900px", }}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s" style={{marginTop:'170px'}}>
                    <li class=""><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    
                    <li class="breadcrumb-item active text-primary"><strong>Wikus</strong></li>
                </ol>    
            </div>
        </div>

<div className="paragraph-container">
  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
  <h2 style={{textAlign:"left",color:"#0f253B",fontFamily:"Crimson Pro, serif"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Wikus - Germany Bimetal Band Saw Blades</strong></h2>
  <a href="./img/WikusCatalog.pdf" download="wikuscatalog">
  <button className='btn btn-outline-primary btn-page-pulse' ><CiSaveDown2/>  Catalog Download</button>
  </a>
    </div>
  
  <p data-aos="fade-right">
    <strong>Umang Marketing</strong> is the authorized distributor for Wikus - Germany Bimetal Band Saw Blades, offering a perfect product portfolio for standard and special applications.
    Wikus, a German manufacturer, is known for producing advanced band saw blades with superior cutting performance and durability. 
  </p>
  <h2 style={{textAlign:"left",color:"#0f253B",fontFamily:"Crimson Pro, serif"}}><strong style={{fontFamily:"Crimson Pro, serif"}}>Bimetal Band Saw Blades</strong></h2>
  <div className="image-content">
  <div className="image-container">
  <img src="./img/bimetal.png" alt="Blade Selector" className="blade-image" data-aos="flip-left"/>
  </div>

  <div className="blade-list">
   
  <Box sx={{ width: '100%' }} data-aos="fade-up-left">
  {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs 
      value={value} 
      onChange={handleChange} 
      aria-label="basic tabs example"
      TabIndicatorProps={{
        style: { backgroundColor: 'orange' } // Optional: You can keep the orange indicator too
      }}
    >
      <Tab 
        label="DUROSET" 
        {...a11yProps(0)} 
        sx={{ 
          backgroundColor: value === 0 ? 'orange' : 'transparent',
          color: value === 0 ? 'white' : 'inherit',
          borderRadius:"7px"
        }} 
      />
      <Tab 
        label="FUTURA" 
        {...a11yProps(1)} 
        sx={{ 
          backgroundColor: value === 1 ? 'orange' : 'transparent',
          color: value === 1 ? 'white' : 'inherit',
          borderRadius:"7px"
        }} 
      />
      <Tab 
        label="PROFIDUR" 
        {...a11yProps(2)} 
        sx={{ 
          backgroundColor: value === 2 ? 'orange' : 'transparent',
          color: value === 2 ? 'white' : 'inherit',
          borderRadius:"7px"
        }} 
      />
      <Tab 
        label="TAURUS" 
        {...a11yProps(3)} 
        sx={{ 
          backgroundColor: value === 3 ? 'orange' : 'transparent',
          color: value === 3 ? 'white' : 'inherit',
        }} 
      />
    </Tabs>
  </Box>

  <CustomTabPanel value={value} index={0}>
    <p>
      <strong className='btn btn-outline-primary' style={{ borderRadius: "7px" }} data-aos="zoom-in">DUROSET® / DUROSET® PREMIUM</strong><br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Purpose: High-performance blades designed for tough cutting applications.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Use Cases: Ideal for cutting hard metals and materials that demand durability.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Features: Superior wear resistance and long blade life.
    </p>
  </CustomTabPanel>
  
  <CustomTabPanel value={value} index={1}>
    <p>
      <strong className='btn btn-outline-primary' style={{ borderRadius: "7px" }} data-aos="zoom-in">FUTURA® / FUTURA® PREMIUM</strong><br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Purpose: Engineered for fast and efficient cutting.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Use Cases: Designed for cutting various alloys and metals.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Features: Optimized tooth geometry for precision and faster cutting rates.
    </p>
  </CustomTabPanel>

  <CustomTabPanel value={value} index={2}>
    <p>
      <strong className='btn btn-outline-primary' style={{ borderRadius: "7px" }} data-aos="zoom-in">PROFIDUR®</strong><br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Purpose: Suitable for cutting difficult-to-machine materials.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Use Cases: Suitable for cutting difficult-to-machine materials.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Features: Exceptional performance with extended tool life.
    </p>
  </CustomTabPanel>

  <CustomTabPanel value={value} index={3}>
    <p>
      <strong className='btn btn-outline-primary' style={{ borderRadius: "7px" }} data-aos="zoom-in">TAURUS® / TAURUS® PREMIUM</strong><br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Purpose: Heavy-duty cutting in large-scale industrial applications.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Use Cases: Often used in production lines that handle thick metals.<br/>
      <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} />Features: Robust design to handle high-tension cutting.
    </p>
  </CustomTabPanel> */}
<div style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
{/* <p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">SELEKTA®GS M42 /SELEKTA®GS PREMIUM M42 </strong><br/></p> */}
{/* <div className="image-container">
<img src="./img/b1.png" alt="Blade Selector" className="blade-image" data-aos="flip-left"/></div>
<p style={{color:"black"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Application:High Cutting Rate with Small  and Large  Solid Material</p>
<p style={{color:"black"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Feature:M42 cutting edge with Extra Positive rake Angle</p>
 */}

<p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">SELEKTA®GS M42 /SELEKTA®GS PREMIUM M42</strong><br/></p>
<img src="./img/b1.png" alt="Blade Selector" className="blade-image" data-aos="flip-left"/>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Application : High Cutting Rate with Small  and Large  Solid Material</h6>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Feature : M42 cutting edge with Extra Positive rake Angle</h6>


<p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">BASIC® M42</strong><br/></p>
<img src="./img/b2.png" alt="Blade Selector" className="blade-image" data-aos="flip-left"/>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Application : Economical Blade for the Price  Sensitive Segment</h6>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Feature : Constant and variable Tooth Pitch  with Standard setting</h6>

<p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">SELEKTA®GS x3000®</strong><br/></p>
<img src="./img/b3.png" alt="Blade Selector" className="blade-image" data-aos="flip-left"/>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Application : Duplex and heat-resistant steels</h6>
<h6 style={{color:"black",fontFamily:"Montserrat, Helvetica, Arial, sans-serif"}}><FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px",fontFamily:"Crimson Pro, serif"}}/>Feature : High cutting edge stability and high wear resistance</h6>

</div>

</Box>


    </div>
    
  </div>

  <div className="chart-container">
      <h2 style={{textAlign:"left",color:"#0f253B",fontFamily:"Crimson Pro, serif"}}>TPI SELECTION CHART</h2>

      {/* SOLIDS (FOR SMALLER SIZE PARTS) */}
      <table data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <thead>
          <tr className="section-heading">
            <th colSpan="7">SOLIDS (FOR SMALLER SIZE PARTS)</th>
          </tr>
          <tr>
            <th>Contact length (mm)</th>
            <th>&lt;20</th>
            <th>10-30</th>
            <th>20-50</th>
            <th>30-60</th>
            <th>50-90</th>
            <th>90-150</th>
            <th>150-300</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TPI</td>
            <td>10-14</td>
            <td>8-12</td>
            <td>6-10</td>
            <td>5-8</td>
            <td>4-6</td>
            <td>3-4</td>
            <td>2-3</td>
          </tr>
        </tbody>
      </table>

      {/* SOLIDS (FOR BIGGER SIZE PARTS) */}
      <table data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <thead>
          <tr className="section-heading">
            <th colSpan="6">SOLIDS (FOR BIGGER SIZE PARTS)</th>
          </tr>
          <tr>
            <th>Contact length (mm)</th>
            <th>300-500</th>
            <th>400-700</th>
            <th>500-1000</th>
            <th>700-1200</th>
            <th>950-3000</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TPI</td>
            <td>1.4-2</td>
            <td>1.2-1.6</td>
            <td>1.0-1.4</td>
            <td>0.75-1.25</td>
            <td>0.7-1.0</td>
          </tr>
        </tbody>
      </table>

      {/* PROFILES / SECTIONS */}
      <table data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <thead>
          <tr className="section-heading">
            <th colSpan="7">PROFILES / SECTIONS</th>
          </tr>
          <tr>
            <th>Contact length (mm)</th>
            <th>&lt;20</th>
            <th>10-40</th>
            <th>40-70</th>
            <th>50-90</th>
            <th>90-160</th>
            <th>160-310</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TPI</td>
            <td>12-16</td>
            <td>8-11</td>
            <td>5-7</td>
            <td>4-6</td>
            <td>3-4</td>
            <td>2-3</td>
          </tr>
        </tbody>
      </table>
    </div>

  <div className="image-content">
    <div className="image-container">

      <h2 ><strong style={{fontFamily:"Crimson Pro, serif"}}>Carbide Tipped Band And Saw Blades</strong></h2>
      <img src="./img/Carbide1.png" alt="Carbide Tipped Band And Saw Blades" className="blade-image" data-aos="flip-right"/>
      <p data-aos="zoom-in" ><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}}>FUTURA® 718</strong><br/>
      <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Application : Case-Hardening, Tempering and tools steels<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Use Cases : Very smooth and quite running, low cutting forces and straight cuts.<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Feature : Optimized chip Division.
      </p>
    </div>

    <div className="blade-details">
      <p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">TAURUS® / TAURUS® PREMIUM</strong><br/>
      <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Application : All steels and non-ferrous metals<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Use Cases : Low post-processing due to good cut surface quality.<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Feature : Innovative Tooth  geometry.
      </p>

      <p><strong className='btn btn-outline-primary' style={{borderRadius:"7px"}} data-aos="zoom-in">FUTURA® VA / FUTURA® PREMIUM VA</strong><br/>
      <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Application : Engineered for cutting stainless steel and other tough-to-cut metals.<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Use Cases : Suitable for precision cuts in aerospace and food processing industries.<br/>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/>Feature : Exceptional heat resistance and durability.
      </p>

     
    </div>
  </div>
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

<div className="why-wikus-section">
  <h2 style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}}>Why Wikus</h2>
  <p style={{textAlign:"left"}}>Wikus supports you in several ways to successfully face the increasing competitive pressure across all Industries and to optimize your individual sawing processes.</p>
      <div className="why-wikus-card" data-aos="fade-up"
     data-aos-duration="7000">
        <FontAwesomeIcon icon={faMoneyBillWave} size="3x" style={{color:"#87c6fa"}}/>
        <h3>Cost reduction</h3>
        <p>Our solutions for permanently reducing your production costs are as diverse as your needs.</p>
      </div>
      
      <div className="why-wikus-card" data-aos="fade-up"
     data-aos-duration="4000">
        <FontAwesomeIcon icon={faTachometerAlt} size="3x" style={{color:"#87c6fa"}}/>
        <h3>Productivity increase</h3>
        <p>Manufacturing companies face special challenges with respect to speed and flexibility when producing your products.</p>
      </div>
      
      <div className="why-wikus-card" data-aos="fade-up"
     data-aos-duration="5000">
        <FontAwesomeIcon icon={faLightbulb} size="3x" style={{color:"#87c6fa"}}/>
        <h3>Innovative solutions</h3>
        <p>The WIKUS research and development department works continuously on developing and improving our products.</p>
      </div>
      
      <div className="why-wikus-card" data-aos="fade-up"
     data-aos-duration="6000">
        <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{color:"#87c6fa"}}/>
        <h3>Quality</h3>
        <p>Process security thanks to consistent ‘Made in Germany’ quality.</p>
      </div>
    </div>

    {/* <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
    </div>
  )
}

export default Wikus


