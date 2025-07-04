
import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

import { FaArrowCircleRight } from "react-icons/fa";
import { orange } from '@mui/material/colors';
import { Padding } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

export default function Solar() {
    var settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const diamondDressersData = [
    {
      no: 1,
      size: 'MT-0',
      ctWt: ['0.05', '0.07', '0.10', '0.15', '0.20', '0.25'],
      image: './img/TADD-StandardsC31.jpg',
    },
    {
      no: 2,
      size: 'MT-1',
      ctWt: ['0.05', '0.07', '0.10', '0.15', '0.20', '0.25'],
      image: './img/TADD-StandardsC32.jpg',
    },
    {
      no: 3,
      size: '1:20 Taper',
      ctWt: ['0.05', '0.07', '0.10', '0.15', '0.20', '0.25'],
      image: './img/TADD-StandardsC33.jpg',
    },
    {
      no: 4,
      size: '1:13:15',
      ctWt: ['0.05', '0.10', '0.15', '0.20'],
      image: './img/TADD-StandardsC34.jpg',
    },
    {
      no: 5,
      size: 'Vonmard',
      ctWt: ['0.05', '0.08', '0.10', '0.15', '0.20'],
      image: './img/TADD-StandardsC35.jpg',
    },
    {
      no: 6,
      size: '4 x 20 mm',
      ctWt: ['0.05', '0.08'],
      image: './img/TADD-StandardsC36.jpg',
    },
    {
      no: 7,
      size: '6 x 25',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC37.jpg',
    },
    {
      no: 8,
      size: '8 x 27 mm',
      ctWt: ['0.05', '0.10', '0.15', '0.20'],
      image: './img/TADD-StandardsC38.jpg',
    },
    {
      no: 9,
      size: '8 x 30 mm',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC39.jpg',
    },
    {
      no: 10,
      size: '8 x 25 mm',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC310.jpg',
    },
    {
      no: 11,
      size: '10 x 30 mm',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC311.jpg',
    },
    {
      no: 12,
      size: '11 x 30 mm',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC312.jpg',
    },
    {
      no: 13,
      size: '14 x 40 mm',
      ctWt: ['0.05', '0.08', '0.10'],
      image: './img/TADD-StandardsC313.jpg',
    },
    {
      no: 14,
      size: '48-4105',
      ctWt: ['0.05'],
      image: './img/TADD-StandardsC314.jpg',
    },
    {
      no: 15,
      size: '1/8" x 5/8"',
      ctWt: ['0.03'],
      image: './img/TADD-StandardsC315.jpg',
    },
    {
        no: 16,
        size: '1/8" x 0.93"',
        ctWt: ['0.03'],
        image: './img/TADD-StandardsC316.jpg',
      },
      {
        no: 17,
        size: '1/8" x 1"',
        ctWt: ['0.03'],
        image: './img/TADD-StandardsC317.jpg',
      },
      {
        no: 18,
        size: '1/4" x 1"',
        ctWt: ['0.05'],
        image: './img/TADD-StandardsC318.jpg',
      },
      {
        no: 19,
        size: '1/4" x 2"',
        ctWt: ['0.05'],
        image: './img/TADD-StandardsC319.jpg',
      },
      {
        no: 20,
        size: '5/6" x 1-1/4"',
        ctWt: ['0.03', '0.08', '0.10'],
        image: './img/TADD-StandardsC320.jpg',
      },
      {
        no: 21,
        size: '7/16" x 2"',
        ctWt: ['0.03', '0.08', '0.10'],
        image: './img/TADD-StandardsC321.jpg',
      },
  ];

  const setting = {
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

  const shapingToolsData = [
    {
      type: 'Diaform',
      catNo: ['SF 4125', 'SF 4250', 'SF 4500'],
      radius: ['0.125', '0.250', '0.500'],
      image: './img/ST-StandardsC31.jpg',
    },
    {
      type: 'Diaform',
      catNo: ['SF 4125', 'SF 4250', 'SF 4500'],
      radius: ['0.125', '0.250', '0.500'],
      image: './img/ST-StandardsC32.jpg',
    },
    {
      type: 'Diaform',
      catNo: ['SF 6125', 'SF 6250', 'SF 6500'],
      radius: ['0.125', '0.250', '0.500'],
      image: './img/ST-StandardsC33.jpg',
    },
    {
      type: 'Diaform',
      catNo: ['SF 6125', 'SF 6250', 'SF 6500'],
      radius: ['0.125', '0.250', '0.500'],
      image: './img/ST-StandardsC34.jpg',
    },
    {
      type: 'Diaform',
      catNo: ['SF 6632', 'SF 6633', 'SF 6672', 'SF 6673'],
      radius: ['3/8 x 2. ½', '3/8 x 3', '7/16 x 2. ½', '7/16 x 3'],
      image: './img/ST-StandardsC35.jpg',
    },
  ];
  const shapingToolsData1 = [
    {
      type: 'Copying',
      catNo: 'Fortuna',
      image: './img/ST-StandardsC36.jpg',
    },
    {
      type: 'Copying',
      catNo: 'Schaudt',
      image: './img/ST-StandardsC37.jpg',
    },
    {
      type: '60° Lapped Dressing Tool',
      catNo: 'Diamonds are ground and lapped to precise angles. Tolerance: Centerset to TIR ± .002. Specify ∅ A & B',
      image: './img/ST-StandardsC38.jpg',
    },
  ];

  const clusterDressersData = [
    {
      size: '5/D',
      catWt: '0.75',
      image: './img/CD-StandardsC31.jpg',
    },
    {
      size: '7/D',
      catWt: '1.05',
      image: './img/CD-StandardsC32.jpg',
    },
    {
      size: '9/D',
      catWt: '1.00',
      image: './img/CD-StandardsC33.jpg',
    },
    {
      size: '12/D',
      catWt: '1.00',
      image: './img/CD-StandardsC34.jpg',
    },
  ];

  return (
    <div className='div-container'>
      <div className="container-fluid bg-breadcrumb_solar">
      <div class="container text-center py-5" style={{maxWidth: "900px"}}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s" style={{marginTop:'170px'}}>
                    <li class=""><a href="/" ><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong>Solar</strong></li>
                </ol>     
            </div>
       </div>
      
       <div className="container-fluid" style={{paddingLeft:"0px",marginBottom:"20px"}}>
       <div className='container' style={{paddingLeft:"0px"}}>
        
       <div style={{paddingTop:"20px"}}>
  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
  <h2 style={{textAlign:"left",color:"#0f253B",fontFamily:"Crimson Pro, serif"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Solar Diamond</strong></h2>
  {/* <a href="">
  <button className='btn btn-outline-primary btn-page-pulse' ><CiSaveDown2/>  Catalog Download</button>
  </a> */}
    </div>
    </div>

    <Tabs defaultValue={1}>
      <TabsList>
        <Tab value={1}>Diamond Dressers</Tab>
        <Tab value={2}>Honing Stone</Tab>
        <Tab value={13}>PCD & PCBN</Tab>
        <Tab value={3}>Electroplated Products</Tab>
        <Tab value={4}>Diamond Lapping Products</Tab>
        <Tab value={5}>Solar Diamond Wheels</Tab>
        <Tab value={6}>Single Point Diamond</Tab>
        <Tab value={7}>Throw-Away Diamond Dressers</Tab>
        <Tab value={8}>Shaping Tools</Tab>
        <Tab value={9}>Cluster Dressers</Tab>
        {/* <Tab value={10}>Multipoint Indexable Crown</Tab> */}
        {/* <Tab value={11}>Multipoint Disc</Tab> */}
        <Tab value={12}>Diamond Grit Impregnated..
        </Tab>
       
      </TabsList>
      
      <TabPanel value={1}>
    
       <section>
   <h3 style={{textAlign:"left"}}>1. Diamond Dressers</h3>
   <div className="paragraph-container-solar">
    
       <Slider {...settings} style={{height:"100px",width:"180px"}}>
       <div>
       <img src="./img/productimageS42.png" alt="Diamond Dressers" style={{borderRadius:"5px"}}/>
       </div>
       <div>
       <img src="./img/productimageS43.png" alt="Diamond Dressers" style={{borderRadius:"5px"}}/>
       </div>
       <div>
       <img src="./img/productimageS44.png" alt="Diamond Dressers" style={{borderRadius:"5px"}}/>
       </div>    
     </Slider>

     <div className="text-container-solar">
       <p>
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Single Point <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> MCD Single Point <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> CVD Single Point <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Grit Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Cluster Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Crown Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Hex-Disc Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Chisel Dresser <br />
         </p>
         <div className='solardiamnd_paragraph_Dressers'>
           <p>
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> MD-20 Roller <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Ball Wheel Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Blade Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> MCD Blade Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> CVD Blade Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Shaped CVD Blade Dresser <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Diamond Gauging Point <br />
         <FaArrowCircleRight style={{ color: "#0f253b", marginRight: "7px" }} /> Indenter (Natural Diamond & MCD) <br />
         </p>
         </div>
   
     </div>
   </div>
 </section>

  
      </TabPanel>
      <TabPanel value={2}>
      <section>
        <h3 style={{textAlign:"left"}}>2. Honing Stone</h3>
         <div className="paragraph-container-solar">
         <div >
          
          
           <Slider {...settings} style={{width:"180px"}}>
             <div>
             <img src="./img/productimageS45.png" alt="Honing Stone" style={{borderRadius:"5px"}}/>
             </div>
             <div>
             <img src="./img/productimageS46.png" alt="PCD & PCBN Cutting Tools" style={{borderRadius:"5px"}}/>
             </div>   
           </Slider>

         </div>
         <div className="text-container-solar">
         <p>
           <strong>Metal Bond Diamond & CBN Stone:</strong> <br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Standard Stone<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Compact Stone<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Solid Stone<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Slotted Stone<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Stone with Shoe<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Special Stone <br />
         </p>
         <div className='solardiamnd_paragraph'>
         <p>
           <strong></strong> <br />
          <br />
          <br />
        <br />           <br />
         <br />           <br />
         </p>
         </div>
         </div>
         </div>
       </section>

      </TabPanel>
      <TabPanel value={3}>

      <section>
         <h3 style={{textAlign:"left"}}>4. Electroplated Products</h3>
         <div className="paragraph-container-solar">
         <div >
         
           <Slider {...settings} style={{width:"180px"}}>
             <div>
             <img src="./img/productimageS47.png" alt="Electroplated Products" style={{borderRadius:"5px"}}/>
             </div>
             <div>
             <img src="./img/productimageS48.png" alt="Electroplated Products" style={{borderRadius:"5px"}}/>
             </div>   
             <div>
             <img src="./img/productimageS49.png" alt="Electroplated Products" style={{borderRadius:"5px"}}/>

             </div>
           </Slider>

         </div>
         <div className="text-container-solar">
         <p>
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Diamond & CBN File<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Diamond CBN ID Grinding Wheel<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Diamond Cut-Off Wheel<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Special Wheel<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Special Shape Tool<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Electroplated Grinding Pins<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Electroplated Diamond Needle Files<br />
         </p>
         </div>
         </div>
       </section>
       <div className="box post">
      <h3>Multipoint Disc</h3>


      <a href="#" className="image left">
        <img src="./img/productimageS189.png" alt="Multipoint Disc" />
      </a>

       <div style={{textAlign:"justify"}}>
 
      <p>
        Multipoint Disc dressers are normally used in small grinding wheels on internal grinding machines. The diamonds are set evenly in rows across the face of the disc. First-class needle shape diamonds are used, set in a special sintered bond. Multipoint disc dressers, except that after each row of diamonds has been used, new points can be put into operation simply by rotating the disc slightly.
      </p>

      <p>
        An ample supply of coolant and a depth of the cut of 0.02 - 0.03 mm max are prerequisites for long tool life. Multipoint disc dressers can be used at any angle and therefore in any application.
      </p>

      <p>
        To optimize the life of multipoint disc-type dressers, we recommend that the complete disc be turned 180° from time to time to utilize the self-sharpening effect produced by wear.
      </p>
      </div>

  
      <table className="info-table" width="100%" border="0" cellPadding="1" cellSpacing="1" align="center">
        <thead>
          <tr bgcolor="#004a62">
            <th colSpan="5" align="center">
              <strong>
                <font size="2" color="#ffffff">MULTIPOINT DISC</font>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="#ECF2F8">
            <th align="center">
              <strong>
                <font size="2" color="#000000">CAT. NO.</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">CARAT NO.</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">DIMENSIONS</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">HOLDER TYPE</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">RECOMMENDATIONS</font>
              </strong>
            </th>
          </tr>

          <tr bgcolor="#F9FCFE">
            <td align="center">
              <strong>
                <font size="2" color="#000000">MD 20</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">2.00</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC31.jpg" alt="Multipoint Disc MD 20 Dimensions" />
              </a>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC32.jpg" alt="Multipoint Disc MD 20 Holder Type" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">FOR DRESSING OF GRINDING WHEEL WITH STRAIGHT WORKING FACES</font>
              </strong>
            </td>
          </tr>

          <tr bgcolor="#ECF2F8">
            <td align="center">
              <strong>
                <font size="2" color="#000000">MD 30</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">3.00</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC33.jpg" alt="Multipoint Disc MD 30 Dimensions" />
              </a>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC34.jpg" alt="Multipoint Disc MD 30 Holder Type" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">FOR DRESSING OF GRINDING WHEEL WITH STRAIGHT WORKING FACES</font>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

      </TabPanel>
      <TabPanel value={4}>
      <section>
         <h3 style={{textAlign:"left"}}>5. Diamond Lapping Products</h3>
         <div className="paragraph-container-solar">
         <div >
           <img src="./img/productimageS50.png" alt="Diamond Lapping Products" />
         </div>
         <div className="text-container-solar">
         <p>
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Diamond Paste<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Liquid Diamond<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> OS Fluid<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Polishing Cloth<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Lapping Oil<br />
         </p>
         </div>
         </div>
       </section>
      </TabPanel>
      <TabPanel value={5}> 
        <section>
         <h3 style={{textAlign:"left"}}>6. Solar Diamond Wheels</h3>
         <div className="paragraph-container-solar">
         <div >
         
           <Slider {...settings} style={{width:"180px"}}>
             <div>
             <img src="./img/productimageS61.png" alt="Solar Diamond Wheels" style={{borderRadius:"5px"}}/>
             </div>
             <div>
             <img src="./img/productimageS62.png" alt="Solar Diamond Wheels" style={{borderRadius:"5px"}}/>
             </div>   
           </Slider>

         </div>
         <div className="text-container-solar">
         <p>
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Precision grinding<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Sharpening cutting tools<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Finishing hard materials like ceramics<br />    
        <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> glass<br />
        
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> High precision edge cutting<br />
<FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Cutting hard alloys and composites<br />
<FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Machining brittle materials like quartz and sapphire<br />

         </p>
         </div>
         </div>
       </section>
       </TabPanel>
      <TabPanel value={6}>
        <div className="box post">
      <h3 style={{textAlign:"left"}}>7. Single Point Diamond Dressers - Natural and Bruted Point</h3>
      
      <div className="content">
        <img src="./img/productimageS63.png" alt="Product" className="image left" />
        <div style={{textAlign:"justify"}}>
        <p>Single point "bruted diamond" dressers are made with selected "Congo Rounds" mounted in a matrix. A single cutting edge is presented to the grinding wheel.</p>
        <p>Diamonds for single point dressers are selected in accordance with quality and size. The question of using a superior, average or commercial quality depends on the grinding finish required and the machines and working parameters.</p>
        <p>We offer three grades, namely A, B, & C, for all the diamond sizes. Availability: 0.25 Ct to 5.00 Ct</p>
        <p>Natural Point Diamonds: The diamond points are naturally formed (not man-made like grades A, B & C). This is a gift of nature. Natural Point Diamond Dressers have high form retention properties. Availability: 0.10 Ct to 2.50 Ct</p>
        <p><strong>Guideline for single-point diamond dressers:</strong></p>
        </div>
        <ul style={{textAlign:"justify"}}>
          <li>Considerable care should be taken in mounting the diamond dresser in position. Diamonds are sensitive to shock and impact.</li>
          <li>The dresser must be clamped rigidly in place to avoid vibration once dressing begins.</li>
          <li>An ample supply of coolant should be directed at the diamond point before dressing begins, as the sudden application of coolant to the diamond once it has heated up can cause it to shatter.</li>
          <li>The diamond holder should not be set directly on the center of the grinding wheel but at an angle of 5-15° to the direction of the wheel so that it appears to be "trailing".</li>
          <li>At normal wheel peripheral speeds, dressing rates of approximately 20-25 m/sec can be achieved.</li>
          <li>The maximum depth of cut per dressing pass is 0.03 mm or on fine grit wheels, approximately 0.005-0.01 mm.</li>
          <li>The cross-feed rate depends on grit size and influences the quality of the finish. The lower the feed rate, the finer the surface finish.</li>
        </ul>
        
        {/* <p><strong>Feed Rates per Revolution:</strong></p>
        <table className="info-table">
          <thead>
            <tr>
              <th>Grinding Wheel Grit Size</th>
              <th>Feed Rate in MM/Rev</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30-46</td>
              <td>0.60 - 0.30</td>
            </tr>
            <tr>
              <td>50-120</td>
              <td>0.30 - 0.10</td>
            </tr>
            <tr>
              <td>180-320</td>
              <td>0.10 - 0.02</td>
            </tr>
          </tbody>
        </table>

        <p>Standard shanks 1/2" x 6" up to 2.50 cts. Standard shanks 5/8" x 6" over 2.50 cts. Shanks are also fabricated according to your blueprints. While ordering specify grade & ct. wt.</p>

        <table className="info-table">
          <thead>
            <tr>
              <th>CT. SIZE</th>
              <th>GRADE AVAILABLE</th>
              <th>DIMENSIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.25 - 0.75</td>
              <td>✓ ✓ ✓ ✓</td>
              <td><img src="./img/SPDD-StandardsC31.jpg" alt="Standard Dimensions" /></td>
            </tr>
            <tr>
              <td>1.00 - 2.50</td>
              <td>✓ ✓ ✓ ✓</td>
              <td><img src="./img/SPDD-StandardsC32.jpg" alt="Standard Dimensions" /></td>
            </tr>
            <tr>
              <td>3.00 - 5.00</td>
              <td>✗ ✓ ✓ ✓</td>
              <td><img src="./img/SPDD-StandardsC33.jpg" alt="Standard Dimensions" /></td>
            </tr>
          </tbody>
        </table> */}

      </div>
    </div>

    <div className="box post">
      <h3> Multipoint Indexable Crown</h3>

    
      <a href="#" className="image left" style={{width:"300px"}}>
        <img src="./img/productimageS67.png" alt="Multipoint Indexable Crown" />
      </a>

      <div style={{textAlign:"justify"}}>
      
      <p>
        A Multipoint Diamond Dressaer in which sharp natural diamonds are set in a circular crown at right angle to the operating plane. As soon as the diamonds on the indexed position are completely used up, the crown can be re-indexed on the shank for new points. Shanks for the crown are made to customer's specifications.
      </p>

      
      <p>
        <strong><i>Applications:</i></strong><br />
        • All types of large wheels where fine truing is considered important.<br />
        • Specially recommended for cylindrical grinders.
      </p>

   
      <a href="#" className="image left">
        <img src="./img/productimageV1.jpg" alt="Application of Multipoint Indexable Crown" />
      </a>

   
      <p>
        <strong><i>Advantages:</i></strong><br />
        • The diamonds can be completely used up and resetting is redundant.<br />
        • Since two or more diamonds come in contact with the wheel, the workload on the diamonds is divided, and the diamonds last longer.<br />
        • A large area of the wheel is dressed more efficiently in a relatively shorter time than a single point.<br />
        • As several points are in use simultaneously, the feed may be safely increased.<br />
        • Finer finish is obtained on the wheel due to the crystal shape of the diamonds employed.<br />
        • Can be used for side dressing.
      </p>

   
      <p>
        <strong><i>Sizes:</i></strong><br />
        • MIC-24 with 24 diamonds for wheel size up to 600 mm diameter wheel.<br />
        • MIC-36 with 36 diamonds for wheel size above 600 mm diameter wheel.
      </p>
      </div>

  
      <a href="#" className="image featured">
        <img src="./img/productimageH1.jpg" alt="Multipoint Indexable Crown Sizes" />
      </a>
    </div>

    </TabPanel>
      <TabPanel value={7}>
         <div className="box post">
      <h3 style={{textAlign:"left"}}>8. Throw-Away Diamond Dressers</h3>
      <div style={{textAlign:"justify"}}>
      <p>Throw-away type diamond dressers are made of small selected crystal shape or octahedral diamonds, mounted in a matrix. Only one cutting edge is presented to the grinding wheel.</p>
      <p>Diamonds for throw-away type diamond dressers are selected for their strength, degree of sharpness, and lack of detrimental flaws. The proper selection of size and quality appropriate for a given application requires qualified and experienced judgement.</p>
      <p>As the name suggests, it really is a throw-away dresser, meaning no maintenance and no re-setting of diamonds is required.</p>
      <p>These tools are used for truing and dressing small and medium-sized wheels. For larger wheels with small widths, they are used only in profile dressing applications.</p>
      <p>These tools are not suited to dress wheels with grit size coarser than 60 mesh.</p>
      </div>

      <table border="1" cellPadding="5" style={{ width: '100%', textAlign: 'center' }}>
        <thead style={{ backgroundColor: '#004a62', color: '#ffffff' }}>
          <tr>
            <th>No.</th>
            <th>Size</th>
            <th>CT. WT.</th>
            <th>Dimensions</th>
          </tr>
        </thead>
        <tbody>
          {diamondDressersData.map((dresser, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ECF2F8' : '#F9FCFE' }}>
              <td>{dresser.no}</td>
              <td>{dresser.size}</td>
              <td>{dresser.ctWt.join(', ')}</td>
              <td>
                <img src={dresser.image} alt={`Diamond Dresser ${dresser.no}`} style={{ width: 'auto' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </TabPanel>
      <TabPanel value={8}>
      <div className="box post">
      <h3 style={{textAlign:"left"}}>9. Shaping Tools</h3>

      <a href="#" className="image left">
        <img src="./img/productimageS65.png" alt="Shaping Tools" />
      </a>
       
       <div style={{textAlign:"justify"}}>
      <p>
        Profiling and copy dressing of grinding wheels make high demands on profile retention capability and thus on wear-resistance of the diamond tool.
      </p>

      <p>
        Wherever diamond blade type tools cannot meet these requirements due to the specific grinding wheel geometry, precision ground shaping tools are the solution. Shaping tools feature the unique "structure-cut" to ensure optimum tool life. They are manufactured only from the highest grade of natural diamonds and undergo stringent quality control during manufacturing.
      </p>

      <p>
        <strong><i>Important Points to Consider:</i></strong>
        <br />
        • Choose a diamond with the largest included angle and toughest geometric shape allowed by the profile requirements
        <br />
        • Use a drag angle, where possible, to maximize cutting edge life.
        <br />
        • Make sure that the tool is rigidly mounted.
        <br />
        • Follow the machine manufacturer's instructions and recommendations.
      </p>
      </div>

      <table border="1" cellPadding="5" style={{ width: '100%', textAlign: 'center' }}>
        <thead style={{ backgroundColor: '#004a62', color: '#ffffff' }}>
          <tr>
            <th>TYPE</th>
            <th>CAT NO.</th>
            <th>RADIUS IN INCHES</th>
            <th>DIMENSIONS</th>
          </tr>
        </thead>
        <tbody>
          {shapingToolsData.map((tool, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ECF2F8' : '#F9FCFE' }}>
              <td>{tool.type}</td>
              <td>{tool.catNo}</td>
              <td>{tool.radius}</td>
              <td>
                <a href="#" className="image center">
                  <img src={tool.image} alt={`Shaping Tool ${index + 1}`} style={{ width: '140px' }} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="box post">
      <table width="100%" border="0" cellPadding="1" cellSpacing="1" align="center">
        <thead>
          <tr style={{ backgroundColor: '#004a62' }}>
            <th colSpan="3" align="center">
              <strong>
                <font size="2" color="#ffffff">SHAPING TOOLS</font>
              </strong>
            </th>
          </tr>
          <tr style={{ backgroundColor: '#004a62' }}>
            <th width="10%" align="center">
              <strong>
                <font size="2" color="#ffffff">TYPE</font>
              </strong>
            </th>
            <th width="10%" align="center">
              <strong>
                <font size="2" color="#ffffff">CAT NO.</font>
              </strong>
            </th>
            <th width="60%" align="center">
              <strong>
                <font size="2" color="#ffffff">DIMENSIONS</font>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {shapingToolsData1.map((tool, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ECF2F8' : '#F9FCFE' }}>
              <td align="center">
                <strong>
                  <font size="2" color="#000000">{tool.type}</font>
                </strong>
              </td>
              <td align="center" style={{ verticalAlign: 'top' }}>
                <strong>
                  <font size="2" color="#000000">{tool.catNo}</font>
                </strong>
              </td>
              <td align="center">
                <a href="#" className="image center">
                  <img src={tool.image} alt={tool.type} style={{ width: '200px' }} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </TabPanel>
      <TabPanel value={9}>
        <div className="box post">
      <h3 style={{textAlign:"left"}}>10. Cluster Dressers</h3>
      <a href="#" className="image left">
        <img src="./img/productimageS66.png" alt="Cluster Dressers" />
      </a>

      <table width="100%" border="0" cellPadding="1" cellSpacing="1" align="center" className="info-table">
        <thead>
          <tr style={{ backgroundColor: '#004a62' }}>
            <th colSpan="3" align="center">
              <strong>
                <font size="2" color="#ffffff">CLUSTER DRESSERS</font>
              </strong>
            </th>
          </tr>
          <tr style={{ backgroundColor: '#004a62' }}>
            <th width="10%" align="center">
              <strong>
                <font size="2" color="#ffffff">SIZE</font>
              </strong>
            </th>
            <th width="10%" align="center">
              <strong>
                <font size="2" color="#ffffff">CAT WT.</font>
              </strong>
            </th>
            <th width="60%" align="center">
              <strong>
                <font size="2" color="#ffffff">DIMENSIONS</font>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {clusterDressersData.map((dreser, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ECF2F8' : '#F9FCFE' }}>
              <td align="center">
                <strong>
                  <font size="2" color="#000000">{dreser.size}</font>
                </strong>
              </td>
              <td align="center" style={{ verticalAlign: 'top' }}>
                <strong>
                  <font size="2" color="#000000">{dreser.catWt}</font>
                </strong>
              </td>
              <td align="center">
                <a href="#" className="image center">
                  <img src={dreser.image} alt={`Cluster Dresser ${dreser.size}`} style={{ width: '240px' }} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></TabPanel>
      {/* <TabPanel value={10}> 
        
        <div className="box post">
      <h3>10. Multipoint Indexable Crown</h3>

    
      <a href="#" className="image left">
        <img src="./img/productimageS67.png" alt="Multipoint Indexable Crown" />
      </a>

      <div style={{textAlign:"justify"}}>
      
      <p>
        A Multipoint Diamond Dressaer in which sharp natural diamonds are set in a circular crown at right angle to the operating plane. As soon as the diamonds on the indexed position are completely used up, the crown can be re-indexed on the shank for new points. Shanks for the crown are made to customer's specifications.
      </p>

      
      <p>
        <strong><i>Applications:</i></strong><br />
        • All types of large wheels where fine truing is considered important.<br />
        • Specially recommended for cylindrical grinders.
      </p>

   
      <a href="#" className="image left">
        <img src="./img/productimageV1.jpg" alt="Application of Multipoint Indexable Crown" />
      </a>

   
      <p>
        <strong><i>Advantages:</i></strong><br />
        • The diamonds can be completely used up and resetting is redundant.<br />
        • Since two or more diamonds come in contact with the wheel, the workload on the diamonds is divided, and the diamonds last longer.<br />
        • A large area of the wheel is dressed more efficiently in a relatively shorter time than a single point.<br />
        • As several points are in use simultaneously, the feed may be safely increased.<br />
        • Finer finish is obtained on the wheel due to the crystal shape of the diamonds employed.<br />
        • Can be used for side dressing.
      </p>

   
      <p>
        <strong><i>Sizes:</i></strong><br />
        • MIC-24 with 24 diamonds for wheel size up to 600 mm diameter wheel.<br />
        • MIC-36 with 36 diamonds for wheel size above 600 mm diameter wheel.
      </p>
      </div>

  
      <a href="#" className="image featured">
        <img src="./img/productimageH1.jpg" alt="Multipoint Indexable Crown Sizes" />
      </a>
    </div>
    </TabPanel> */}
      {/* <TabPanel value={11}> 
        
        <div className="box post">
      <h3>11. Multipoint Disc</h3>


      <a href="#" className="image left">
        <img src="./img/productimageS189.png" alt="Multipoint Disc" />
      </a>

       <div style={{textAlign:"justify"}}>
 
      <p>
        Multipoint Disc dressers are normally used in small grinding wheels on internal grinding machines. The diamonds are set evenly in rows across the face of the disc. First-class needle shape diamonds are used, set in a special sintered bond. Multipoint disc dressers, except that after each row of diamonds has been used, new points can be put into operation simply by rotating the disc slightly.
      </p>

      <p>
        An ample supply of coolant and a depth of the cut of 0.02 - 0.03 mm max are prerequisites for long tool life. Multipoint disc dressers can be used at any angle and therefore in any application.
      </p>

      <p>
        To optimize the life of multipoint disc-type dressers, we recommend that the complete disc be turned 180° from time to time to utilize the self-sharpening effect produced by wear.
      </p>
      </div>

  
      <table className="info-table" width="100%" border="0" cellPadding="1" cellSpacing="1" align="center">
        <thead>
          <tr bgcolor="#004a62">
            <th colSpan="5" align="center">
              <strong>
                <font size="2" color="#ffffff">MULTIPOINT DISC</font>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="#ECF2F8">
            <th align="center">
              <strong>
                <font size="2" color="#000000">CAT. NO.</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">CARAT NO.</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">DIMENSIONS</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">HOLDER TYPE</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">RECOMMENDATIONS</font>
              </strong>
            </th>
          </tr>

          <tr bgcolor="#F9FCFE">
            <td align="center">
              <strong>
                <font size="2" color="#000000">MD 20</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">2.00</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC31.jpg" alt="Multipoint Disc MD 20 Dimensions" />
              </a>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC32.jpg" alt="Multipoint Disc MD 20 Holder Type" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">FOR DRESSING OF GRINDING WHEEL WITH STRAIGHT WORKING FACES</font>
              </strong>
            </td>
          </tr>

          <tr bgcolor="#ECF2F8">
            <td align="center">
              <strong>
                <font size="2" color="#000000">MD 30</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">3.00</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC33.jpg" alt="Multipoint Disc MD 30 Dimensions" />
              </a>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/MD-StandardsC34.jpg" alt="Multipoint Disc MD 30 Holder Type" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">FOR DRESSING OF GRINDING WHEEL WITH STRAIGHT WORKING FACES</font>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </TabPanel> */}
      <TabPanel value={12}><div className="box post">
      <h3 style={{textAlign:"left"}}ss>11. Diamond Grit Impregnated Dressers</h3>

  
      <a href="#" className="image left">
        <img src="./img/productimageS190.png" alt="Diamond Grit Impregnated Dressers" />
      </a>

      <div style={{textAlign:"justify"}}>

 
      <p>
        Diamond grit impregnated dressers have been developed from multi-point dressers. In contrast to the latter, they are manufactured from diamond grit rather than a large number of small natural diamonds. The advantages of the diamond impregnated dresser lie in its exceptional sharpness, which results from sharp edges and points of the diamond grit.
      </p>
      <p>
        Diamond grit impregnated dressers are ideally suited to the following applications: dressing resin, vitreous and rubber bond, fine grit and even "grit-free" grinding wheels, as well as boron carbide grinding wheels, dressing single profile threaded and V-profile grinding wheels, and general dressing operations on centreless, cylindrical, and surface grinding machines.
      </p>
      <p>
        Diamond grit impregnated dressers are more economical due to their low initial cost and their resistance to shock and impact, which prevents shattering.
      </p>
      <p>
        Dressing times are reduced as higher feed rates can be used. There is an unlimited number of sharp, pull-out-free cutting edges contained in the crushed diamond grit.
      </p>
      <p>
        Diamond grit impregnated dressers demand greater care in selecting the correct dresser for a given application. The bond and diamond grit size used are both variable according to the type of grinding wheels to be dressed. The size of the diamond grit particles should be matched to the grit of the grinding wheel.
      </p>
      <p>
        <strong><i>Instructions for Use:</i></strong><br />
        Normal dressing speeds are used. A plentiful supply of coolant should be provided both before and during dressing to prolong dresser life. The diamond grit impregnated cutting face of the dresser should be set at an angle of 90° to the grinding wheel to be dressed, so that all the cutting edges of the diamond grit are able to make contact with the wheel face.
      </p>
      <p>
        The feed rates used may be double those used with single-point diamond dressers.
      </p>
 
      <a href="#" className="image left">
        <img src="./img/productimageS191.png" alt="Diamond Grit Impregnated Dressers Additional View" />
      </a>
      <p>
        The depth of cut should be as follows:<br />
        Finishing - Approx. 0.01 mm<br />
        Rough Grinding - Approx. 0.02 mm<br />
        <br />
        Note: While ordering, please specify 'D' &amp; 'L' dimensions &amp; bond.
      </p>
      <p>
        <strong>Long Life:</strong> Load is divided on many diamond particles in a tough, durable matrix.<br />
        <strong>No Resetting:</strong> In DGI, diamond particles are totally consumed, resulting in reduced inventory.
      </p>
      </div>
   
      <table className="info-table" width="100%" border="0" cellPadding="1" cellSpacing="1" align="center">
        <thead>
          <tr bgcolor="#004a62">
            <th colSpan="4" align="center">
              <strong>
                <font size="2" color="#ffffff">DIAMOND GRIT IMPREGNATED DRESSERS</font>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="#ECF2F8">
            <th align="center">
              <strong>
                <font size="2" color="#000000">CAT. NO.</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">DIAMOND SECTION</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">DIAMOND SIZE IN MICRONS</font>
              </strong>
            </th>
            <th align="center">
              <strong>
                <font size="2" color="#000000">BOND</font>
              </strong>
            </th>
          </tr>
          <tr bgcolor="#F9FCFE">
            <td align="center">
              <strong>
                <font size="2" color="#000000">TDC-4</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/DGID-StandardsC31.jpg" alt="Diamond Grit Impregnated Dressers TDC-4 Section" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">500</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">J</font>
              </strong>
            </td>
          </tr>

          <tr bgcolor="#ECF2F8">
            <td align="center">
              <strong>
                <font size="2" color="#000000">TDC-5</font>
              </strong>
            </td>
            <td align="center">
              <a href="#" className="image center">
                <img src="./img/DGID-StandardsC32.jpg" alt="Diamond Grit Impregnated Dressers TDC-5 Section" />
              </a>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">500</font>
              </strong>
            </td>
            <td align="center">
              <strong>
                <font size="2" color="#000000">J</font>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>"The Solar Diamond Company which Manufactures the Widest Range of Diamond Tools, is one of the Suppliers in the World"</h3>
    </div></TabPanel>

    <TabPanel value={13}>
    {/* <section>
      
        <h3>PCD & PCBN Cutting Tools</h3>
         <div className="paragraph-container-solar">
        
         <div className="text-container-solar">
         <p>
           <strong>PCD & PCBN Cutting Tools</strong> <br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> ISO Insert<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Brazed Tool<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Special Tool<br />           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Full Top PCD<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Solid PCBN <br />           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> PCD Dresser<br />
         </p>
         <div className='solardiamnd_paragraph'>
         <p>
           <strong></strong> <br />
           <br />
           <br />
         <br />           <br />
        <br />           <br />
         </p>
         </div>
         </div>
         </div>
       </section> */}

<section>
        <h3 style={{textAlign:"left"}}>3.PCD & PCBN Cutting Tools</h3>
         <div className="paragraph-container-solar">
         <div >
          
          
           <Slider {...settings} style={{width:"180px"}}>
             <div>
             <img src="./img/productimageS45.png" alt="Honing Stone" style={{borderRadius:"5px"}}/>
             </div>
             <div>
             <img src="./img/productimageS46.png" alt="PCD & PCBN Cutting Tools" style={{borderRadius:"5px"}}/>
             </div>   
           </Slider>

         </div>
         <div className="text-container-solar">
         <p>
           <strong>PCD & PCBN Cutting Tools</strong> <br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> ISO Insert<br />
           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Brazed Tool<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Special Tool<br />           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Full Top PCD<br />
         <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> Solid PCBN <br />           <FaArrowCircleRight style={{color:"#0f253b",marginRight:"7px"}}/> PCD Dresser<br />
         </p>
         <div className='solardiamnd_paragraph'>
         <p>
           <strong></strong> <br />
           <br />
           <br />
         <br />           <br />
         <br />           <br />
         </p>
         </div>
         </div>
         </div>
       </section>

      </TabPanel>
    </Tabs>
    </div>
    </div>


   {/* <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
    </div>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

// const Tab = styled(BaseTab)`
//   font-family: 'IBM Plex Sans', sans-serif;
//   color: white;
//   cursor: pointer;
//   font-size: 0.875rem;
//   font-weight: bold;
//   background-color: transparent;
//   width: 100%;
//   line-height: 1.5;
//   padding: 8px 12px;
//   margin: 6px;
//   border: none;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;

//   &:hover {
//     background-color: ${orange[400]};
//   }

//   &:focus {
//     color: #fff;
//     outline: 3px solid ${orange[200]};
//   }

//   &.${tabClasses.selected} {
//     background-color: #fff;
//     color: ${orange[600]};
//   }

//   &.${buttonClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   @media (max-width: 600px) {  /* For mobile screens */
//     font-size: 0.75rem;
//     padding: 6px 8px;
//     margin: 4px;
//   }
// `;

// const TabPanel = styled(BaseTabPanel)`
//   width: 100%;
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;

//   @media (max-width: 600px) {
//     font-size: 0.75rem;
//   }
// `;

// const TabsList = styled(BaseTabsList)(
//   ({ theme }) => `
//   min-width: 400px;
//   background-color: ${orange[500]};
//   border-radius: 12px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
//   box-shadow: 0px 4px 6px ${
//     theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
//   };

//   @media (max-width: 600px) {  /* For mobile screens */
//     flex-direction: column;   /* Stack items vertically */
//     min-width: 100%;          /* Adjust width to fit smaller screens */
//     padding: 8px;
//   }
//   `,
// );

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #1f93cf;  /* Default text color */
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: white;  /* Background is white */
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: 2px solid transparent; /* Default no border */
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    color: #67dd27; /* Text color changes to orange on hover */
    border-color: #67dd27; /* Add orange border on hover */
  }

  &:focus {
    color: #67dd27; /* Keep text orange when focused */
    outline: none;
    border-color: #67dd27; /* Orange border on focus */
  }

  &.${tabClasses.selected} {
    background-color: white; /* Light orange background when selected */
    color: #67dd27; /* Orange text when tab is selected */
    border-color: #67dd27; /* Orange border for selected tab */
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {  /* For mobile screens */
    font-size: 0.75rem;
    padding: 6px 8px;
    margin: 4px;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
  };

  @media (max-width: 600px) {  /* For mobile screens */
    flex-direction: column;   /* Stack items vertically */
    min-width: 100%;          /* Adjust width to fit smaller screens */
    padding: 8px;
  }
  `,
);
