import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer  py-5 wow fadeIn" data-wow-delay="0.2s" style={{backgroundColor:"#dceefc"}}>
        <div className="container py-5 responive_new_footer" >

          <div className="row g-5">
          
          <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:"-130px"}}>
            <a href='/'> <img src="img/pp2.png" alt="umang marketing" style={{marginBottom:"-10px",height:"110px"}}/> </a>
                
                   
                <p className="mb-3" style={{ color: "black",fontSize:"18px",fontWeight:"bold",marginLeft:"-50px" }}>
                  Collaboration and Excellence
                </p>
                </div>
              </div>
            </div>

             
          

            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className=" d-flex flex-column resposnive_address_new" style={{fontSize:"12px"}}>
                <h4 className="text-black mb-4">Address</h4>
                <div style={{display:"flex",justifyContent:"left",alignItems:"baseline"}}>
                   <i className="fa fa-map-marker-alt text-primary me-2"></i><p style={{ color: "black",fontSize:"12px" }}><a href="#" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold",textAlign:"justify" }}>SM-118, ITI Industrial Estate (Dyavasandra Industrial Estate) , Whitefield Main Rd, Mahadevapura, Bengaluru, Karnataka, India - 560048</a></p>
                </div>

                 <div style={{display:"flex",justifyContent:"left",alignItems:"baseline"}}>
                <i className="fas fa-envelope text-primary me-2"></i> <p style={{ color: "black",fontSize:"12px" }}><a href="#" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}>umangmrkt@gmail.com <br/>sales@umangmarketing.com

</a></p></div>

               <div style={{display:"flex",justifyContent:"left",alignItems:"baseline"}}>
                <i className="fas fa-phone text-primary me-2"></i><p style={{ color: "black",fontSize:"12px" }}><a href="tel:+91 8041145681" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> +91 9606645009,<br/> +91 8041145681</a></p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="d-flex flex-column" style={{fontSize:"12px"}}>
                <h4 className="text-black mb-4">Quick Links</h4>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none" }}><a href="/" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Home</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/aboutus" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Aboutus</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/products" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Products</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/UmangMarketingService" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Services</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/partners" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Partners</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/blog" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Blog</a></p>
                <p style={{ color: "black",fontSize:"12px",textDecoration:"none",marginTop:"-7px" }}><a href="/contact" style={{ color: "black",fontSize:"12px",textDecoration:"none",fontWeight:"bold" }}> Contact</a></p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 resposnive_footer">
              <div>
                <iframe 
                  className="w-100" 
                  style={{ height: "200px" }} 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.610893037899!2d77.698168!3d12.996721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110a45705743%3A0x72f48a0a09b1291a!2sUmang%20Marketing!5e0!3m2!1sen!2sus!4v1724760858457!5m2!1sen!2sus" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="d-flex flex-column" style={{fontSize:"12px"}}>
                <h4 className="text-black mb-4">Certificates</h4>
                <div style={{height:"180px",width:"170px",borderStyle: "solid",padding:"5px"}} >
                 <img style={{height:"100px",width:"150px"}}src="img/msme.png"/>
                 <img style={{width:"150px"}}src='img/iso-9001.png'/>
                 </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4" style={{backgroundColor:"#87c6fa"}}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body" style={{fontSize:"12px"}}>
                <a href="#" className="border-bottom text-black" style={{textDecoration:"none"}}>
                  Copyrights<i className="fas fa-copyright text-light me-2"></i>2024 Umang Marketing
                </a>, All Rights Reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body" style={{fontSize:"12px"}}>
              Designed By <a className="border-bottom text-black" href="https://excerptech.com" target='_blank' rel="noopener noreferrer">Excerpt Technologies Pvt Ltd</a><br/>
              Terms & Conditions | Privacy Policy
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
    </div>
  )
}

export default Footer


















