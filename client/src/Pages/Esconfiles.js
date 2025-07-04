// import React from 'react'
// import './Escon.css'

// const Esconfiles = () => {
//   return (
//     <div className='my_chart' style={{width:"900px"}}>
// 		<h3>Escon Files and Tools</h3>
// 		<div className='responive_escon'>
//       <div>
// 		 <img src="./img/escon.png" />
// 	  </div>
// 	  <div>
// 		 <p>Umang Marketing is the authorized distributors for world class Escon Steel Rasp Files, Round Bastard Files, Flat Bastard, Round Files, Round Smooth Files, Steel Machinists Files, Half Round Bastard Steel Files, Cut Slim Taper Saw Files etc.

// We also supply Mist Coolants for TCT Circular Saw cutter applications which helps to enhance the cutter life.</p>
// 	  </div>
// 	  </div>

// 	  <div style={{overflowY:"scroll",height:"1300px",width:"1140px"}}>
// 		 <h3>Machinist Files</h3>
// 		 <div >
// 		    <img src="./img/m1.png" style={{width:"470px"}}/>
// 			<img src="./img/m2.png" style={{width:"470px"}}/>
// 			<img src="./img/m3.png" style={{width:"470px"}}/>
// 			<img src="./img/m4.png" style={{width:"470px"}}/>
// 			<img src="./img/m5.png" style={{width:"470px"}}/>
// 			<img src="./img/m6.png" style={{width:"470px"}}/>
// 			<img src="./img/m7.png" style={{width:"470px"}}/>
// 			<img src="./img/m8.png" style={{width:"470px"}}/>
// 			<img src="./img/m9.png" style={{width:"470px"}}/>
// 			<img src="./img/m10.png" style={{width:"470px"}}/>
// 			<img src="./img/m11.png" style={{width:"470px"}}/>
// 			<img src="./img/m12.png" style={{width:"470px"}}/>
// 			<img src="./img/m13.png" style={{width:"470px"}}/>
// 			<img src="./img/m14.png" style={{width:"470px"}}/>
// 			<img src="./img/m15.png" style={{width:"470px"}}/>
// 		 </div>
		
// 	  </div>
//     </div>
//   )
// }

// export default Esconfiles




import React from 'react';
import './Escon.css';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
const Esconfiles = () => {
  return (
    <>
    <div className="container-fluid bg-breadcrumb_Escon">
    <div class="container text-center py-5" >
            {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
            <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s" style={{marginTop:"100px"}}>
                <li ><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
              
                <li class="breadcrumb-item active text-primary"><strong>Escon</strong></li>
            </ol>    
        </div>
    </div>
    <div className=''>
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:"30px"}} className="paragraph-container">
        <h2 style={{textAlign:"left",color:"#0f253B"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Escon </strong></h2>
        <a href="./img/ESCON-STEEL-FILE-CATALOGUE.pdf" download="ESCON-STEEL-FILE-CATALOGUE">
   <button className='btn btn-outline-primary btn-page-pulse'><CiSaveDown2/> Catalog Download</button>
   </a>
   
        </div>
       
    <div className='my_chart'>


      <h1 style={{fontFamily:"Crimson Pro, serif"}}>Escon Files and Tools</h1>
      <div className='responsive_escon'>
        <div>
          <img src='./img/escon.png' alt='Escon'/>
        </div>
        <div>
          <p>
            Umang Marketing is the authorized distributor for world-class Escon Steel Rasp Files, Round Bastard Files, Flat Bastard, Round Files, Round Smooth Files, Steel Machinists Files, Half Round Bastard Steel Files, Cut Slim Taper Saw Files, etc.
            
          </p>
        </div>
      </div>

      <div className='machinist_files_container'>
        <h3 style={{fontFamily:"Crimson Pro, serif"}}>Machinist Files</h3>
        <div className='machinist_files_images'>
          {Array.from({ length: 14 }, (_, index) => (
            <img key={index} src={`./img/m${index + 1}.png`} alt={`Machinist File ${index + 1}`} />
          ))}
          {/* <img src='./img/m15.png'/> */}
        </div>
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> <h6>Scroll Horizontally</h6>
        <h2 style={{textAlign:"left",fontFamily:"Crimson Pro, serif"}} >File Selection</h2>
        <img src='./img/m15.png'/>
      </div>
    </div>
    </div>
    </>
  );
};

export default Esconfiles;
