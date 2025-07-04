import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { MdOutlineDoubleArrow } from "react-icons/md";

const Contact = () => {

    const [status, setStatus] = useState("Submit");
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === 'name') {
            newValue = value.replace(/[^a-zA-Z\s]/g, '');
        } else if (name === 'phone') {
            newValue = value.replace(/\D/g, '').slice(0, 10);
        }
        setInfo({
            ...info,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");
        ReactGA.event({
            category: "contact us",
            action: "Submit button click",
            value: 1,
        });

        try {
            let response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(info),
            });

            if (response.ok) {
                setStatus("Submitted");
                setInfo({ name: "", phone: "", email: "", subject: "", message: "" });
                navigate("/thankyou");
            } else {
                const errorMessage = await response.text();
                console.error("Error submitting form:", errorMessage);
                setStatus("Submit");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("Submit");
        }
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
        
        <div class="container-fluid bg-breadcrumb_contact">
            <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s" style={{color:"black"}}>Contact Us</h4>
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li style={{color:"white"}}><a href="/"><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong style={{color:"white"}}> Contact</strong></li>
                </ol>  
            </div>
        </div>
       
        <div class="container-fluid contact bg-light py-5 resposnive_home_about">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                        <h4 className="display-4 mb-4" style={{fontFamily:"Crimson Pro, serif",color:"#1976d2",fontSize:"20px"}}>Contact Us</h4>
                            <h1 class="display-4 mb-4" style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}}>How We Can Help You</h1>
                           
                            {/* <div class="d-flex align-items-center mb-4">
                                <a class="btn btn-primary btn-md-square me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-primary btn-md-square me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-primary btn-md-square me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="btn btn-primary btn-md-square me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div> */}
                            <div class="row g-4">
                                <div class="col-12">
                                    <div class="d-inline-flex bg-white w-100 p-4">
                                        <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                        <div>
                                            <h4 style={{color:"#0f253B"}}>Address</h4>
                                            <p class="mb-0"> SM-118, ITI Industrial Estate (Dyavasandra Industrial Estate) , Whitefield Main Rd, Mahadevapura, Bengaluru, Karnataka, India - 560048</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="d-inline-flex bg-white w-100 p-4">
                                        <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                                        <div>
                                            <h4 style={{color:"#0f253B"}}>Mail Us</h4>
                                            <p class="mb-0"style={{textDecoration:"none"}}>
                                                <a href='mailto:umangmrkt@gmail.com' style={{color:"black",textDecoration:"none"}}>umangmrkt@gmail.com</a><br/>
                                                <a href='mailto:sales@umangmarketing.com' style={{color:"black",textDecoration:"none"}}>sales@umangmarketing.com</a>
                        
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="d-inline-flex bg-white w-100 p-4">
                                        <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                        <div>
                                            <h4 style={{color:"#0f253B"}}>Telephone</h4>
                                            <p class="mb-0">+91 8041145681<br/>+91 9606645009</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div>
                            <p class="mb-4" style={{marginLeft:"40px"}}>Connect with us and let’s create something extraordinary together.<br/> Whether you have questions or brilliant ideas, our team is ready to assist you.<br/> Reach out to us and let's turn your vision into reality!
                                 {/* <a class="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a> */}
                                 
                                 </p>

        <form onSubmit={handleSubmit} className="contact-form">
            <div className="row g-4">
                <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                        <input  type="text" className="form-control border-0"  id="name"  name="name" value={info.name}  onChange={handleChange}   placeholder="Your Name"  required />
                        <label htmlFor="name">Your Name</label>
                    </div>
                </div>
                
                <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                        <input  type="email" className="form-control border-0" id="email"  name="email" value={info.email}  onChange={handleChange}  placeholder="Your Email" required  />
                        <label htmlFor="email">Your Email</label>
                    </div>
                </div>
                
                <div className="col-lg-12 col-xl-12">
                    <div className="form-floating">
                        <input  type="tel" className="form-control border-0"  id="phone"  name="phone" value={info.phone}  onChange={handleChange}  placeholder="Your Phone"   required    />
                        <label htmlFor="phone">Your Phone</label>
                    </div>
                </div>
                
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control border-0" id="subject"  name="subject" value={info.subject}  onChange={handleChange} placeholder="Subject"  required    />
                        <label htmlFor="subject">Subject</label>
                    </div>
                </div>
                
                <div className="col-12">
                    <div className="form-floating">
                        <textarea   className="form-control border-0"  placeholder="Leave a message here"  id="message"  name="message"  value={info.message}  onChange={handleChange}   required  ></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                </div>

                <div className="col-12" style={{marginLeft:"6px"}}>
                    <button className="btn btn-primary w-100 py-3" type="submit">
                        {status}
                    </button>
                </div>
            </div>
        </form>
                        </div>
                    </div>
                    <div class="col-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="h-100 overflow-hidden">
                           <iframe class="w-100" style={{height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.610893037899!2d77.698168!3d12.996721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110a45705743%3A0x72f48a0a09b1291a!2sUmang%20Marketing!5e0!3m2!1sen!2sus!4v1724760858457!5m2!1sen!2sus" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
        </div>

        
      
    </div>
  )
}

export default Contact