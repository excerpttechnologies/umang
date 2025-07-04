import React,{useEffect} from 'react'
import Partners from './Partners';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import GavelIcon from '@mui/icons-material/Gavel';
import FactoryIcon from '@mui/icons-material/Factory';
import ElectricRickshawOutlinedIcon from '@mui/icons-material/ElectricRickshawOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import SecurityIcon from '@mui/icons-material/Security';
import { GiSteelClaws } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { GiBladeFall } from "react-icons/gi";
import { GiCircularSawblade } from "react-icons/gi";
import { GiPizzaCutter } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPartners = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  
  useEffect(() => {
    AOS.init();

  }, []);


const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4, // Adjust based on how many slides you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="container-fluid bg-breadcrumb_Partners">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h4 style={{color:"white"}} class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Partners</h4>
                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px"}}>
                     <li class=""><a href="/"><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow style={{color:"white"}}/></li>
                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                     <li class="breadcrumb-item active text-white"><strong style={{color:"white"}}>Partners</strong></li>
                 </ol>    
            </div>
      </div>

      <div class="container-fluid projects  py-5 resposnive_home_about" style={{marginTop:"20px"}}>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div style={{marginTop:"20px"}}>
                        <h4 className="display-4 mb-4" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px",textAlign:"left"}}>Our Esteemed Channel Partners</h4>
                            {/* <h1 class="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}}>Expert Metal Cutting for Diverse Industries</h1>
                            <p class="mb-5"><stong style={{fontWeight:"bold"}}>Umang Engineering</stong> offers cutting-edge metal cutting solutions with advanced, fully automatic band saw and circular saw machines, serving industries such as automobile, aerospace, machine tool, and forging.</p> */}
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
                                {/* <li class="nav-item bg-white mb-4 w-100" style={{borderRadius:"7px"}} data-aos="fade-up" data-aos-duration="6000">
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
                                </li> */}
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.2s" style={{marginTop:'50px'}}>
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
                            {/* <div id="ProjectsTab-8" class="tab-pane fade show p-0">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid team pb-5 resposnive_home_Ourchannel" >
        <div className="container pb-5">
            <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                <h4 style={{color: 'rgb(16 16 16)'}}></h4>
                <h4 className="display-4 mb-4 responive_our_channel_heading" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px"}}>Our Channel Partners</h4>
                <p className="mb-0 responive_our_channel_heading" style={{color:"black"}} >We are proud to be associated with world-class channel partners who play an integral role in delivering high-quality products and solutions across industries. With a strong commitment to innovation, quality and customer service, our partners ensure that we bring the best to our clients globally</p>
            </div>
          <Partners/>
            
        </div>
      </div>


    <div style={{marginBottom:"5px"}} className='container-fluid projects container-fluid' >
    <div class="container py-5">
    <div class="row g-5">
        <div className="h-100">
        <h4 className="display-4 mb-4 responive_our_channel_heading" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px",textAlign:"center"}}>Our Allied Industries</h4>
      <h1 className="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif",textAlign:"center"}}>Empowering Growth Through Partnerships With Following - </h1>

      <header className="header-btClear-large-our-clients">
        <div className="dash cl1"></div>

        <Slider {...settings} >
          
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}} className='chart-container12'>
  
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
      
    </div>

  
    </>
  )
}

export default OurPartners