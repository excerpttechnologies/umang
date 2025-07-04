import React,{useEffect} from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";
import OurPartners from '../Components/OurPartners';
import { GiBladeFall } from "react-icons/gi";
import { GiCircularSawblade } from "react-icons/gi";
import { GiPizzaCutter } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import NearMeIcon from '@mui/icons-material/NearMe';
import { GoDotFill } from "react-icons/go";
import SecurityIcon from '@mui/icons-material/Security';
import { GiSteelClaws } from "react-icons/gi";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import GavelIcon from '@mui/icons-material/Gavel';
import FactoryIcon from '@mui/icons-material/Factory';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
      
      useEffect(() => {
        AOS.init();
    
      }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 7000,
        slidesToShow: 4, // Adjust based on how many slides you want to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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
      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center bg-primary">
                        <div class="input-group w-75 mx-auto d-flex">
                            <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                            <span id="search-icon-1" class="btn bg-light border nput-group-text p-3"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="container-fluid bg-breadcrumb_about">
            <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li style={{color:"white"}}><a href="/" style={{textDecoration:'none'}}><strong style={{color:"white",textDecoration:'none'}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                   
                    <li class="breadcrumb-item active text-primary"><strong style={{color:"white"}}>About</strong></li>
                </ol>   
            </div>
        </div>
      
        <div class="container-fluid about py-5 resposnive_home_about" style={{marginBottom:"-30px"}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        {/* <div class="h-100">
                            <h4 class="text-primary btn btn-outline-primary" style={{borderRadius:"7px"}}>About Us</h4>
                            <h1 class="display-4 mb-4" style={{color:"#0f253B"}}>Umang Marketing & Engineering Services: A Journey of Growth and Vision</h1>
                            
                            <p class="mb-4" style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong>Umang Marketing</strong> is an Engineering Enterprise, established in the year 1993, is a premier partner of  <span style={{color:"#87c6fa",fontWeight:"bold"}}>Wikus Germany, Tenryu Japan and Singular Machinery Taiwan, Hardacstel Petrofer coolants in machine sawing solutions.
                            With a passion for precision and efficiency,</span> we specialize in delivering cutting-edge technology for all your sawing needs.
Backed by a team of experts and engineers, <span style={{color:"#87c6fa",fontWeight:"bold"}}>we are committed to providing top-notch products and services,</span> ensuring your success in every cut.
Along with metal sawing solutions we also channel partners of Solar Diamond Tools for diamond tool applications.</p>



<strong style={{color:'black', fontSize:'20px'}}>Our Expertise and Commitment</strong>

<p style={{textAlign:'justify'}} data-aos="zoom-out-left">We pride ourselves on our team of qualified professionals, engineers, executives, and experienced staff who are committed to meeting the diverse needs of our valued customers. As exclusive channel partners in Bangalore, we represent some of the world's most renowned brands in the engineering sector.</p>
                        
                            <a class="btn btn-outline-primary py-3 px-4 px-md-5 ms-2" href="/contact">Contact us</a>
                        </div> */}
                         
                         <div >
                            <h4 class="display-4 mb-4" style={{color:"#0f253B",fontSize:"24px",fontFamily:"Crimson Pro,serif"}}>Umang Marketing & Engineering Services: A Journey of Growth and Vision</h4>
                            
                            {/* <p class="mb-4" style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong style={{color:"#0F253B"}}><NearMeIcon style={{color:"#67dd27"}}/> Founding Vision and Initial Steps : </strong><br/> Founded in 1993 by Mr. Ravindran Pazhayakalathil with a mission to deliver quality engineering products to Nation wide markets, Umang Marketing & Engineering Services began its journey with a focus on serving local businesses with essential, high-performance cutting and machining tools. With a commitment to quality, reliability, and affordability, <b style={{color:"#000"}}>the company quickly established a reputation in the engineering sector.</b></p>
                            <p class="mb-4" style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong><NearMeIcon style={{color:"#67dd27"}}/> Growth and Milestones : </strong><br/> Over the years, Umang Marketing & Engineering Services expanded its product range to include band saw blades, circular blades, and metal sawing. By forging <b style={{color:"#000"}}>strategic partnerships with prominent global engineering brands,</b> the company could scale its B2B operations, securing a unique position as a preferred distributor. This expansion enabled the company to offer an extensive product catalog, differentiating it from other local competitors and allowing customers access to premium products.
                            </p>
                            <p style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong><NearMeIcon style={{color:"#67dd27"}}/> Present Position and Offerings : </strong><br/> Today, Umang Marketing & Engineering Services is well-known for its comprehensive catalog. The company stands out for <b style={{color:"#000"}}>exceptional machine services , profound technical knowledge on machine cutting </b>its wide product selection, with a <b style={{color:"#000"}}>range of  specialized</b>
                            <b style={{color:"#000"}}>blades catering to diverse industrial needs.</b> Its ability to meet custom orders and provide tailored solutions positions the company as a <b style={{color:"#000"}}>go-to partner for engineering businesses</b> seeking high-quality, adaptable solutions.
                            </p>

                            <p class="mb-4 mee_responive"  style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong><NearMeIcon style={{color:"#67dd27"}}/> Future Vision and Growth Plans : </strong><br/> Looking ahead, Umang Marketing & Engineering Services aims to <b style={{color:"#000"}}>deepen its partnerships and broaden its product offerings</b> to include advanced tooling solutions and sustainable manufacturing practices. As part of its commitment to excellence, the company plans to <b style={{color:"#000"}}>strengthen its digital presence, streamline the order process , and enhance customer service and support</b> to ensure great experience. The company is also <b style={{color:"#000"}}>exploring new market opportunities</b>across Asia-Pacific, positioning itself as a central supplier for high-quality engineering products that meet the evolving demands of an increasingly globalized economy.
                            </p> */}
                            <p class="mb-2" style={{textAlign:'justify'}} data-aos="zoom-out-right">
                            An Engineering Enterprise founded in 1993 to deliver quality engineering products and services to the local Engineering industry. The company meets the requirements of its customers catering to diverse industrial needs to enable them in their productivity and growth.
                            </p>

<p class="mb-2" style={{textAlign:'justify'}} data-aos="zoom-out-right">
Over the years the company quickly established a reputation as a trusted supplier.By forging strategic partnerships with prominent global engineering brands, the company could scale its B2B operations, securing a unique position as a preferred distributor. This expansion enabled the company to offer an extensive product catalog, differentiating it from other local competitors.
</p>

<p class="mb-2" style={{textAlign:'justify'}} data-aos="zoom-out-right">
Today, The company stands out for exceptional machine services , profound technical knowledge on machine cutting and its wide product selection. 
The Company's CAGR has had an exponential growth rate over the years and looking ahead to continue this trend.
</p>

<p class="mb-2" style={{textAlign:'justify'}} data-aos="zoom-out-right">
As part of its commitment to excellence, the company plans to streamline the order processing , and enhance customer service and support to ensure greater experience.
</p>
<p style={{textAlign:'justify'}} data-aos="zoom-out-right"><strong style={{color:"green"}}>We are open for strategic partnerships in similar areas of business!!</strong></p>
                            {/* <a class="btn btn-outline-primary py-3 px-4 px-md-5 ms-2" href="/contact">Contact us</a> */}
                        </div>

                        <div >
                        
                
                        </div>
                       

                    </div>
                    <div class="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div class="position-relative h-100 mt-3">
                            <div className='image-container12'>
                            <img src="img/e3.png" className="img-fluid w-100 h-100 g" style={{objectFit: "contain", alt:"",borderRadius:"10px",marginTop:"-10px"}} data-aos="fade-up"
     data-aos-duration="3000"/>
                            </div>
                           
                            <div class="bg-white">
                              
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-100">
                <h4 className="display-4 mb-4 responive_our_channel_heading" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px",textAlign:"center"}}>Our Allied Industries</h4>
      <h1 className="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif",textAlign:"center"}}>Empowering Growth Through Partnerships With Following - </h1>

      <header className="header-btClear-large-our-clients">
        <div className="dash cl1"></div>

        <Slider {...settings} >
          
        <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
  
    <div style={{display: "flex", alignItems: "center"}} >
      {/* Increase the icon size */}
      <PrecisionManufacturingIcon style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
        Mechanical Industries
      </h5>
    </div>
 
</div>

<div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
         
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      <ConnectingAirportsIcon style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       AeroSpace  Industries
      </h5>
    </div>
         
          </div>

          
<div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
            
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      <GavelIcon style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Forging <br/> Industries
      </h5>
    </div>
           
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12' >
          
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      <FactoryIcon style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Aluminium  Industries
      </h5>
    </div>
           
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
           
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      < ElectricRickshawOutlinedIcon
 style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Automobile  Industries
      </h5>
    </div>
           
          </div>
         
         
          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
            
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      < MedicalServicesIcon
 style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Medical Equipements
      </h5>
    </div>
           
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
          
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      < ScienceIcon
 style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
      Chemical Engineering
      </h5>
    </div>
            
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
            
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      < GiSteelClaws
 style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Steel <br/>Industries
      </h5>
    </div>
           
          </div>

          <div style={{display: "flex", flexDirection: "row", alignItems: "center",margin:"10px"}} className='chart-container12'>
          
            <div style={{display: "flex", alignItems: "center"}}>
      {/* Increase the icon size */}
      < SecurityIcon
 style={{fontSize: "80px", marginRight: "10px", color:"#87c6fa"}} />
      
      {/* Adjust text styles */}
      <h5 style={{fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333"}}>
       Defense<br/> Industries
      </h5>
    </div>
           
          </div>
          
        </Slider>
      </header>
    </div>
            </div>
            
        </div>
       
         {/* <div class="container-fluid banner py-5 wow zoomIn" data-wow-delay="0.2s">
            <div class="banner-design-1"></div>
            <div class="banner-design-2"></div>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-8">
                        <div class="">
                            <h4 class="text-white">Contact Us</h4>
                            <h1 class="display-4 text-white mb-0">We Provide Professional  Sawing Solutions for our customer</h1>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="d-flex align-items-center justify-content-lg-end h-100">
                            <a class="btn btn-primary py-3 px-4 px-md-5 ms-2" href="/products">EXPLORE MORE</a>
                        </div>
                    </div>
                </div>
            </div>
         </div> */}
        
<br/><br/>
       
     
         {/* <div class="container-fluid projects bg-light py-5 resposnive_home_about" style={{marginTop:"-50px"}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 class="text-primary" style={{fontSize:'20px'}}>Our Esteemed Channel Partners</h4>
                            <h1 class="display-4 mb-4" style={{color:"#0f253B"}}>Expert Metal Cutting for Diverse Industries</h1>
                            <p class="mb-5"><stong style={{fontWeight:"bold"}}>Umang Engineering</stong> offers cutting-edge metal cutting solutions with advanced, fully automatic band saw and circular saw machines, serving industries such as automobile, aerospace, machine tool, and forging.</p>
                            <ul class="nav" style={{marginBottom:'-20px',marginLeft:"auto"}}>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="3000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3 active" data-bs-toggle="pill" href="#ProjectsTab-1" style={{textDecoration:"none"}}>
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3" ><span><GiBladeFall /></span></div><span style={{textDecoration:"none"}}>Wikus - Germany</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="4000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-2" style={{textDecoration:"none"}}>
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"  style={{textDecoration:"none"}}><span><GiCircularSawblade /></span></div><span style={{textDecoration:"none"}}>Tenryu - Japan</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="5000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-3" style={{textDecoration:"none"}}>
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"  style={{textDecoration:"none"}}><span><GiPizzaCutter /></span></div><span style={{textDecoration:"none"}}>Singular</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-4" style={{textDecoration:"none"}}>
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"  style={{textDecoration:"none"}}><span class="fas fa-bolt small"></span></div><span style={{textDecoration:"none"}}>Solar Diamond Tools - Mumbai</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-5">
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>Hardcastel</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-6">
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>Caltex</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-7">
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>Magicut</span>
                                    </a>
                                </li>
                                <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
                                    <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-8">
                                        <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>VBelt</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.2s" style={{marginTop:'100px'}}>
                        <div class="tab-content">
                            <div id="ProjectsTab-1" class="tab-pane fade show p-0 active">
                                <div class="projects-item">
                                    <img src="./img/WIKUS.jpg" class="img-fluid w-100" alt="" style={{borderRadius:"7px"}}/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3" style={{textDecoration:'none'}}>Wikus - Germany</h4>
                                        <p class="mb-4">Specializing in Bimetal Band Saw Blades, Carbide Tipped Band Saw Blades, and Diamond Coated Band Saw Blades.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/wikus">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-2" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="./img/ten.png" class="img-fluid w-100" style={{height:"400px",width:"250px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Tenryu - Japan</h4>
                                        <p class="mb-4">Experts in TCT Coated and Uncoated Cutters, HSS Coated and Uncoated Cutters, and Slitting Saws.

                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/tenryu">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-3" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="./img/s55.png" class="img-fluid w-100"   alt="" style={{borderRadius:"7px"}}/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000"> 
                                        <h4 class="mb-3">Singular</h4>
                                        <p class="mb-4">Our commitment is to bring our customers the best and most economic sawing solutions. In addition to premier brands like WIKUS and TENRYU, we have partnered with a leading sawing machine manufacturer from SINGULAR - Taiwan Machinery. 
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/singular">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-4" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="./img/B3-s-.png" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Solar Diamond Tools - Mumbai</h4>
                                        <p class="mb-4">Offering Single Point and Multipoint Diamond Dressors, Diamond Wheels, Honing Sticks, PCD, and CBN Inserts.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/solar">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div id="ProjectsTab-5" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="img/hard1.jpg" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Hardcastel</h4>
                                        <p class="mb-4">Offering Single Point and Multipoint Diamond Dressors, Diamond Wheels, Honing Sticks, PCD, and CBN Inserts.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/hardcastel">Read More</a>
                                    </div>
                                </div>
                            </div>
                           
                            <div id="ProjectsTab-6" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src=".img/caltex1.jpg" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Caltex</h4>
                                        <p class="mb-4">Premium lubricants and coolants designed to optimize machinery performance,ensuring efficiency in industrial settings.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/othercut">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-7" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="./img/B3-s-.png" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Solar Diamond Tools - Mumbai</h4>
                                        <p class="mb-4">Offering Single Point and Multipoint Diamond Dressors, Diamond Wheels, Honing Sticks, PCD, and CBN Inserts.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/solar">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-8" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="img/magi-HSS-2.png" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">Magicut</h4>
                                        <p class="mb-4">Offering Single Point and Multipoint Diamond Dressors, Diamond Wheels, Honing Sticks, PCD, and CBN Inserts.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/othercut">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div id="ProjectsTab-9" class="tab-pane fade show p-0">
                                <div class="projects-item">
                                    <img src="img/tool4.jpeg" class="img-fluid w-100" style={{height:"400px",borderRadius:"7px"}} alt=""/>
                                    <div class="projects-content bg-white p-4" style={{borderRadius:"7px"}} data-aos="fade-down" data-aos-duration="3000">
                                        <h4 class="mb-3">VBelt</h4>
                                        <p class="mb-4">Offering Single Point and Multipoint Diamond Dressors, Diamond Wheels, Honing Sticks, PCD, and CBN Inserts.
                                        </p>
                                        <a class="btn btn-primary py-2 px-4" href="/othercut">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container-fluid projects bg-light py-4">
        <div className="container py-5">
        <div className="h-100">

  <h4 className="text-primary" style={{textAlign:'center'}} >Our Certificates</h4>
  <h1 className="display-4 mb-4" style={{color:"#0f253B" ,textAlign:'center'}}></h1>


<section class="cert1 cee" style={{display: "flex"}}><figure class="snip1179 red">
<img src="./img/iso-c.png" alt="sample24"/><figcaption><div><i class="ion-ios-star"></i></div></figcaption><a href="#"></a></figure><figure class="snip1179 blue ">

<img src="./img/img9.jpg" alt="sample26"/><figcaption><div><i class="ion-ios-refresh"></i></div></figcaption><a href="#"></a></figure>

</section>
  </div> 
  </div>
  </div> */}


        {/* <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}





  
    </div>
  )
}

export default About