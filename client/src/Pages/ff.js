import React,{useEffect} from 'react'
import './OtherCut.css';
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from '@mui/icons-material/Phone';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CiSaveDown2 } from "react-icons/ci";
import { useMediaQuery } from '@mui/material';
import { MdOutlineDoubleArrow } from "react-icons/md";


const Ff = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;


  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  useEffect(() => {
    AOS.init();

  }, []);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      
      <div className="container-fluid bg-breadcrumb_caltex">
        <div class="container text-center py-5" style={{maxWidth: "900px", }}>
                {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
    marginTop: "100px"}}>
                    <li ><a href="/"><strong>Home</strong></a><MdOutlineDoubleArrow/></li>
                    {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                    <li class="breadcrumb-item active text-primary"><strong>Caltex</strong></li>
                </ol>    
            </div>
        </div>

      <article class="box post" >
	
  <div className='ds-cat'>  
  {/* <div className="paragraph-container-cat">
  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
  <h2 style={{textAlign:"left",color:"#0f253B",marginLeft:"120px"}} ><strong style={{fontFamily:"Crimson Pro, serif"}}>Caltex</strong></h2>
  <a href="./img/caltex-catalogue.pdf" download="caltex-catalogue">
  <button className='btn btn-outline-primary btn-page-pulse cat-btn-sree' ><CiSaveDown2/>  Catalog Download</button>
  </a>
    </div>
    </div> */}
<div className="paragraph-container">
  <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
  <h2 style={{textAlign:"left",color:"#0f253B"}} data-aos="fade-right" ><strong style={{fontFamily:"Crimson Pro, serif"}}>Caltex</strong></h2>
  <a href="./img/caltex-catalogue.pdf" download="caltex-catalogue" >
  <button className='btn btn-outline-primary btn-page-pulse' ><CiSaveDown2/>  Catalog Download</button>
  </a>
    </div>
    </div>
	<div className="caltex-hand-tools my_chart">
      
      <div className='chart-container-cat'>
          <h1 style={{fontFamily:"Crimson Pro, serif"}}>Caltex Hand Tools</h1>
      <h2 style={{textAlign:"left",fontFamily:"Crimson Pro, serif"}} className='btn btn-outline-primary'>Caltex Hand Tools</h2>

<a href="#" className="image left">
  
  <img src="./img/productimageS69.png" alt="" />
</a>

<p style={{textAlign:"justify"}}>
  <strong>Umang Marketing</strong> is the distributor for Caltex hand tools which includes  
  <strong >
     Cut Off Wheel, Grinding Wheel, Flap Disc, Cup Brush, Diamond Blades, GC Wheel, Cup Wheel, Handsaw PVC & Wooden Handle, 
    Fiber Disc, Wood Cutting Blade, Files with Handle, Mason Square 2, Aluminium Try Square with Level, Oil Can, Plumbob, 
    Engineer's Try Square, Drill Bits, Hinges Bit, Jigsaw Blade, Granite Core Bit 2 in 1, Power Bit, Bimetal Hole Saw, Wood 
    Flat Bit, Allen Key Set, Wooden Handle, Sledge Hammer, Cold Chisel, Gurmala - 12" x 5", Karni, Jumper Set, Spirit Level, 
    Electrical Wires & Cables, LED Fittings, Screws, Nails, Bolts & Hooks, Drill Chuck, Angle Grinder Spanner, AB Washer, 
    PD Nut, Garden Shear, All Purpose Wooden Handle, Hacksaw Frame, HSS Bimetal Flexible Blade, Angle Grinder, Marble Cutter, 
    Impact Drill, Blower, Cut Off Machine, Rotary Hammer, Pliers, Wire Stripper & Cutter, PVC Grip, Power Tools Spares, 
    Adjustable Wrench, Scrapper, Abrasive Paper, Aviation Snip Cutter, Silicon Gun, Spanners & Wrenches, Flower Cutter, 
    Glass Cutter, Roll Paper, Dry Polishing Pad, Router Bits
  </strong> and more.
</p>

      </div>

      
     <div className='chart-container-cat' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
     <Box
      sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex',  height: isMobile ? '95vh' : '90vh' }}
    >
      {/* <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
      >
        <Tab label="Cut Off Wheel" {...a11yProps(0)} />
        <Tab label="Grinding Wheel" {...a11yProps(1)} />
        <Tab label="Flap Disc" {...a11yProps(2)} />
        <Tab label="Cup Brush" {...a11yProps(3)} />
        <Tab label="Diamond Blades" {...a11yProps(4)} />
        <Tab label="GC Wheel" {...a11yProps(5)} />
        <Tab label="Cup Wheel" {...a11yProps(6)} />
        <Tab label="Handsaw PVC & Wooden Handle" {...a11yProps(7)} />
        <Tab label="Fiber Disc, Fiber Disc Spare Cup & TCT with Mica Cutter" {...a11yProps(8)} />
        <Tab label="Wood Cutting Blade (TCT)" {...a11yProps(9)} />
        <Tab label="Files with Handle" {...a11yProps(10)} />
        <Tab label="Try Square, Oil Can & Plumbob" {...a11yProps(11)} />
        <Tab label="Drill Bits" {...a11yProps(12)} />
        <Tab label="Hinges Bit, Jigsaw Blade & Granite Core Bit 2 in 1" {...a11yProps(13)} />
        <Tab label="Power Bit & Bimetal Hole Saw" {...a11yProps(14)} />
        <Tab label="Wood Flat / Drill / Granite Core Bit & Wood Hole Saw Set" {...a11yProps(15)} />
        <Tab label="Drill Set, Magnetic Nut Setter & Drill Chuck Key" {...a11yProps(16)} />
        <Tab label="Allen Key Set" {...a11yProps(17)} />
        <Tab label="Handle / Sledge Hammer" {...a11yProps(18)} />
        <Tab label="Cold Chisel" {...a11yProps(19)} />
        <Tab label="Karni, Gurmala" {...a11yProps(20)} />
        <Tab label="Spirit Level " {...a11yProps(21)} />
        <Tab label="Electrical Wires & Cables " {...a11yProps(22)} />
        <Tab label="LED Light & Fitting " {...a11yProps(23)} />
        <Tab label="Screws, Nails, Bolts & Hooks, " {...a11yProps(24)} />
        <Tab label="Wooden Handle, Garden Shear, " {...a11yProps(25)} />
        <Tab label="Xtra Power & Premium Tools " {...a11yProps(26)} />
        <Tab label="Pliers " {...a11yProps(27)} />
        <Tab label="Power Tools Spares " {...a11yProps(28)} />
        <Tab label="Screw Driver, Adjustable " {...a11yProps(29)} />
        <Tab label="Abrasive Paper, Aviation Snip " {...a11yProps(30)} />
        <Tab label="Spanners & Wrenches " {...a11yProps(31)} />
        <Tab label="Flower Cutter, Glass Cutter & Roll Paper" {...a11yProps(32)} />
        <Tab label="Dry Polishing Pad, Wood Hole Saw & Chisel" {...a11yProps(33)} />
      </Tabs> */}
      <Tabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    sx={{ 
      borderRight: 1, 
      borderColor: 'green', // Change border color to green
      width: '150px',
      height:"300px",
    }}
    style={{overflow:"initial"}}
  >
    <Tab label="Cut Off Wheel" {...a11yProps(0)} sx={{ minWidth: '150px' }} />
    <Tab label="Grinding Wheel" {...a11yProps(1)} sx={{ minWidth: '150px' }} />
    <Tab label="Flap Disc" {...a11yProps(2)} sx={{ minWidth: '150px' }} />
    <Tab label="Cup Brush" {...a11yProps(3)} sx={{ minWidth: '150px' }} />
    <Tab label="Diamond Blades" {...a11yProps(4)} sx={{ minWidth: '150px' }} />
    <Tab label="GC Wheel" {...a11yProps(5)} sx={{ minWidth: '150px' }} />
    <Tab label="Cup Wheel" {...a11yProps(6)} sx={{ minWidth: '150px' }} />
    <Tab label="Handsaw PVC & Wooden Handle" {...a11yProps(7)} sx={{ minWidth: '150px' }} />
    <Tab label="Fiber Disc, Fiber Disc Spare Cup & TCT with Mica Cutter" {...a11yProps(8)} sx={{ minWidth: '150px' }} />
    <Tab label="Wood Cutting Blade (TCT)" {...a11yProps(9)} sx={{ minWidth: '150px' }} />
    <Tab label="Files with Handle" {...a11yProps(10)} sx={{ minWidth: '150px' }} />
    <Tab label="Try Square, Oil Can & Plumbob" {...a11yProps(11)} sx={{ minWidth: '150px' }} />
    <Tab label="Drill Bits" {...a11yProps(12)} sx={{ minWidth: '150px' }} />
    <Tab label="Hinges Bit, Jigsaw Blade & Granite Core Bit 2 in 1" {...a11yProps(13)} sx={{ minWidth: '150px' }} />
    <Tab label="Power Bit & Bimetal Hole Saw" {...a11yProps(14)} sx={{ minWidth: '150px' }} />
    <Tab label="Wood Flat / Drill / Granite Core Bit & Wood Hole Saw Set" {...a11yProps(15)} sx={{ minWidth: '150px' }} />
    <Tab label="Drill Set, Magnetic Nut Setter & Drill Chuck Key" {...a11yProps(16)} sx={{ minWidth: '150px' }} />
    <Tab label="Allen Key Set" {...a11yProps(17)} sx={{ minWidth: '150px' }} />
    <Tab label="Handle / Sledge Hammer" {...a11yProps(18)} sx={{ minWidth: '150px' }} />
    <Tab label="Cold Chisel" {...a11yProps(19)} sx={{ minWidth: '150px' }} />
    <Tab label="Karni, Gurmala" {...a11yProps(20)} sx={{ minWidth: '150px' }} />
    <Tab label="Spirit Level " {...a11yProps(21)} sx={{ minWidth: '150px' }} />
    <Tab label="Electrical Wires & Cables " {...a11yProps(22)} sx={{ minWidth: '150px' }} />
    <Tab label="LED Light & Fitting " {...a11yProps(23)} sx={{ minWidth: '150px' }} />
    <Tab label="Screws, Nails, Bolts & Hooks" {...a11yProps(24)} sx={{ minWidth: '150px' }} />
    <Tab label="Wooden Handle, Garden Shear" {...a11yProps(25)} sx={{ minWidth: '150px' }} />
    <Tab label="Xtra Power & Premium Tools" {...a11yProps(26)} sx={{ minWidth: '150px' }} />
    <Tab label="Pliers" {...a11yProps(27)} sx={{ minWidth: '150px' }} />
    <Tab label="Power Tools Spares" {...a11yProps(28)} sx={{ minWidth: '150px' }} />
    <Tab label="Screw Driver, Adjustable" {...a11yProps(29)} sx={{ minWidth: '150px' }} />
    <Tab label="Abrasive Paper, Aviation Snip" {...a11yProps(30)} sx={{ minWidth: '150px' }} />
    <Tab label="Spanners & Wrenches" {...a11yProps(31)} sx={{ minWidth: '150px' }} />
    <Tab label="Flower Cutter, Glass Cutter & Roll Paper" {...a11yProps(32)} sx={{ minWidth: '150px' }} />
    <Tab label="Dry Polishing Pad, Wood Hole Saw & Chisel" {...a11yProps(33)} sx={{ minWidth: '150px' }} />
  </Tabs>
      <TabPanel value={value} index={0} >
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto',
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>1. Cut Off Wheel</h3>
      {/* <strong>Applications</strong>
      <ul>
        <li>Grinding and polishing of interiors of cylinders, cones, and pipes</li>
        <li>Grinding and polishing of curved and irregular surfaces of metals, non-metals, and wood</li>
        <li>Grinding and polishing of moulds and dies</li>
        <li>Removing of burrs and rust</li>
      </ul> */}

      <a href="#" className="image left">
        <i>Cut Off Wheel</i>
        <img className='caltex-cut-sree' src="./img/productimageS70.png" alt="" />
      </a>
      <a href="#" className="image left">
        <i>Cut Off Wheel</i>
        <img className='caltex-cut-sree' src="./img/productimageS71.png" alt="" />
      </a>
      <a href="#" className="image left">
        <i>Cut Off Wheel</i>
        <img className='caltex-cut-sree' src="./img/productimageS72.png" alt="" />
      </a>

      <p>Available Sizes: up to 16"<br />Very High Class Quality</p>
      </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>2. Grinding Wheel</h3>

<a href="#" className="image left">
  <i>Grinding Wheel</i>
  <img className='caltex-cut-sree'src="./img/productimageS73.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Grinding Wheel</i>
  <img className='caltex-cut-sree' src="./img/productimageS74.png" alt="" />
</a>

<p>Available Sizes: 4", 5" & 7"</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>3. Flap Disc</h3>

<a href="#" className="image left">
  <i>Flap Disc</i>
  <img className='caltex-cut-sree' src="./img/productimageS75.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Flap Disc</i>
  <img className='caltex-cut-sree' src="./img/productimageS76.png" alt="" />
</a>

<p>Available Sizes: 4" in different Grit</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>4. Cup Brush</h3>

<a href="#" className="image left">
  <i>Crimped Wire</i>
  <img className='caltex-cut-sree' src="./img/productimageS77.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Twisted Wire</i>
  <img className='caltex-cut-sree' src="./img/productimageS78.png" alt="" />
</a>
<a href="#" className="image left">
  <i>2 in 1</i>
  <img className='caltex-cut-sree' src="./img/productimageS79.png" alt="" />
</a>

<p>Available Sizes: 3" & 4"<br />Both M 10 and M 14 Nut, (Available in Crimped Also)</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>5. Diamond Blades</h3>

<a href="#" className="image left">
  <i>Tiger</i>
  <img className='caltex-cut-sree' src="./img/productimageS80.png" alt="" />
</a>
<a href="#" className="image left">
  <i>10C</i>
  <img className='caltex-cut-sree' src="./img/productimageS81.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Red</i>
  <img className='caltex-cut-sree' src="./img/productimageS82.png" alt="" />
</a>

<p>Available Sizes: Up to 14"</p><br/>

<a href="#" className="image left">
  <i>Turbo, Segment & FR</i>
  <img className='caltex-cut-sree' src="./img/productimageS83.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Black Magic</i>
  <img className='caltex-cut-sree' src="./img/productimageS84.png" alt="" />
</a>
<a href="#" className="image left">
  <i>CC</i>
  <img className='caltex-cut-sree' src="./img/productimageS85.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Grand</i>
  <img className='caltex-cut-sree' src="./img/productimageS86.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Super Thin Turbo</i>
  <img className='caltex-cut-sree' src="./img/productimageS87.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Super Thin Turbo</i>
  <img className='caltex-cut-sree' src="./img/productimageS88.png" alt="" />
</a>
</Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>6. GC Wheel</h3>

<a href="#" className="image left">
  <i>GC Wheel</i>
  <img className='caltex-cut-sree' src=".img/productimageS89.png" alt="" />
</a>
<a href="#" className="image left">
  <i>GC Wheel</i>
  <img className='caltex-cut-sree' src="./img/productimageS90.png" alt="" />
</a>

<p>Available Grits: 40, 60, 80 & 120</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>7. Cup Wheel</h3>

<a href="#" className="image left">
  <i>Turbo</i>
  <img className='caltex-cut-sree' src="./img/productimageS91.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Segmented</i>
  <img className='caltex-cut-sree' src="./img/productimageS92.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Rim</i>
  <img className='caltex-cut-sree' src="./img/productimageS93.png" alt="" />
</a>

<p>Available Sizes: 3" & 4"</p>
</Box>
      </TabPanel>

      <TabPanel value={value} index={7}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>8. Handsaw PVC & Wooden Handle</h3>

<a href="#" className="image left">
  <i>PVC Handle</i>
  <img className='caltex-cut-sree' src="./img/productimageS94.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Handsaw Handle</i>
  <img className='caltex-cut-sree' src="./img/productimageS95.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Wooden Handle</i>
  <img className='caltex-cut-sree' src="./img/productimageS96.png" alt="" />
</a>

<p>Available Sizes: 12", 18" & 24"</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>9. Fiber Disc, Fiber Disc Spare Cup & TCT with Mica Cutter</h3>

<a href="#" className="image left">
  <i>Fiber Disc</i>
  <img className='caltex-cut-sree' src="./img/productimageS97.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Fiber Disc Spare Cup</i>
  <img className='caltex-cut-sree' src="./img/productimageS98.png" alt="" />
</a>
<a href="#" className="image left">
  <i>TCT with Mica Cutter</i>
  <img className='caltex-cut-sree' src="./img/productimageS99.png" alt="" />
</a>

<p>Fiber Disc - Available Sizes: 4" & 5" in different Grits<br />FD Spare Cup - Available Sizes: 4" & 5"</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>10. Wood Cutting Blade (TCT)</h3>

<a href="#" className="image left">
  <i>Fiber Disc</i>
  <img className='caltex-cut-sree' src="./img/productimageS100.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Fiber Disc Spare Cup</i>
  <img className='caltex-cut-sree' src="./img/productimageS101.png" alt="" />
</a>
<a href="#" className="image left">
  <i>TCT with Mica Cutter</i>
  <img className='caltex-cut-sree' src="./img/productimageS102.png" alt="" />
</a>

<p>Available Sizes: 14"<br />Aluminium Cutting Blade Also Available</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={10}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>11. Files with Handle</h3>

<a href="#" className="image left">
  <i>Half Round</i>
  <img className='caltex-cut-sree' src="./img/productimageS103.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Round</i>
  <img className='caltex-cut-sree' src="./img/productimageS104.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Flat</i>
  <img className='caltex-cut-sree' src="./img/productimageS105.png" alt="" />
</a>

<p>Available Sizes: 6", 8", 10" & 12"</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={11}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>12. Try Square, Oil Can & Plumbob</h3>

<a href="#" className="image left">
  <i>Try Square</i>
  <img className='caltex-cut-sree' src="./img/productimageS106.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Oil Can - 350g</i>
  <img className='caltex-cut-sree' src="./img/productimageS107.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Plumbob</i>
  <img className='caltex-cut-sree' src="./img/productimageS108.png" alt="" />
</a>

<p>Plumbob - Available Sizes: S, M, L & Extra Large</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={12}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>13. Drill Bits</h3>

<a href="#" className="image left">
  <i>HSS Twist</i>
  <img className='caltex-cut-sree' src="./img/productimageS109.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Masonry Drill</i>
  <img className='caltex-cut-sree' src="./img/productimageS110.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Hammer Drill</i>
  <img className='caltex-cut-sree' src="./img/productimageS111.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Wood Flat Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS112.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Chisel Flat</i>
  <img className='caltex-cut-sree' src="./img/productimageS113.png" alt="" />
</a>
<a href="#" className="image left">
  <i>Chisel Pointed</i>
  <img className='caltex-cut-sree' src="./img/productimageS114.png" alt="" />
</a>

</Box>
      </TabPanel>
      <TabPanel value={value} index={13}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>14. Hinges Bit, Jigsaw Blade & Granite Core Bit 2 in 1</h3>

<a href="#" className="image left">
  <i>Hinges Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS115.png" alt="Hinges Bit" />
</a>
<a href="#" className="image left">
  <i>Jigsaw Blade</i>
  <img className='caltex-cut-sree' src="./img/productimageS116.png" alt="Jigsaw Blade" />
</a>
<a href="#" className="image left">
  <i>Granite Core Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS117.png" alt="Granite Core Bit" />
</a>
</Box>

      </TabPanel>
      <TabPanel value={value} index={14}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>15. Power Bit & Bimetal Hole Saw</h3>

<a href="#" className="image left">
  <i>Power Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS118.png" alt="Power Bit" />
</a>
<a href="#" className="image left">
  <i>Power Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS119.png" alt="Power Bit" />
</a>
<a href="#" className="image left">
  <i>Bimetal Holesaw</i>
  <img className='caltex-cut-sree' src="./img/productimageS120.png" alt="Bimetal Holesaw" />
</a>
</Box>

      </TabPanel>
      <TabPanel value={value} index={15}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>16. Wood Flat / Drill / Granite Core Bit & Wood Hole Saw Set</h3>

<a href="#" className="image left">
  <i>Wood Flat Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS121.png" alt="Wood Flat Bit" />
</a>
<a href="#" className="image left">
  <i>Drill/Granite Core Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS122.png" alt="Drill/Granite Core Bit" />
</a>
<a href="#" className="image left">
  <i>Wood Holesaw Bit</i>
  <img className='caltex-cut-sree' src="./img/productimageS123.png" alt="Wood Holesaw Bit" />
</a>
</Box>
      </TabPanel>
      <TabPanel value={value} index={16}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>17. Drill Set, Magnetic Nut Setter & Drill Chuck Key</h3>

<a href="#" className="image left">
  <i>Drill Set</i>
  <img className='caltex-cut-sree' src="./img/productimageS124.png" alt="Drill Set" />
</a>
<a href="#" className="image left">
  <i>Nut Setter</i>
  <img className='caltex-cut-sree' src="./img/productimageS125.png" alt="Nut Setter" />
</a>
<a href="#" className="image left">
  <i>Drill Chuck Key</i>
  <img className='caltex-cut-sree' src="./img/productimageS126.png" alt="Drill Chuck Key" />
</a>
</Box>

      </TabPanel>
      <TabPanel value={value} index={17}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>18. Allen Key Set</h3>

<a href="#" className="image left">
  <i>Mini & Regular</i>
  <img className='caltex-cut-sree' src="./img/productimageS127.png" alt="Mini & Regular Allen Key Set" />
</a>
<a href="#" className="image left">
  <i>Long</i>
  <img className='caltex-cut-sree' src="./img/productimageS128.png" alt="Long Allen Key Set" />
</a>
<a href="#" className="image left">
  <i>With Handle</i>
  <img className='caltex-cut-sree' src="./img/productimageS129.png" alt="With Handle Allen Key Set" />
</a>
 </Box>
      </TabPanel>
      <TabPanel value={value} index={18}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>19. Handle / Sledge Hammer</h3>

<a href="#" className="image left">
  <i>Handles</i>
  <img className='caltex-cut-sree' src="./img/productimageS130.png" alt="Handles" />
</a>
<a href="#" className="image left">
  <i>Sledge Hammer</i>
  <img className='caltex-cut-sree' src="./img/productimageS131.png" alt="Sledge Hammer" />
</a>
<a href="#" className="image left">
  <i>Sledge Hammer</i>
  <img className='caltex-cut-sree' src="./img/productimageS132.png" alt="Sledge Hammer" />
</a>

{/* <p>
  Wooden Handle, Fibre Handle, Steel Yellow Pipe Handle, BP Wooden Handle - Available Sizes: 80oz & 120oz. Sledge Hammers made of high carbon steel (EN 8D material) available up to 14lbs, without handle, with wooden handle & with fibre glass handle.
</p> */}
</Box>
      </TabPanel>
      <TabPanel value={value} index={19}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>20. Cold Chisel</h3>

<a href="#" className="image left">
  <i>With Grip</i>
  <img className='caltex-cut-sree' src="./img/productimageS133.png" alt="With Grip Cold Chisel" />
</a>
<a href="#" className="image left">
  <i>Without Grip</i>
  <img className='caltex-cut-sree' src="./img/productimageS134.png" alt="Without Grip Cold Chisel" />
</a>
<a href="#" className="image left">
  <i>CC 4.5</i>
  <img className='caltex-cut-sree' src="./img/productimageS135.png" alt="CC 4.5\ Cold Chisel" />
</a>

<p>Available Sizes: Up to 12" both Flat & Pointed</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={20}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>21. Karni, Gurmala & Jumper Set</h3>

<a href="#" className="image left">
  <i>Karni</i>
  <img className='caltex-cut-sree' src="./img/productimageS136.png" alt="Karni" />
</a>
<a href="#" className="image left">
  <i>Gurmala</i>
  <img className='caltex-cut-sree' src="./img/productimageS137.png" alt="Gurmala" />
</a>
<a href="#" className="image left">
  <i>Jumper Set</i>
  <img className='caltex-cut-sree' src="./img/productimageS138.png" alt="Jumper Set" />
</a>

<p>
  Gurmala - 12" x 5"<br />
  Jumper Set - Available Sizes: 8, 10, 12, 14 & 16
</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={21}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>22. Spirit Level</h3>

<a href="#" className="image left">
  <i>Premium</i>
  <img className='caltex-cut-sree' src="./img/productimageS139.png" alt="Premium Spirit Level" />
</a>
<a href="#" className="image left">
  <i>Xtra Power</i>
  <img className='caltex-cut-sree' src="./img/productimageS140.png" alt="Xtra Power Spirit Level" />
</a>

<p>Available Sizes: 12", 18" & 24"</p>
</Box>
      </TabPanel>
      <TabPanel value={value} index={22}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>23. Electrical Wires & Cables</h3>

<a href="#" className="image left">
  <i>Round Flexible Wire</i>
  <img className='caltex-cut-sree' src="./img/productimageS141.png" alt="Round Flexible Wire" />
</a>
<a href="#" className="image left">
  <i>UG Cable</i>
  <img className='caltex-cut-sree' src="./img/productimageS142.png" alt="UG Cable" />
</a>
<a href="#" className="image left">
  <i>Rotary Switch</i>
  <img className='caltex-cut-sree' src="./img/productimageS143.png" alt="Rotary Switch" />
</a>

{/* <p>
  Round Flexible Wire, Single Strand Copper Wire, Aluminium, Submersible Wire, Parallel Wire, Co-Axial Wire, UG Cable, House Guard Multi Strand Cable & Rotary Switch
</p> */}
</Box>
      </TabPanel>
      <TabPanel value={value} index={23}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>24. LED Light & Fitting</h3>

<a href="#" className="image left">
  <i>Flood Light</i>
  <img className='caltex-cut-sree' src="./img/productimageS144.png" alt="Flood Light" />
</a>
<a href="#" className="image left">
  <i>LED Bulb</i>
  <img className='caltex-cut-sree' src="./img/productimageS145.png" alt="LED Bulb" />
</a>
<a href="#" className="image left">
  <i>LED Tube Light</i>
  <img className='caltex-cut-sree' src="./img/productimageS146.png" alt="LED Tube Light" />
</a>
</Box>

      </TabPanel>
      <TabPanel value={value} index={24}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>25. Screws, Nails, Bolts & Hooks, Marble Cutting Machine Spanner, Drill Chuck & Drill Chuck</h3>

<a href="#" className="image left">
  <i>Screws, Nails, Bolts</i>
  <img className='caltex-cut-sree' src="./img/productimageS147.png" alt="Screws, Nails, Bolts" />
</a>
<a href="#" className="image left">
  <i>Marble Cutting Spanner</i>
  <img className='caltex-cut-sree' src="./img/productimageS148.png" alt="Marble Cutting Spanner" />
</a>
<a href="#" className="image left">
  <i>Drill Chuck</i>
  <img className='caltex-cut-sree' src="./img/productimageS149.png" alt="Drill Chuck" />
</a>

<p>
  Screws, Nails, Bolts & Hooks, Marble Cutting Machine Spanner, Drill Chuck, Angle Grinder Spanner, L Bolt, AB Washer & PD Nut
</p>
</Box>

      </TabPanel>
      <TabPanel value={value} index={25}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>26. Wooden Handle, Garden Shear, Telescopic, Hacksaw Frame, & Locks</h3>

<a href="#" className="image left">
  <i>Wooden Handle</i>
  <img className='caltex-cut-sree' src="./img/productimageS150.png" alt="Wooden Handle" />
</a>
<a href="#" className="image left">
  <i>Hacksaw Frame</i>
  <img className='caltex-cut-sree' src="./img/productimageS151.png" alt="Hacksaw Frame" />
</a>
<a href="#" className="image left">
  <i>Lock</i>
  <img className='caltex-cut-sree' src="./img/productimageS152.png" alt="Lock" />
</a>

{/* <p>
  All Purpose Wooden Handle, Hacksaw Frame with Scale, Full Steel Handles, HSS Bimetal Flexible Blade available in 18T & 24T, Locks available sizes: 40, 50, 60 & 70 mm
</p> */}
</Box>
      </TabPanel>
      <TabPanel value={value} index={26}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>27. Xtra Power & Premium Tools</h3>

<a href="#" className="image left">
  <i>Angle Grinder</i>
  <img className='caltex-cut-sree' src="./img/productimageS153.png" alt="Angle Grinder" />
</a>
<a href="#" className="image left">
  <i>Marble Cutter</i>
  <img className='caltex-cut-sree' src="./img/productimageS154.png" alt="Marble Cutter" />
</a>
<a href="#" className="image left">
  <i>Impact Drill</i>
  <img className='caltex-cut-sree' src="./img/productimageS155.png" alt="Impact Drill" />
</a>
<a href="#" className="image left">
  <i>Blower</i>
  <img className='caltex-cut-sree' src="./img/productimageS156.png" alt="Blower" />
</a>
<a href="#" className="image left">
  <i>Cut Off Machine</i>
  <img className='caltex-cut-sree' src="./img/productimageS157.png" alt="Cut Off Machine" />
</a>
<a href="#" className="image left">
  <i>Rotary Hammer</i>
  <img className='caltex-cut-sree' src="./img/productimageS158.png" alt="Rotary Hammer" />
</a>

{/* <p>
  Angle Grinder - Available Size: 4", Marble Cutter (1200 / 1280 Watts) - Available Size: 4", Impact Drill - Available Size: 13 mm, Cut Off Machine (2000 Watts) Available Size: 355 mm & Rotary Hammer (650 / 800 Watts) - Available Size: 20 mm & 26 mm
</p> */}
</Box>

      </TabPanel>
      <TabPanel value={value} index={27}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>28. Pliers</h3>

<a href="#" className="image left">
  <i>Combination/Nose Plier</i>
  <img className='caltex-cut-sree' src="./img/productimageS159.png" alt="Combination/Nose Plier" />
</a>
<a href="#" className="image left">
  <i>Mini Pliers</i>
  <img className='caltex-cut-sree' src="./img/productimageS160.png" alt="Mini Pliers" />
</a>
<a href="#" className="image left">
  <i>Wire Stripper/Cutter</i>
  <img className='caltex-cut-sree' src="./img/productimageS161.png" alt="Wire Stripper/Cutter" />
</a>

{/* <p>
  Combination Plier - Available Sizes: 6" & 8", Long Nose Plier (With Spring Action), Mini Pliers (4.5") - Types: Combination, Needle Nose, Diagonal Cutting, Round Nose, Flat Nose, Bent Nose, Long Nose & End Cutting and Wire Stripper & Cutter, PVC Grip
</p> */}
</Box>
      </TabPanel>
      <TabPanel value={value} index={28}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>29. Power Tools Spares</h3>
      <a href="#" className="image left"><i>Armature</i><img className='caltex-cut-sree' src="./img/productimageS162.png" alt="Armature" /></a>
      <a href="#" className="image left"><i>Field Coil</i><img className='caltex-cut-sree' src="./img/productimageS163.png" alt="Field Coil" /></a>
      <a href="#" className="image left"><i>Switch</i><img className='caltex-cut-sree' src="./img/productimageS164.png" alt="Switch" /></a>
      <a href="#" className="image left"><i>Change Over Knob</i><img className='caltex-cut-sree' src="./img/productimageS165.png" alt="Change Over Knob" /></a>
      <a href="#" className="image left"><i>Bearing</i><img className='caltex-cut-sree' src="./img/productimageS166.png" alt="Bearing" /></a>
      <a href="#" className="image left"><i>Spindle</i><img className='caltex-cut-sree' src="./img/productimageS167.png" alt="Spindle" /></a>
      <a href="#" className="image left"><i>Gear</i><img className='caltex-cut-sree' src="./img/productimageS168.png" alt="Gear" /></a>
      <a href="#" className="image left"><i>Intermediate</i><img className='caltex-cut-sree' src="./img/productimageS169.png" alt="Intermediate Flange" /></a>
      <a href="#" className="image left"><i>PVC Housing</i><img className='caltex-cut-sree' src="./img/productimageS170.png" alt="PVC Housing" /></a>
      {/* <p>Power Tools Spares - Armature, Field Coil, Switch, Change Over Knob, Taper Bearing, Striker, Bearing, Spindle, Piston Pin, Long Gear, Carbon Brush Carbon Brush Holder, Gear, Catch Disk, Pin, Piston, Bush, Intermediate Flange, Inner Impact Set, Ratchet Sleeve Set & PVC Housing.</p> */}
      </Box>
      </TabPanel>
      <TabPanel value={value} index={29}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>30. Screw Driver, Adjustable Wrench & Scrapper</h3>
      <a href="#" className="image left"><i>Xtra Power/Premium</i><img className='caltex-cut-sree' src="./img/productimageS171.png" alt="Xtra Power/Premium" /></a>
      <a href="#" className="image left"><i>3 in 1/With Fibre Grip</i><img className='caltex-cut-sree' src="./img/productimageS172.png" alt="3 in 1/With Fibre Grip" /></a>
      <a href="#" className="image left"><i>Scrapper</i><img className='caltex-cut-sree' src="./img/productimageS173.png" alt="Scrapper" /></a>
      {/* <p>Adjustable Length Screw Driver, Adjustable Wrench, Pipe Wrench, Hammer Head & With Ring Spanner - Available Sizes: 8", 10" & 12", Scrapper - Available Sizes: 3" & 4"</p> */}
      </Box>
      </TabPanel>
      <TabPanel value={value} index={30}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>31. Abrasive Paper, Aviation Snip Cutter & Silicon Gun</h3>
      <a href="#" className="image left"><i>Red Masa Paper</i><img className='caltex-cut-sree' src="./img/productimageS174.png" alt="Red Masa Paper" /></a>
      <a href="#" className="image left"><i>Premium/Xtra Power</i><img className='caltex-cut-sree' src="./img/productimageS175.png" alt="Premium/Xtra Power" /></a>
      <a href="#" className="image left"><i>Silicon Gun</i><img className='caltex-cut-sree' src="./img/productimageS176.png" alt="Silicon Gun" /></a>
      <p>Water Proof / Red Masa Abrasive Paper - Available in Various Grit</p>
      </Box>
      </TabPanel>

      <TabPanel value={value} index={31}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>32. Spanners & Wrenches</h3>
      <a href="#" className="image left"><i>Double End/Ring Spanner</i><img className='caltex-cut-sree' src="./img/productimageS177.png" alt="Double End/Ring Spanner" /></a>
      <a href="#" className="image left"><i>Spanner/Wrench</i><img className='caltex-cut-sree' src="./img/productimageS178.png" alt="Spanner/Wrench" /></a>
      <a href="#" className="image left"><i>Socket Spanner</i><img className='caltex-cut-sree' src="./img/productimageS179.png" alt="Socket Spanner" /></a>
      <p>European Standard, Chrome Plated and Duplex Nickel Plated and Corrosion Resistant, these Spanners comes with anti-skid jaws for powerful grip and comfortable operation at just 360° angle, Specially designed Spline Broach for Ring Spanner. Spline Broach provides greater contact & greater torquing power, Precision fit, can open all types of nuts including round edge nuts. Combination Spanner with anti-skid jaws & spline broach. 44 in 1 Smart Variable Multi Wrench. Combination Flexible Socket Spanner comes with 12 point Swivel Socket, a wrench for quick tightening, Rotates up to 180° & can be used at any angle.</p>
      </Box>
      </TabPanel>

      {/* <TabPanel value={value} index={31}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto',width:"600px" }, 
          overflowY: 'auto'
        }}>
           
      <h3>32. Spanners & Wrenches</h3>
     
      <a href="#" className="image left"><i>Double End/Ring Spanner</i><img src="./img/productimageS177.png" alt="Double End/Ring Spanner" /></a>
      <a href="#" className="image left"><i>Spanner/Wrench</i><img src="./img/productimageS178.png" alt="Spanner/Wrench" /></a>
      <a href="#" className="image left"><i>Socket Spanner</i><img src="./img/productimageS179.png" alt="Socket Spanner" /></a>
      <p>European Standard, Chrome Plated and Duplex Nickel Plated and Corrosion Resistant, these Spanners comes with anti-skid jaws for powerful grip and comfortable operation at just 360° angle, Specially designed Spline Broach for Ring Spanner. Spline Broach provides greater contact & greater torquing power, Precision fit, can open all types of nuts including round edge nuts. Combination Spanner with anti-skid jaws & spline broach. 44 in 1 Smart Variable Multi Wrench. Combination Flexible Socket Spanner comes with 12 point Swivel Socket, a wrench for quick tightening, Rotates up to 180° & can be used at any angle.</p>
   



    </Box>
      </TabPanel> */}


      <TabPanel value={value} index={32}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>33. Flower Cutter, Glass Cutter & Roll Paper</h3>
      <a href="#" className="image left"><i>Flower Cutter</i><img className='caltex-cut-sree' src="./img/productimageS180.png" alt="Flower Cutter" /></a>
      <a href="#" className="image left"><i>Glass Cutter</i><img className='caltex-cut-sree' src="./img/productimageS181.png" alt="Glass Cutter" /></a>
      <a href="#" className="image left"><i>Roll Paper</i><img className='caltex-cut-sree' src="./img/productimageS182.png" alt="Roll Paper" /></a>
      <p>Roll Paper - Available in Various Grit</p>
      </Box>
      </TabPanel>
      <TabPanel value={value} index={33}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>34. Dry Polishing Pad, Wood Hole Saw & Chisel</h3>
      <a href="#" className="image left"><i>Dry Polish Pad</i><img className='caltex-cut-sree' src="./img/productimageS183.png" alt="Dry Polish Pad" /></a>
      <a href="#" className="image left"><i>Wood Hole Saw</i><img className='caltex-cut-sree' src="./img/productimageS184.png" alt="Wood Hole Saw" /></a>
      <a href="#" className="image left"><i>Chisel</i><img className='caltex-cut-sree' src="./img/productimageS185.png" alt="Chisel" /></a>
      <p>Dry Polishing Pad - Available in Various Grit, Wood Hole Saw - Available in Various Sizes, Chisel with Fibre Grip and Hammer Head</p>
      </Box>
      </TabPanel>

      <TabPanel value={value} index={34}>
      <Box sx={{ 
          flexGrow: 1, 
          height: { xs: '600px', sm: 'auto' }, 
          overflowY: 'auto'
        }}>
      <h3 style={{fontFamily:"Crimson Pro, serif"}}>35. Router Bits</h3>
      <a href="#" className="image left"><i>Straight Bits</i><img className='caltex-cut-sree' src="./img/productimageS186.png" alt="Straight Bits" /></a>
      <a href="#" className="image left"><i>Thread Bits</i><img className='caltex-cut-sree' src="./img/productimageS187.png" alt="Thread Bits" /></a>
      <a href="#" className="image left"><i>Router Bit Set</i><img className='caltex-cut-sree' src="./img/productimageS188.png" alt="Router Bit Set" /></a>
      <p>Router Bits - Straight Bits, Center Ologo (Thread Bits), Router Bit Set, Ovolo Bits, Plunge Cut Beading Bits, Cove Bead Bits, Olovo-Cove Profile Bits, OGEE Fillet Bits, Flush Trim Bit Bear & 1.5", Roman OGEE Bits, Rabeting (Slot Bits), Vove-Box Round Bits (Round Nose), Step & Round Bits, Step Bits, Chamfer Bits, Corner Bits, Rabbiting Bits (Four Sides), Step Ologo Bits, Straight Bits 1.5", Top Ologo Bits, Classical Plumge Bits</p>
      
      <p><strong><a href="http://umangmarketingblr.com">Umang Marketing's</a> aim is to excel in the areas we are specialized by continuous interaction with our existing and new customers, by sharing our knowledge with them to forge stronger bonds for mutual benefit in the years to come and be part of the growth always.</strong></p>
      </Box>
      </TabPanel>

    </Box>
     </div>  
    </div>
    </div>            		</article>							
    </div>
  )
}
export default Ff;

