import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";
import OurPartners from './OurPartners';

const UmangEngineeringServices = () => {
  return (
    <div >
        {/* <div class="container-fluid bg-breadcrumb_UmangEngServices ">
            <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s" style={{marginTop:"-80px"}}>Umang Engineering Services</h4>
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" style={{marginTop:'150px',color:'white'}} data-wow-delay="0.3s">
                    <li ><a href="/" style={{textDecoration:"none" , }}><strong style={ {color:'white'}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                    
                    <li class="breadcrumb-item active " style={{color:'white'}}><strong style={ {color:'white'}}>Umang Engineering</strong></li>
                </ol>    
            </div>
        </div> */}
          <div className="container-fluid bg-breadcrumb_UmangEngServices">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h4 style={{color:"white"}} class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Umang Engineering Services</h4>
                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px"}}>
                     <li class="" style={{color:"white"}}><a href="/" style={{color:"white"}}><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                     <li class="breadcrumb-item active" style={{color:"white"}}><strong style={{color:"white"}}>Umang Engineering
                      </strong></li>
                 </ol>    
            </div>
      </div>
       
       <div className="container-fluid about" >
        <div className='container'>
      <div className="service-content mt-5">
            <div className="service-image-container">
              <img
                src="/img/circular-saw12.png"
                className="service-image"
              />
            </div>
            <div className="service-text-content responive_karthi34">
              <h1 class="display-4 mb-4" style={{color: "#000000",fontFamily:"Crimson Pro, serif"}}>Umang Engineering Services</h1>
              <div className="service-description" style={{textAlign:"justify",marginRight:"10px"}}>
              We offer Metal Cutting Facility. We have imported, fully automatic, world-class Band Saw Machines and Circular Saw machines.
              We offer the metal cutting facility to various customers in the Automobile, Aerospace, Machine Tool, Forging Industries, etc.
                <br/><ul style={{listStyleType:"Circle",textAlign:"justify",marginTop:"10px"}}>
                 <h3 style={{fontFamily:"Crimson Pro, serif"}}><b>Our Speciality in Metal Cutting is:</b></h3>
                 <li>We ensure perfect cuts irrespective of diameters.</li>
                 <li>Minimize the wastage of material.</li>
                 <li>Materials cut on Circular saw ensure a lot of material saving - by avoiding any taper, cut to exact size, and can eliminate facing-off operation.</li>
                 <li>We have an experienced shop floor team.</li>
                 <li>We have ample storage and Overhead Crane facilities for material handling.</li>
                </ul>
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
  )
}

export default UmangEngineeringServices;