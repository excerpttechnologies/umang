

// import React, { useState } from 'react';
// import { Tabs, Tab, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
// import Esconfiles from './Esconfiles';
// import Ff from './ff';
// import Magicut from './Magicut';
// import VBelt from './VBelt';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import OurPartners from '../Components/OurPartners';
// import { MdOutlineDoubleArrow } from "react-icons/md";

// const OtherCut = () => {

//   const setting = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Adjust based on how many slides you want to show
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     responsive: [
//       {
//         breakpoint: 768, // Mobile view adjustments
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 480, // Smaller mobile view adjustments
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };
//   const [selectedTab, setSelectedTab] = useState(0);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  

//   const handleChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   const tabLabels = ["Escon", "Magicut", "Abracut", "Caltex", "V-Blet"];

 
//   return (
//     <>
//       <div className="container-fluid bg-breadcrumb_othercutting">
//       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
//       <h2 style={{color:"black"}}>OTHER PRODUCTS</h2>
//                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
//                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
//     marginTop: "100px"}}>
//                     <li class=""><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
//                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
//                     <li class="breadcrumb-item active text-primary"><strong>Other Products</strong></li>
//                 </ol>    
//             </div>
//       </div>
//       <div className="container-fluid">
//       <div className='container'>
//       <div className="chart-container">
//         <Box sx={{ 
//           flexGrow: 1, 
//           bgcolor: 'background.paper', 
//           display: 'flex', 
//           flexDirection: isMobile ? 'column' : 'row', 
//           height: 1700 
//         }}>
//           <Tabs
//             orientation={isMobile ? 'horizontal' : 'vertical'}
//             variant="scrollable"
//             value={selectedTab}
//             onChange={handleChange}
//             aria-label="Responsive Tabs"
//             sx={{
//               borderRight: isMobile ? 'none' : 1,
//               borderBottom: isMobile ? 1 : 'none',
//               borderColor: 'divider',
//               width: isMobile ? '100%' : '200px',
//               '& .MuiTabs-flexContainer': {
//                 alignItems: 'stretch',
//               },
//               '& .MuiTab-root': {
//                 minWidth: '200px !important',
//                 width: '200px !important',
//                 maxWidth: '200px !important',
//                 height: '48px',
//                 margin: '4px 0',
//                 padding: '12px 16px',
//                 borderRadius: '4px',
//                 textTransform: 'none',
//                 fontWeight: 'medium',
//                 transition: 'all 0.3s ease',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 '&.Mui-selected': {
//                   backgroundColor: 'orange',
//                   color: 'white',
//                   width: '200px !important',
//                 },
//                 '&:hover': {
//                   backgroundColor: 'orange',
//                   color: 'white',
//                   width: '200px !important',
//                 },
//               },
//               '& .MuiTabs-indicator': {
//                 display: 'none',
//               },
//             }}
//           >
//             {tabLabels.map((label, index) => (
//               <Tab
//                 key={index}
//                 label={label}
//                 disableRipple
//                 sx={{
//                   textAlign: 'center',
//                 }}
//               />
//             ))}
//           </Tabs>



       
//           <TabPanel value={selectedTab} index={0}>
//             <Esconfiles />
//           </TabPanel>
//           <TabPanel value={selectedTab} index={1}>
//             <Magicut />
//           </TabPanel>
//           <TabPanel value={selectedTab} index={2}>
           
//             <Box sx={{ 
//           flexGrow: 1, 
//           height: { xs: '600px', sm: 'auto' }, 
//           overflowY: 'auto'
//         }}>
//           <h1>Abracut</h1>
//                        <div className='responive_othercut' data-aos="fade-up"
//      data-aos-duration="5000"  style={{width:"100%"}}>
         
//       <div className='chart-container 'style={{textAlign:"justify"}}>
        
//         <h3 className='btn btn-outline-primary' >1. Abrasive Rolls</h3>
  
//   <a href="#" className="image left">
    
//     <img src="./img/productimageS58.png" alt="" />
//   </a>
  
//   <p><strong><u>ALOX BX 99 CLOTH ROLLS:</u></strong><br />
//     Backing: Cloth polycot; Grit Size: P-36 to P-200; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close<br />
//     <strong>Applications:</strong> Rough grinding of hardened surface
//   </p>
  
//   <p><strong><u>ALOX BX 72 CLOTH ROLLS:</u></strong><br />
//     Backing: Cloth X wt; Grit Size: P-60 to P-600; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close / Open<br />
//     <strong>Applications:</strong> Stainless steel grinding & finishing
//   </p>
  
//   <p><strong><u>ALOX / SILICARB BX-45 CLOTH ROLLS:</u></strong><br />
//     Backing: Cloth Y wt & X wt; Grit Size: P-24 to P-600; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close<br />
//     <strong>Applications: Alox</strong> Heavy grinding on metals, <strong>Silicarb:</strong> Grinding of metals, non-metals, and glass
//   </p>
  
