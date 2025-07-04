import React,{useState} from 'react';
import './Solar.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaArrowCircleRight } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

const SolarSecond = () => {
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
          <Tab label=" 6. Single Point Diamond Dressers - Natural and Bruted Poin" {...a11yProps(0)} />
          <Tab label=" 7. Throw-Away Diamond Dressers" {...a11yProps(1)} />
          <Tab label=" 8. Shaping Tools" {...a11yProps(2)} />
          
        </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
    <div className="box post">
      <h3>6. Single Point Diamond Dressers - Natural and Bruted Point</h3>
      
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
        
        <p><strong>Feed Rates per Revolution:</strong></p>
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
        </table>
      </div>
    </div>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
    <div className="box post">
      <h3>7. Throw-Away Diamond Dressers</h3>
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
                <img src={dresser.image} alt={`Diamond Dresser ${dresser.no}`} style={{ width: '100px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CustomTabPanel>

    <CustomTabPanel value={value} index={2}>
    <div className="box post">
      <h3>8. Shaping Tools</h3>

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
              <td>{tool.catNo.join(' <br/> ')}</td>
              <td>{tool.radius.join(' <br/> ')}</td>
              <td>
                <a href="#" className="image center">
                  <img src={tool.image} alt={`Shaping Tool ${index + 1}`} style={{ width: '100px' }} />
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
                  <img src={tool.image} alt={tool.type} style={{ width: '100px' }} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </CustomTabPanel>
    </Box>
     </div>
    </div>
  )
}

export default SolarSecond;
