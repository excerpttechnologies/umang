import React,{useState} from 'react';
import './Solar.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaArrowCircleRight } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

const SolarThree = () => {
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
          </div>
        );
      }
      
      CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls':` simple-tabpanel-${index}`,
        };
      }
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
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
    <div> 
        <div className="box_post_solar chart-container">
<Box sx={{ width: '100%' }}>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div style={{ overflowX: 'scroll', width: '100%' }}>
          <Tabs 
          className='res_scroll'
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ minWidth: 'max-content' }}
          >
          <Tab label=" 9. Cluster Dressers" {...a11yProps(0)} />
          <Tab label=" 10. Multipoint Indexable Crown" {...a11yProps(1)} />
          <Tab label=" 11. Multipoint Disc" {...a11yProps(2)} />
          <Tab label=" 12. Diamond Grit Impregnated Dressers" {...a11yProps(3)} />
          
        </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
    <div className="box post">
      <h3>9. Cluster Dressers</h3>
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
                  <img src={dreser.image} alt={`Cluster Dresser ${dreser.size}`} style={{ width: '100px' }} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
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
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
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
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
    <div className="box post">
      <h3>12. Diamond Grit Impregnated Dressers</h3>

  
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
    </div>
    </CustomTabPanel>
    </Box>
       </div>
    </div>
  )
}

export default SolarThree;