//   <p><strong><u>ALOX / SILICARB BX-63 CLOTH ROLLS:</u></strong><br />
//     Backing: Cloth X wt; Grit Size: P-24 to P-600; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close / Open<br />
//     <strong>Applications: Alox</strong> Grinding / Finishing metals and wood, <strong>Silicarb:</strong> Grinding of non-metals and glass
//   </p>
  
//   <p><strong><u>ALOX ECONOMY RGR ROLLS:</u></strong><br />
//     Backing: Cloth J wt; Grit Size: P-60 to P-320; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close / Open<br />
//     <strong>Applications:</strong> Low speed / hand grinding / lapping
//   </p>
  
//   <p><strong><u>ALOX TIGER CLOTH ROLLS:</u></strong><br />
//     Backing: Cloth J wt; Grit Size: P-36 to P-400; Width: 13 mm to 915 mm; Standard Length: 50 meters; Grain Coating: Close / Open<br />
//     <strong>Applications:</strong> Manual finishing of surfaces in tanneries, leather goods, and wood etc.
//   </p>
   
//         </div>
  
//         <div className='chart-container resposnive_other_width' style={{textAlign:"justify"}}>
           
//         <h3 className='btn btn-outline-primary' >2. Special Purpose Products</h3>
  
//   <a href="#" className="image left">
  
//     <img src="./img/productimageS58-1.png" alt="" />
//   </a>
  
//   <p><strong><u>ALOX / SILICARB SLEEVES:</u></strong><br />
//     <strong>Applications:</strong> Internal grinding/polishing of cylinders, shoe uppers, tyres & welding rods, removal of welding burrs of heavy jobs, structural fabrication, dairy equipment.
//   </p>
  
//   <p><strong><u>ALOX / SILICARB CLOTH DISCS:</u></strong><br />
//     Applications: Quantometer, wooden handicrafts and wooden patterns. Surface preparation prior to plating, painting, and coating.
//   </p>
  
//   <p><strong><u>ALOX / SILICARB VELCRO DISCS:</u></strong><br />
//     Applications: Finishing of metallic / non-metallic / wooden surfaces.
//   </p>
  
//   <p><strong><u>ALOX / ZIRCONITE FIBER DISCS:</u></strong><br />
//     Applications: Removal of welding burrs, heavy grinding operations.
//   </p>
  
//   <p><strong><u>ALOX / SILICARB CLOTH/PAPER SHEETS:</u></strong><br />
//     Applications: Preparation of surfaces for painting and general-purpose abrasive.
//   </p>
  
//         </div>
  
//         <div className='chart-container resposnive_other_width' style={{textAlign:"justify"}}>
//               <h3 className='btn btn-outline-primary' >3. Abrasive Belts</h3>
  
//         <a href="#" className="image left">
         
//           <img src="./img/productimageS59.png" alt="Abrasive Belts" />
//         </a>
  
//         <p><strong>Width:</strong> 15 mm to 600 mm; <strong>Length:</strong> 300 mm to 80000 mm<br />
//           <strong>Joints:</strong> Standard lap and splicing tape (butt joint).<br />
//           <strong>Coating:</strong> Close coating and open coating<br />
//           <strong>Interlining:</strong> By using X-weight cloth<br /><br />
//           <strong>Abbreviations:</strong><br />
//           <strong>Alox:</strong> Aluminium Oxide; <strong>Silicarb:</strong> Silicon carbide; <strong>BX 99 / BX 45:</strong> Resin over resin; <strong>BX 63:</strong> Resin bond
//         </p>
//         </div>

//       </div>
//       </Box>
// </TabPanel>
//       <TabPanel value={selectedTab} index={3}>
//             <Ff />
//           </TabPanel>
//           <TabPanel value={selectedTab} index={4}>
//             <Typography variant="h6">
//             <VBelt />
//             </Typography>
//           </TabPanel>
//           <TabPanel value={selectedTab} index={5}>
            
//           </TabPanel>
       
//         </Box>
//       </div>
//       </div>
//       </div>


//     <div className="container-fluid about py-5">
//   <div className="container py-5">
//    <OurPartners/>
//   </div>
// </div>
//     </>
//   );
// };

// // TabPanel component to display content based on active tab
// const TabPanel = ({ children, value, index }) => {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//      style={{height:"150px"}}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       )}


//     </div>
//   );
// };
// export default OtherCut;


import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";

const OtherCut = () => {
  return (
    <div>
        <div className="container-fluid bg-breadcrumb_othercutting">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h2 style={{color:"black"}}>OTHER PRODUCTS</h2>
                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px"}}>
                     <li class=""><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                     <li class="breadcrumb-item active text-primary"><strong>Other Products</strong></li>
                 </ol>    
            </div>
      </div>
      
      
      <div className='my_chart'>
        <h1 style={{fontFamily:"Crimson Pro, serif"}}>Spares</h1>
        <p><strong>Mechanical, Electrical, Electronics and Hydraulics for all kinds of Spares for Circular Saw & Band saw Machines</strong></p>
      </div>
    </div>
  )
}

export default OtherCut
