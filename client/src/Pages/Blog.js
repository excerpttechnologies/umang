


import React, { useEffect } from 'react';
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
import OurPartners from '../Components/OurPartners';

const Blog = () => {

    
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
                    <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                    <span id="search-icon-1" class="btn bg-light border nput-group-text p-3">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid bg-breadcrumb_blog">
    <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Blog</h4>
        <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li style={{color:"white"}}><a href="/"><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary" style={{color:"white"}}><strong style={{color:"white"}}>Blog</strong></li>
                </ol>  
    </div>
</div>

<div class="container-fluid blog py-5 resposnive_home_about">
    <div class="container py-5">
        <div class="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
        <h4 className="display-4 mb-4 responive_our_channel_heading" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px",textAlign:"center"}}>Our Blog</h4>
            <h1 class="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}}>Mechanical News & Updates</h1>
            <p class="mb-0">
                Stay updated on the latest advancements and innovations in mechanical engineering. From cutting-edge sawing solutions to precision tools, we bring you the most relevant news in the mechanical industry.
            </p>
        </div>
        <div class="row g-4">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="img/commercial-1.jpg" class="img-fluid w-100" alt="" />
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">Discover Wikus Germany Bimetal Band Saw Blades</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> April 2, 2024</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> Mechanical Solutions</p>
                        </div>
                        <p class="mb-4">
                            Explore the unmatched performance of Wikus - Germany's Bimetal Band Saw Blades. Engineered for precision, these blades are ideal for various cutting applications across industries.
                        </p>
                        {/* <a class="btn btn-primary py-2 px-4" href="#">Learn More</a> */}
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="img/commercial-2.jpg" class="img-fluid w-100" alt="" />
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">Precision Cutting with Tenryu Japan TCT & HSS Circular Cutters</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> April 2, 2024</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> Mechanical Tools</p>
                        </div>
                        <p class="mb-4">
                            Tenryu Japan's TCT and HSS Circular Cutters are renowned for their durability and precision. Learn how these cutting-edge tools can improve efficiency in your mechanical operations.
                        </p>
                        {/* <a class="btn btn-primary py-2 px-4" href="#">Learn More</a> */}
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="img/commercial-3.jpg" class="img-fluid w-100" alt="" />
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">Explore Our Diamond Tool Solutions with Solar Diamond Tools</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> April 2, 2024</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> Mechanical Innovations</p>
                        </div>
                        <p class="mb-4">
                            Solar Diamond Tools offers high-performance diamond tool solutions for various cutting applications. From industrial needs to specialized services, discover how these tools can enhance your projects.
                        </p>
                        {/* <a class="btn btn-primary py-2 px-4" href="#">Learn More</a> */}
                    </div>
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
      
</div>
)}


export default Blog;