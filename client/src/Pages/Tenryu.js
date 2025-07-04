import React,{useEffect} from 'react';
import styled from '@emotion/styled';
import { FaArrowCircleRight } from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from '@mui/icons-material/Phone';
import { CiSaveDown2 } from "react-icons/ci";
import './Tenryu.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import OurPartners from '../Components/OurPartners';
import { MdOutlineDoubleArrow } from "react-icons/md";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 24px;
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
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
const Card = styled.div`
  background-color: #f0f8ff;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  padding: 24px;
`;

const Title = styled.h2`
  color: #004a62;
  margin-bottom: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  color: #333;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHead = styled.thead`
  background-color: #87c6fa;
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  color: white;
  background-color: #87c6fa;
`;


const Tenryu = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  useEffect(() => {
    AOS.init();

  }, []);

  return (
    <>
    <div class="container-fluid bg-breadcrumb_tenryu">
    <div class="container text-center py-5" style={{maxWidth: "900px", }}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s" style={{marginTop:'170px'}}>
                    <li class=""><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong>Tenryu</strong></li>
                </ol>    
            </div>
        </div>

<div className="paragraph-container">
      <div className="hardcastel-right-column">
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
      <h2 style={{textAlign:"left",color:"#0f253B"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Tenryu</strong></h2>
      <a href="./img/tenryu.pdf" download="tenryucatalog">
        <button className='btn btn-outline-primary btn-page-pulse'><CiSaveDown2/> Catalog Download</button>    
      </a>
  
    </div>

      
        <p data-aos="fade-up" className='chart-container' style={{textAlign:"justify"}}>A company focused on sawing excellence, TENRYU boasts the best circular saw blades, from HSS to carbide tipped circular saw blades. 
<span style={{color:"#1976d2",fontWeight:"bold"}}> TENRYU mission is to deliver products that match newly developed materials and advanced cutting conditions. </span>
We begin a cutting test by using a testing machine from a pre-production stage of a work material. We work closely with our customers to single out the most suitable tooth tip material, or to develop the tooth tip material that best suits the properties of the work material. Through these trial cutting sessions, we are able to suggest the most suitable cutting parameters, and to deliver the best saw for each individual user.</p>
      <div className="img_container_tenryu">
            <div className='chart-container' >
              <img src="./img/Tenryu1.png" alt="" />  
              <img src="./img/Tenryu2.png" alt="" />
           
</div>
         
            <div className='chart-container' >
                <img src="./img/Tenryu3.png" alt="" /> 
                <img src="./img/Tenryu4.png" alt="" /> 
            </div>
          </div>
           <br/>



<div class="products_contentinnner">

			

<h1 style={{color:"#0f253B",fontFamily:"Crimson Pro, serif"}} >HSS Tools</h1>

<div class="container-fluid blog py-5 resposnive_home_about">
    <div class="container py-5">
        <div class="row g-4">
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="./img/metal_tin1.jpeg" class="img-fluid w-100" alt="" style={{objectFit:"contain"}}/>
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">TiN</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i>PVD coated</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i>HV 2200-2400</p>
                        </div>
                        <p class="mb-4">
                        Only a few microns thick, the PVD coating increases surface hardness and, along with the low friction coefficient, prevents built up edge. Also, the feed speed can be improved by about 50% compared to non-coated products, thanks to the high thermal resistance. As a result, cutting time is reduced, the saw needs to be replaced less often, and its life is also lengthened.
                        </p>
                        <p>・PVD coated<br/>
						・Surface handness：HV 2200-2400<br/>
						・Oxidizing temperature：600℃<br/>
						・Friction coefficient：0.55<br/>
					 ・Application：Mild steel, Medium hardness steel</p>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div class="blog-item">
                    <div class="blog-img">
                        <a href="https://tenryu-saw.com/en/ichiran/hamono/hss/hss01/270/"><img width="148" height="148" src="./img/metal_titain-2.jpeg" class="img-fluid w-100" alt="TiAlN" loading="lazy" title="TiAlN"/></a>
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">TiAlN</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> PVD coated</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> HV3300-3500</p>
                        </div>
                        <p>This blade is optimal for cutting high-tensile steel material or stainless steel. Thanks to the high thermal resistance and low friction coefficient, high-speed dry cutting is supported.</p>
					<p>・PVD coated<br/>
						・Surface handness：HV3300-3500<br/>
						・Oxidizing temperature：800℃<br/>
						・Friction coefficient：0.60<br/>
					・Application：High hardness steel, Stainless steel, titanium steel	</p>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item">
                    <div class="blog-img">
                    <a href="https://tenryu-saw.com/en/ichiran/hamono/hss/hss01/270/"><img width="148" height="148" src="./img/metal_crn-3.jpeg" class="img-fluid w-100" alt="TiAlN" loading="lazy" title="TiAlN"/></a>
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">CrN</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> PVD coated</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> HV2500-2900</p>
                        </div>
                        <p>The advantages of this PVD coating are coat thickness, high surface hardness, and a low friction coefficient. This saw is optimal for cutting sticky materials where gumming happens easy, such as non-ferrous metals.</p>
					<p>・PVD coated<br/>
						・Surface handness：HV2500-2900<br/>
						・Oxidizing temperature：700℃<br/>
						・Friction coefficient：0.30<br/>
					・Application：Nonferrous metal such as Cast iron, Aluminum and Copper	</p>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item">
                    <div class="blog-img">
                    <a href="https://tenryu-saw.com/en/ichiran/hamono/hss/hss01/277/"><img width="148" height="148" src="./img/metal_ov_4.jpeg" class="img-fluid w-100" alt="TiAlN" loading="lazy" title="TiAlN"/></a>
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">OV</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i>PVD coated</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i>HV900</p>
                        </div>
                        <p>The entire blade is steam treated and has a black oxide (Fe3 O4) coating wﾎth oil-bearing properties.<br/>
				    Use it for ordinary material cutting, except for non-ferrous metals.</p>
					<p>・Surface handness：HV900<br/>
					  ・Friction coefficient：0.65<br/>
					  ・Application：Common	steel	excerpt	nonferrous	metal</p>
                       
                    </div>
                </div>
            </div>

            <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                <div class="blog-item">
                    <div class="blog-img">
                    <a href="https://tenryu-saw.com/en/ichiran/hamono/hss/hss01/279/"><img width="148" height="148" src="./img/metal_crn-3.jpeg" class="img-fluid w-100" alt="TiAlN" loading="lazy" title="TiAlN"/></a>
                    </div>
                    <div class="blog-heading ms-4">
                        <a href="#" class="h4 mb-0 p-4">White</a>
                    </div>
                    <div class="blog-content bg-light p-4">
                        <div class="d-flex justify-content-between mb-4">
                            <p class="mb-0 small"><i class="fa fa-calendar me-2"></i> PVD coated</p>
                            <p class="mb-0 small"><i class="fa fa-tag me-2"></i> HV2500-2900</p>
                        </div>
                        <p>This blade has no surface treatment and is mainly used for cutting non-ferrous metals.</p>
                  <p>・Surface handness：HV750-850<br/>
                    ・Application：Nonferrous metal such as Aluminum and Copper</p>
                  <p class="youtopic">&nbsp;</p>
                       
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>



<br class="clearfloat"/>
</div>
{/* <div className="container-fluid about py-5">
  <div className="container py-5">
   <OurPartners/>
  </div>
</div> */}
    </div>
    </div>
    </>
  );
};

export default Tenryu;