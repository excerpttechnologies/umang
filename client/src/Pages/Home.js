import React, { useEffect,useRef } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import Testinomial from './Testinomial';
import ProductSlider from './ProductSlider';
import SplitCarousel from '../Components/Splitcaros';
import Partners from '../Components/Partners';
import CountUp from 'react-countup';
import { FaArrowCircleRight } from "react-icons/fa";
import { gsap } from "gsap";
import "./Home.css"
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';

import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { Bold } from 'lucide-react';
import { FaHandshakeAngle } from "react-icons/fa6";
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import GrainIcon from '@mui/icons-material/Grain';
import HubIcon from '@mui/icons-material/Hub';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import { FaHandshake } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const Home = () => {
   
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
        
       <SplitCarousel/>
      <div className="container-fluid about py-3 responsive_home_about">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s" style={{marginTop:"44px"}}>
        <div className="h-100" style={{paddingRight:"40px"}}>
        {/* <div className="card m-2" style={{marginLeft:"-10px"}}>
            <div style={{display:"flex",alignItems:"center"}}>
                <CalendarViewDayOutlinedIcon style={{backgroundColor:"#87c6fa",width:"50px",height:"50px",padding:"3px",borderRadius:"3px"}}/>
                <h5 className="card-title" style={{marginLeft:"8px"}}></h5>
             </div>
            <div className="card-body">   
              <p className="card-text">Our aim is excel in the area are specialized by continuous interaction with our existing and new customer<br/>
              we are in this field 31+ years
              </p>
            </div>
          </div> */}

          <h6 className="display-4 mb-4" style={{ color: "#0f253B",fontSize:"27px",fontFamily:"Crimson Pro,serif" }}>
          Our Philosophy<br/>
          <strong style={{ color: "black", fontSize: "15px" }}>With Over 31 years of experience , the Wind Beneath Our Wings truly is:</strong>
          </h6>
          
          
          {/* <p className="mb-4 aos-init aos-animate" data-aos="zoom-out-right" style={{ textAlign: "justify", color: "black" }}>
            <b>With Over 31 years of experience  ,  the Wind Beneath Our Wings truly is:</b> is an Engineering Enterprise, established in the year 1993, and a premier partner of 
            <span style={{ color: "#87c6fa", fontWeight: "bold" }}> Wikus Germany, Tenryu Japan, and Singular Machinery Taiwan in machine sawing solutions.</span>
            With a passion for precision and efficiency, we specialize in delivering cutting-edge technology for all your sawing needs. Backed by a team of experts and engineers, 
            <span style={{ color: "#87c6fa", fontWeight: "bold" }}> we are committed to providing top-notch products and services,</span> ensuring your success in every cut. 
            Along with metal sawing solutions, we also serve as channel partners for Solar Diamond Tools, providing diamond tool applications.
          </p> */}
          {/* <p data-aos="zoom-out-left" className="aos-init aos-animate" style={{ textAlign: "justify", color: "black" }}>
          <span style={{marginBottom:"-7px"}}><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Quality without Compromise :</b><br/>
          We deliver high-precision, reliable products that meet the highest standards in every project.<br/><br/></span>
          <span style={{marginBottom:"-4px"}}><b><GoDotFill style={{color:"#67dd27",marginRight:"7px"}}/>Efficiency :</b><br/>
          Leveraging technology, we ensure quick turnaround times without sacrificing quality.<br/><br/></span>
          <span style={{marginBottom:"-4px"}}><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Customer-Centric :</b><br/>
          We collaborate and tailor our services to meet each client’s unique needs, ensuring their success is our priority. We are ensure complete customer Satifaction and we are going.<br/><br/></span>
          <span style={{marginBottom:"-4px"}}><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Sustainability and Responsibility :</b><br/>
          We operate with minimal environmental impact, focusing on efficiency and reducing waste. 
</span>
          
          </p> */}

          <p data-aos="zoom-out-left" className="aos-init aos-animate" style={{ textAlign: "justify", color: "black",fontSize:"intial" ,marginTop:"-10px"}}>
          <span ><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Quality without Compromise :</b><br/>
          We deliver high-precision, reliable products that meet the highest standards in every project.<br/></span>
          
          </p>

          <p data-aos="zoom-out-left" className="aos-init aos-animate" style={{ textAlign: "justify", color: "black",fontSize:"intial" }}>
          
          <span ><b><GoDotFill style={{color:"#67dd27",marginRight:"7px"}}/>Efficiency :</b><br/>
          Leveraging technology, we ensure quick turnaround times without sacrificing quality.<br/></span>
          
          
          </p>

          <p data-aos="zoom-out-left" className="aos-init aos-animate" style={{ textAlign: "justify", color: "black",fontSize:"intial" }}>
          
          <span ><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Customer-Centric :</b><br/>
          We collaborate and tailor our services to meet each client’s unique needs, ensuring their success is our priority. We ensure complete customer satifaction and we are growing.<br/></span>
         
          
          </p>

          <p data-aos="zoom-out-left" className="aos-init aos-animate" style={{ textAlign: "justify", color: "black",fontSize:"intial" }}>
          <span ><b><GoDotFill style={{color:"#67dd27",marginBottom:"3px"}}/> Sustainability and Responsibility :</b><br/>
          We operate with minimal environmental impact, focusing on efficiency and reducing waste. 
</span>
          
          </p>

          <a href="/aboutus" className="btn" style={{backgroundColor:"#87c6fa",color:"white"}}>Learn More
               <ArrowForwardOutlinedIcon/>
              </a>
        </div>
      </div>

      <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s" style={{marginTop:"50px"}}>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {/* Card 1 */}
          <div className="card m-2" style={{ width: "18rem" }}>
          <div style={{display:"flex",alignItems:"center"}}>
             <DiamondOutlinedIcon style={{backgroundColor:"#87c6fa",width:"50px",height:"50px",padding:"3px",borderRadius:"3px"}}/>
             <h5 className="card-title" style={{marginLeft:"5px",fontWeight:"bold"}}>Services</h5>
             </div>
            <div className="card-body">
              
              <p className="card-text" style={{fontWeight:"bold",width:"Max-Content"}}>Your satisfaction is Ours!</p>
              <a href="/UmangMarketingService" className="btn" style={{backgroundColor:"#87c6fa",color:"white"}}>Learn More
               <ArrowForwardOutlinedIcon/>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card m-2" style={{ width: "18rem" }}>
            {/* <img src="image2.jpg" className="card-img-top" alt="Product 2" /> */}
            <div style={{display:"flex",alignItems:"center"}}>
            <FaHandshake style={{backgroundColor:"#87c6fa",width:"50px",height:"50px",padding:"3px",borderRadius:"3px"}}/>
            <h5 className="card-title" style={{marginLeft:"5px",fontWeight:"bold"}}>Partners</h5>
            </div>
            <div className="card-body">
             
              <p className="card-text" style={{fontWeight:"bold",width:"Max-Content"}}>We make it happen together.</p>
              <a href="/Partners" className="btn" style={{backgroundColor:"#87c6fa",color:"white"}}>Learn More
              <ArrowForwardOutlinedIcon/></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card m-2" style={{ width: "18rem" }}>
            {/* <img src="image3.jpg" className="card-img-top" alt="Product 3" /> */}
            <div style={{display:"flex",alignItems:"center"}}>
            <CategoryIcon style={{backgroundColor:"#87c6fa",width:"50px",height:"50px",padding:"3px",borderRadius:"3px"}}/>
            <h5 className="card-title" style={{marginLeft:"5px",fontWeight:"bold"}}>Products</h5>
            </div>
            <div className="card-body">
              
              <p className="card-text" style={{fontWeight:"bold",width:"Max-Content"}}> Quality never compromised.</p>
              <a href="/products" className="btn" style={{backgroundColor:"#87c6fa",color:"white"}}>Learn More
              <ArrowForwardOutlinedIcon/></a>
            </div>
          </div>

          {/* Card 4 */}
          {/* <div className="card m-2" style={{ width: "18rem" }}>
            <div style={{display:"flex",alignItems:"center"}}>
            <SubjectOutlinedIcon style={{backgroundColor:"#87c6fa",width:"50px",height:"50px",padding:"3px",borderRadius:"3px"}}/>
            <h5 className="card-title" style={{marginLeft:"5px"}}>Testinomial</h5>
            </div>
            <div className="card-body">
             
              <p className="card-text">Description of Product 4. A cost-effective solution for your sawing needs.</p>
              <a href="/testinomial" className="btn" style={{backgroundColor:"#87c6fa",color:"white"}}>Learn More
              <ArrowForwardOutlinedIcon/></a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
     </div>

     <div >
      <Testinomial/>
      </div>

      
      {/* <div class="container-fluid banner py-5 wow zoomIn" data-wow-delay="0.2s">
            <div class="banner-design-1"></div>
            <div class="banner-design-2"></div>
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-8">
                        <div class="">
                            <h4 class="text-white">Contact Us</h4>
                            <h1 class="display-4 text-white mb-0">We Provide Professional  Sawing Solutions for Our Customer</h1>
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
  
      {/* <div className="container-fluid service " >
        <div className="container py-3">
            <div className="d-flex flex-column mx-auto text-center wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <h4 className='text-primary'style={{textAlign:"center"}}>Our Products</h4>
                <h1 className="display-4 mb-2" style={{color: '#0F253B',textAlign:"center"}}>The Best Products For You</h1>
                <ProductSlider/>
            </div>
        </div>
      </div>
       
      <div className="container-fluid projects py-5 bg_dd resposnive_home_about" >
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                    <div>
                        <h4 className='text-primary'>Our Services</h4>
                        <h1 className="display-4 mb-4" style={{color: 'white'}}>The Best Services For You</h1>
                        <p className="mb-5" style={{color: 'white',textAlign:"justify"}}>At <b> Umang Marketing - Machine service & Engineering Services</b>, we are dedicated to delivering high-quality metal cutting solutions that boost productivity and minimize costs. Whether you're in the automotive industry or aerospace manufacturing, our services are customized to meet your specific needs.</p>
                        <ul className="nav" style={{marginLeft:"-1px"}}>
                            <li className="nav-item mb-4 w-100" style={{backgroundColor: 'white',borderRadius:"7px"}}>
                                <a className="d-flex align-items-center h4 mb-0 p-3 active" data-bs-toggle="pill" href="#ProjectsTab-1" style={{color: '#0F253B'}}>
                                    <div className="projects-icon btn-md-square me-3" style={{backgroundColor: '#CD5F0B', color: 'white'}}>
                                        <span> <MdOutlineMiscellaneousServices/></span>
                                    </div>
                                    <span style={{textDecoration:"none"}}><b>Umang Marketing - Machine Service</b></span>
                                </a>
                            </li>
                            <li className="nav-item mb-4 w-100" style={{backgroundColor: 'white',borderRadius:"7px"}}>
                                <a className="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-2" style={{color: '#0F253B'}}>
                                    <div className="projects-icon btn-md-square me-3" style={{backgroundColor: '#CD5F0B', color: 'white'}}>
                                        <span><GrServices /></span>
                                    </div>
                                   
                                    <span style={{textDecoration:"none"}}><b style={{textDecoration:"none"}}>Umang Engineering Services</b></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.2s">
                    <div className="tab-content">
                        <div id="ProjectsTab-1" className="tab-pane fade show p-0 active">
                        <div className="projects-item">
<div className='image-container12'>
<img src="./img/ser-bg.png" className="img-fluid w-100  g" alt="" style={{height:"350px",borderRadius:"7px"}}/>
</div>
<div className="projects-content p-4" style={{backgroundColor: 'white',borderRadius:"7px",textAlign:"justify"}}>
    <h4 className="mb-3" style={{color: '#0F253B'}}><b>Umang Marketing - Machine Service</b></h4>
    <p className="mb-4" style={{color: '#0F253B'}}><b>Umang Marketing </b> offers comprehensive spare parts and expert servicing for all types of Band Saw and Circular Saw machines, regardless of the make. We cater to industries such as Mechanical, Electrical, Electronics, and Hydraulics, ensuring that your machines run at optimal performance. </p>
    <p className="mb-4" style={{color: '#0F253B',marginTop:'-10px'}}> Our maintenance services cover everything from routine inspections to complex repairs, reducing downtime and extending the life of your equipment. With specialized expertise, we address the specific needs of each sector, ensuring smooth and efficient operation of your cutting machines.</p>
  
    <a className="btn py-2 px-4" href="/UmangMarktingService" style={{backgroundColor: '#87c6fa', color: 'white'}}>Read More</a>
</div>
</div>
                        </div>
                        <div id="ProjectsTab-2" className="tab-pane fade show p-0">
                          

                            <div className="projects-item">
                              
                                <div className='image-container12'>
<img src="./img/circular-saw1.jpg" className="img-fluid w-100  g" alt="" style={{height:"350px",borderRadius:"7px"}}/>
</div>
                                <div className="projects-content p-4" style={{backgroundColor: 'white',borderRadius:"7px",textAlign:"justify"}}>
                                    <h4 className="mb-3" style={{color: '#0F253B'}}><b>Umang Engineering Services</b></h4>
                                    <p style={{color: '#0F253B'}}>At <b>Umang Engineering Services</b>, we are committed to providing our customers with reliable, high-quality metal cutting solutions that enhance productivity and reduce costs. Whether you're in the automotive sector or involved in aerospace manufacturing, our services are tailored to meet the specific needs of your industry.</p>
                                    <p style={{color: '#0F253B',marginTop:'-10px'}}> We provide a state-of-the-art Metal Cutting Facility, equipped with imported, Singular Band Saw Machines and Circular Saw Machines. Our facility is designed to serve a wide range of industries, including Automobile, Aerospace, Machine Tool, and Forging, delivering precision cuts that meet the highest industry standards.</p>
                                    <a className="btn py-2 px-4" href="/UmangEngineeringServices" style={{backgroundColor: '#CD5F0B', color: 'white'}}>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> */}
      {/* <div className='bg_hh'>
      <Testinomial/>
      </div> */}
     
      
      {/* <div className="container-fluid team pb-5 bg_ee resposnive_home_Ourchannel" >
        <div className="container pb-5">
            <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                <h4 style={{color: 'rgb(16 16 16)'}}></h4>
                <h1 className="display-4 mb-4 responive_our_channel_heading" >Our Channel Partners</h1>
                <p className="mb-0 responive_our_channel_heading" >We are proud to be associated with world-class channel partners who play an integral role in delivering high-quality products and solutions across industries. With a strong commitment to innovation, quality and customer service, our partners ensure that we bring the best to our clients globally</p>
            </div>
          <Partners/>
            
        </div>
      </div> */}
      
 
      {/* <div className="container-fluid blog py-5 bg_tt resposnive_home_about">
        <div className="container py-5">
            <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                <h4 className='text-primary'>Our Blog</h4>
                <h1 className="display-4 mb-4" style={{color: 'white'}}>Mechanical News & Updates</h1>
                <p className="mb-0" style={{color: 'white'}}>Stay updated on the latest advancements and innovations in mechanical engineering. From cutting-edge sawing solutions to precision tools, we bring you the most relevant news in the mechanical industry.</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="blog-item" style={{backgroundColor: 'white'}}>
                        <div className="blog-img">
                            <img src="img/commercial-1.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="blog-heading ms-4">
                            <a href="#" className="h4 mb-0 p-4" style={{color: '#0F253B'}}>Discover Wikus Germany Bimetal Band Saw Blades</a>
                        </div>
                        <div className="blog-content p-4" style={{backgroundColor: 'white'}}>
                            <div className="d-flex justify-content-between mb-4">
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-calendar me-2"></i> April 2,2024</p>
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-tag me-2"></i>  Mechanical Solutions</p>
                            </div>
                            <p className="mb-4" style={{color: '#0F253B'}}>Explore the unmatched performance of Wikus - Germany's Bimetal Band Saw Blades. Engineered for precision, these blades are ideal for various cutting applications across industries.</p>
                            <a className="btn btn-outline-primary py-2 px-4" href="#" style={{}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="blog-item" style={{backgroundColor: 'white'}}>
                        <div className="blog-img">
                            <img src="img/commercial-2.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="blog-heading ms-4">
                            <a href="#" className="h4 mb-0 p-4" style={{color: '#0F253B'}}>Precision Cutting with Tenryu Japan TCT & HSS Circular Cutters </a>
                        </div>
                        <div className="blog-content p-4" style={{backgroundColor: 'white'}}>
                            <div className="d-flex justify-content-between mb-4">
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-calendar me-2"></i> April 2,2024</p>
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-tag me-2"></i>  Mechanical Tools</p>
                            </div>
                            <p className="mb-4" style={{color: '#0F253B'}}>Tenryu Japan's TCT and HSS Circular Cutters are renowned for their durability and precision. Learn how these cutting-edge tools can improve efficiency in your mechanical operations.</p>
                            <a className="btn btn-outline-primary py-2 px-4" href="#" >Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="blog-item" style={{backgroundColor: 'white'}}>
                        <div className="blog-img">
                            <img src="img/commercial-3.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="blog-heading ms-4">
                            <a href="#" className="h4 mb-0 p-4" style={{color: '#0F253B'}}>Explore Our Diamond Tool Solutions with Solar Diamond Tools</a>
                        </div>
                        <div className="blog-content p-4" style={{backgroundColor: 'white'}}>
                            <div className="d-flex justify-content-between mb-4">
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-calendar me-2"></i> April 2,2024</p>
                                <p className="mb-0 small" style={{color: '#0F253B'}}><i className="fa fa-tag me-2"></i> Electricity Corner</p>
                            </div>
                            <p className="mb-4" style={{color: '#0F253B'}}>Solar Diamond Tools offers high-performance diamond tool solutions for various cutting applications. From industrial needs to specialized services, discover how these tools can enhance your projects.</p>
                            <a className="btn btn-outline-primary py-2 px-4" href="#" >Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
    </div>
  )
}

export default Home