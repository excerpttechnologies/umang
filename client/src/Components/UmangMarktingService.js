import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";
import OurPartners from './OurPartners';

const UmangMarktingService = () => {
  return (
    <div>
    
         <div className="container-fluid bg-breadcrumb_UmangMarktingServices">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h4 style={{color:"white"}} class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Umang Marketing - Machine Service</h4>
                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px",color:"white"}}>
                     <li class=""><a href="/"><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                     <li class="breadcrumb-item active" ><strong style={{color:"white"}}>Umang Marketing - Machine Service</strong></li>
                 </ol>    
            </div>
      </div>

     


         
        <div className="container-fluid about">
        <div className='container'>
        <div className="service-content mt-5">
            <div className="service-image-container">
              <img
                src="/img/5620.png"
                className="service-image"
              />
            </div>
            <div className="service-text-content responive_karthi34">
              <h1 class="display-4 mb-4" style={{color: "#000000",fontFamily:"Crimson Pro, serif"}}>Servicing of Band Saw & Circular Saw Machines</h1>
              <div className="service-description" style={{textAlign:"justify",marginRight:"10px"}}>
              
              <b>Umang Marketing - Machine Service</b> provides expert servicing of Band Saw and Circular Saw machines of Indian and international brands.
    Our comprehensive maintenance services ensure that your cutting machines operate at peak performance, minimizing downtime and extending their lifespan. Whether you're in the mechanical sector or dealing with sophisticated hydraulic systems, our services are designed to meet the rigorous demands of your industry, ensuring that your equipment runs smoothly and efficiently.
                    {/* <ul style={{listStyleType:"Circle",marginTop:"15px",textAlign:"justify"}}>
                      
                        <li>we sell for Spares:High-precision cutting solutions designed for efficient metal and wood processing.</li>
                        <li>Band Saw Machine:Robust and reliable machine offering fast, accurate cuts for a wide range of materials.</li>
                        <li>CircularSaw Machine:Versatile extending machine engineered for superior performance in heavy-duty industrial tasks.</li>
                        <li>Maintainace For Band Saw & CircularSaw Machine: Ensure optimal performance and longevity with regular, expert maintenance for both Band Saw and Circular Saw machines.</li>
                    </ul> */}
<br/><br/>
                    <strong>We Supply High Quality High Precision Mechanical and Electrical spares required for the above said machines at Economical Rates.</strong>
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

export default UmangMarktingService;