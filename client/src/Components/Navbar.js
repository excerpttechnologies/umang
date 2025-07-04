// import React,{ useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
// import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
// import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
// import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
// import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
// import { TbCertificate } from "react-icons/tb";
// import './Navbar.css'

// const Navbar = () => {
//     const [isSticky, setIsSticky] = useState(false);
// const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu open/close

    
//     useEffect(() => {
//              const handleScroll = () => {
//                if (window.scrollY > 100) {
//                  setIsSticky(true);
//                } else {
//                  setIsSticky(false);
//                }
//              };
        
//              window.addEventListener('scroll', handleScroll);
        
//              return () => {
//                window.removeEventListener('scroll', handleScroll);
//              };
//           }, []);


//  const toggleMenu = () => {
//  setIsMenuOpen(!isMenuOpen);
// };
// const closeMenu = () => {
//   setIsMenuOpen(false);
// };

//   return (
//     <div >

//         <div class="container-fluid header-top">
//         <div class="container d-flex align-items-center">
//         <div class="d-flex align-items-center h-100">
//         <Link to="/" class="navbar-brand" style={{height: "125px"}}>
//         <h1 class="text-primary mb-0">
//            <a href='/'><img src="img/422.png" alt="" style={{height:"113px",marginTop:"-30px"}}/>
//            </a>       
//         </h1>
//         </Link>
//         </div>
//         <div class="w-100 h-100">
//         <div class="topbar px-0 py-2 d-none d-lg-block" style={{height: "45px"}}>
//         <div class="row gx-0 align-items-center">
//         <div class="col-lg-8 text-center text-lg-center mb-lg-0">
//         <div class="d-flex flex-wrap">
//         <div class="border-end border-primary pe-3" style={{marginLeft:"-90px"}}>
//         <a href="https://maps.app.goo.gl/GmzotUiaGzyg9Sej7" class="text-muted small"><i class="fas fa-map-marker-alt text-primary me-2"></i><span style={{fontSize:"12px"}}>SM-118, ITI Industrial Estate (Dyavasandra Industrial Estate) , Whitefield Main Rd, Mahadevapura, Bengaluru-560048</span></a>
//         </div>
        
//         </div>
//         </div>
//         <div class="col-lg-4 text-center text-lg-end">
//         <div class="d-flex justify-content-end">
//         <div class="d-flex border-end border-primary pe-3">
//         <a class="btn p-0 text-primary me-3" href="mailto:umangmrkt@gmail.com" style={{marginLeft:"-90px"}}><i class="fas fa-envelope text-primary me-2" style={{marginRight:"5px"}}></i><span style={{color:"white",marginRight:"9px",fontSize:"12px"}}>umangmrkt@gmail.com/sales@umangmarketingblr.com</span></a>
//         </div>
      
//         </div>
//         </div>
//         </div>
//         </div>
//         <div class={`sticky-wrapper nav-bar px-0 py-lg-0 responsive_sticky ${isSticky ? ' sticky' : ''}`} style={{height: "80px"}}>
//         <div className="marquee-container d-none d-lg-block">
//         <marquee behavior="scroll" direction="left" style={{ fontSize: '14px' }}>
//         ...An <b>Engineering Enterprise</b> In Business Association with Multi Segments of Engineering Industries Since <b>1993...</b> An ISO <b>9001: 2015</b> Certified Company
//         </marquee>
//     </div>
//         <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
//         <Link to="/" class="navbar-brand-2">
//         <img src="img/422.png" alt="" style={{height:"77px",marginTop:"15px"}}/>

//         </Link>
//         <div className="mobile-phone-number d-lg-none" style={{ marginLeft: '-40px' }}>
//                                     <a href="tel:+918041145681" className="text-primary" style={{ display: 'flex', alignItems: 'center',justifyContent:"start", textDecoration: 'none' }}>
//                                         <MdOutlinePhoneInTalk style={{ fontSize: '10px', marginRight: '5px' }} />
//                                         <span style={{ fontSize: '11px', color: 'black' }}>+91 8041145681<br/>9606645009</span>
//                                     </a>
//                                 </div>
                                
//         <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isMenuOpen}>
                 
//                  <span>{isMenuOpen ? <FaTimes /> : <FaBars />}</span>
//                </button>
               
//         <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse" style={{color:"black"}}>
         
//         <div class="navbar-nav mx-0 mx-lg-auto" >
//         <Link to="/" class="nav-item nav-link" onClick={closeMenu}><span className='responive_home_icon'><HomeWorkOutlinedIcon /></span>Home</Link>
//         <Link to="/about" class="nav-item nav-link" onClick={closeMenu}><span className='responive_home_icon'><Groups2OutlinedIcon /></span>About Us</Link>
       
       
//         <div class="nav-item dropdown">
//         <Link to="/products" class="nav-link" data-bs-toggle="dropdown"style={{textDecoration:"none"}}><span className='responive_home_icon'><PrecisionManufacturingOutlinedIcon /></span>
//         <span class="dropdown-toggle" >Products</span>
//         </Link>
       
//         <div class="dropdown-menu">
//                                             <Link className="dropdown-item" to="/wikus" style={{textDecoration:"none"}} onClick={closeMenu}>Wikus - Germany Bimetal Band Saw Blades</Link>
//                                             <Link  className="dropdown-item" to="/tenryu" style={{textDecoration:"none"}} onClick={closeMenu}>Tenryu - Japan TCT & HSS Circular Cutters</Link>
//                                             <Link className="dropdown-item" to="/solar" style={{textDecoration:"none"}} onClick={closeMenu}>Solar Diamonds Tools</Link>
//                                             <Link class="dropdown-item" to="/singular" style={{textDecoration:"none"}} onClick={closeMenu}>Singular - Taiwan Band Saw & Circular Saw Machine</Link>


//                                             <Link className="dropdown-item" to="/hardcastel" style={{textDecoration:"none"}} onClick={closeMenu}>Hardcastle Lubricants & Coolants</Link>
//                                             <Link className="dropdown-item" to="/Esconfiles" style={{textDecoration:"none"}} onClick={closeMenu} >Escon</Link>
//                                             <Link className="dropdown-item" to="/magicut" style={{textDecoration:"none"}} onClick={closeMenu} >Magicut</Link>
//                                             <Link className="dropdown-item" to='/ff' style={{textDecoration:"none"}} onClick={closeMenu} >Caltex</Link>
//                                             <Link className="dropdown-item" to='/Vbelt' style={{textDecoration:"none"}} onClick={closeMenu} >V-Belts</Link>
//                                             <Link className="dropdown-item" to="/othercut" style={{textDecoration:"none"}} onClick={closeMenu} >Other Products</Link>

//                                         </div>
//         </div>




//         <div class="nav-item dropdown">
//         <Link to="" class="nav-link" data-bs-toggle="dropdown"style={{textDecoration:"none"}}><span className='responive_home_icon'><ManageAccountsOutlinedIcon /></span>
//         <span class="dropdown-toggle" >Services</span>
//         </Link>
       
//         <div class="dropdown-menu">
//                                             <Link className="dropdown-item" to="/UmangMarketingService" style={{textDecoration:"none"}} onClick={closeMenu}>Umang Marketing - Machine Service</Link>
//                                             <Link  className="dropdown-item" to="/UmangEngineeringServices" style={{textDecoration:"none"}} onClick={closeMenu}>Umang Engineering Services</Link>

//                                         </div>
//         </div>
      
       
//                                     <Link to="/blog" class="nav-item nav-link" onClick={closeMenu}><span className='responive_home_icon'><ViewQuiltOutlinedIcon /></span>Blog</Link>
                                    
//                                     <Link to="/contact" class="nav-item nav-link" onClick={closeMenu}><span className='responive_home_icon'><PermContactCalendarOutlinedIcon /></span>Contact</Link>
                                    
                                 
//         <Link to='/' class="btn12 responive_contact_button" style={{textDecoration:"none"}}><i class="animation12"></i><MdOutlinePhoneInTalk className='phone-body' style={{fontSize:"20px",textDecoration:"none"}}/>+91 8041145681 / 9606645009<i class="animation12"></i></Link>    
       
//            <Link to="/" class="nav-item nav-link">
//                        <div style={{display:"flex"}} className='resposnive_certified'>
//            <img src='./img/iso-9001.png' style={{fontSize:"40px",color:"orange",marginLeft:"10px",width:"120px",height:"40px"}}/>
            
//           </div>                    
//            </Link>
//         <div class="nav-btn ps-3">
          
//         </div>
//         </div>
           


//         </div>
//         </nav>
//         </div>
//         </div>
//         </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar























import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import  {MdOutlinePhoneInTalk} from "react-icons/md";
import './Navbar.css'

// Import icons
import MenuIcon from '@mui/icons-material/MenuOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPageOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const pages = [
  { name: 'HOME', icon: <HomeIcon sx={{ mr: -0.5 }} /> },
  { name: 'ABOUTUS', icon: <InfoIcon sx={{ mr: -0.5 }} /> },
  { name: 'PRODUCTS', icon: <CategoryIcon sx={{ mr: -0.5 }} /> },
  { name: 'SERVICES', icon: <BuildIcon sx={{ mr: -0.5 }} /> },
  { name: 'PARTNERS', icon: <HandshakeOutlinedIcon sx={{ mr: -0.5 }} /> },
  { name: 'BLOG', icon: <ArticleIcon sx={{ mr: -0.5 }} /> },
  { name: 'CONTACT', icon: <ContactPageIcon sx={{ mr: -0.5 }} /> }
];

const productItems = [
  { name: 'Wikus - Germany Bimetal Band Saw Blades', path: '/wikus' },
  { name: 'Tenryu - Japan TCT & HSS Circular Cutters', path: '/tenryu' },
  { name: 'Solar Diamonds Tools', path: '/solar' },
  { name: 'Singular - Taiwan Band Saw & Circular Saw Machine', path: '/singular' },
  { name: 'Hardcastle Lubricants & Coolants', path: '/hardcastel' },
  { name: 'Escon', path: '/Escon' },
  { name: 'Magicut', path: '/magicut' },
  { name: 'Caltex', path: '/Caltex' },
  { name: 'V-Belts', path: '/vbelt' },
  { name: 'Other Products', path: '/othercut' }
];

const serviceItems = [
  { name: 'Machine Service', path: '/UmangMarketingService' },
  { name: 'Engineering Services', path: '/UmangEngineeringServices' }
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [showGif, setShowGif] = useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileProductsOpen(false);
    setMobileServicesOpen(false);
  };

  const handleProductsClick = (event) => {
    event.preventDefault();
    setProductsAnchorEl(event.currentTarget);
    setProductsOpen(!productsOpen);
  };

  const handleServicesClick = (event) => {
    event.preventDefault();
    setServicesAnchorEl(event.currentTarget);
    setServicesOpen(!servicesOpen);
  };

  const handleCloseProducts = () => {
    setProductsOpen(false);
    setProductsAnchorEl(null);
  };

  const handleCloseServices = () => {
    setServicesOpen(false);
    setServicesAnchorEl(null);
  };

  const handleNavigation = (pageName) => {
    if (pageName === 'HOME') {
      navigate('/');
    } else {
      navigate(`/${pageName.replace(/\s+/g, '').toLowerCase()}`);
    }
    handleCloseNavMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const duration = 1.5;
    const timer = setTimeout(() => {
        setShowGif(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: isSticky ? '' : 'none',
        transition: 'border-bottom 0.3s ease',
      }}
    >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className="logo-container" style={{marginBottom:"6px"}}>
              {showGif ? (
                  <img src="img/tp.gif" alt="umang Marketing" className="logo" />
              ) : <img src="img/tpp7.png" alt="umang Marketing" className="logo"/>}
            </div>
          </Typography>

          {/* Mobile Navigation */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { width: 'minwidth' },fontFamily:"Montserrat" }}
            >
              {pages.map((page) => (
                <Box key={page.name}>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      if (page.name === 'PRODUCTS') {
                        setMobileProductsOpen(!mobileProductsOpen);
                      } else if (page.name === 'SERVICES') {
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else {
                        handleNavigation(page.name);
                      }
                    }}
                    sx={{ 
                      py: 1.5, 
                      borderBottom: '1px solid #eee', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontFamily:"Montserrat"
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {page.icon}
                      <Typography>{page.name}</Typography>
                    </Box>
                    {(page.name === 'PRODUCTS' || page.name === 'SERVICES') && (
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: (page.name === 'PRODUCTS' && mobileProductsOpen) || (page.name === 'SERVICES' && mobileServicesOpen) ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.3s'
                        }}
                      />
                    )}
                  </MenuItem>

                  {page.name === 'PRODUCTS' && (
                    <Collapse in={mobileProductsOpen}>
                      <Box sx={{ backgroundColor: '#f5f5f5' }}>
                        {productItems.map((item) => (
                          <MenuItem 
                            key={item.name} 
                            onClick={() => {
                              navigate(item.path);
                              handleCloseNavMenu();
                            }}
                            sx={{ py: 1.5, pl: 4, borderBottom: '1px solid #eee',fontFamily:"Montserrat" }}
                            
                          >
                            <Typography>{item.name}</Typography>
                          </MenuItem>
                        ))}
                      </Box>
                    </Collapse>
                  )}
                  {page.name === 'SERVICES' && (
                    <Collapse in={mobileServicesOpen}>
                      <Box sx={{ backgroundColor: '#f5f5f5' }}>
                        {serviceItems.map((item) => (
                          <MenuItem 
                            key={item.name} 
                            onClick={() => {
                              navigate(item.path);
                              handleCloseNavMenu();
                            }}
                            sx={{ py: 1.5, pl: 4, borderBottom: '1px solid #eee',fontFamily:"Montserrat" }}
                          >
                            <Typography>{item.name}</Typography>
                          </MenuItem>
                        ))}
                      </Box>
                    </Collapse>
                  )}
                </Box>
              ))}
            </Menu>
          </Box> */}

<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, fontFamily: "Montserrat" }}
            >
              {pages.map((page) => (
                <Box key={page.name}>
                  <MenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      if (page.name === 'PRODUCTS') {
                        setMobileProductsOpen(!mobileProductsOpen);
                      } else if (page.name === 'SERVICES') {
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else {
                        handleNavigation(page.name);
                      }
                    }}
                    sx={{
                      py: 1.5,
                      borderBottom: '1px solid #eee',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: "Montserrat"
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {page.icon}
                      <Typography>{page.name}</Typography>
                    </Box>
                    {(page.name === 'PRODUCTS' || page.name === 'SERVICES') && (
                      <KeyboardArrowDownIcon
                      sx={{
                        transform: (page.name === 'PRODUCTS' && mobileProductsOpen) || (page.name === 'SERVICES' && mobileServicesOpen) ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s'
                      }}
                    />
                  )}
                </MenuItem>

                {page.name === 'PRODUCTS' && (
                  <Collapse in={mobileProductsOpen}>
                    <Box
                      sx={{
                        backgroundColor: '#f5f5f5',
                        maxHeight: '300px', // Set a max height to prevent overflow
                        overflowX: 'auto',  // Enable horizontal scrolling
                        whiteSpace: 'nowrap', // Prevent wrapping of items
                      }}
                    >
                      {productItems.map((item) => (
                        <MenuItem
                          key={item.name}
                          onClick={() => {
                            navigate(item.path);
                            handleCloseNavMenu();
                          }}
                          sx={{
                            py: 1.5,
                            pl: 4,
                            borderBottom: '1px solid #eee',
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Typography>{item.name}</Typography>
                        </MenuItem>
                      ))}
                    </Box>
                  </Collapse>
                )}
                {page.name === 'SERVICES' && (
                  <Collapse in={mobileServicesOpen}>
                    <Box sx={{ backgroundColor: '#f5f5f5' }}>
                      {serviceItems.map((item) => (
                        <MenuItem
                          key={item.name}
                          onClick={() => {
                            navigate(item.path);
                            handleCloseNavMenu();
                          }}
                          sx={{
                            py: 1.5,
                            pl: 4,
                            borderBottom: '1px solid #eee',
                            fontFamily: "Montserrat",
                          }}
                        >
                          <Typography>{item.name}</Typography>
                        </MenuItem>
                      ))}
                    </Box>
                  </Collapse>
                )}
              </Box>
            ))}
          </Menu>
        </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="img/422.png" alt="" style={{ height: "70px" }} />
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center',alignItems:"center",gap:1,fontFamily:"Montserrat" }} >
            {pages.map((page) => (
              <Box key={page.name}>
                {page.name === 'PRODUCTS' ? (
                  <Button
                    onClick={handleProductsClick}
                    color="inherit"
                    startIcon={page.icon}
                    endIcon={<KeyboardArrowDownIcon 
                      sx={{ 
                        transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)', 
                        transition: 'transform 0.3s'
                      }} 
                    
                    />}
                    sx={{color: '#1f93cf', '&:hover': { color: '#67dd27' },fontWeight:"bold",fontFamily:"Montserrat" }}
                  >
                    {page.name}
                  </Button>
                ) : page.name === 'SERVICES' ? (
                  <Button
                    onClick={handleServicesClick}
                    color="inherit"
                    startIcon={page.icon}
                    endIcon={<KeyboardArrowDownIcon 
                      sx={{ 
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', 
                        transition: 'transform 0.3s'
                      }} 
                    />}
                    sx={{color: '#1f93cf', '&:hover': { color: '#67dd27' },fontWeight:"bold",fontFamily:"Montserrat" }}
                  >
                    {page.name}
                  </Button>
                ) : (
                  <Button 
                    onClick={() => handleNavigation(page.name)}
                    startIcon={page.icon}
                    sx={{ color: '#1f93cf', '&:hover': { color: '#67dd27' }, fontWeight:"bold",fontFamily:"Montserrat" }}
                  >
                    {page.name}
                  </Button>
                )}

                {/* Products Dropdown */}
                <Popper
                  open={productsOpen}
                  anchorEl={productsAnchorEl}
                  placement="bottom-start"
                  style={{ zIndex: 1300 }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseProducts}>
                      <MenuList>
                        {productItems.map((item) => (
                          <MenuItem 
                            key={item.name} 
                            onClick={() => {
                              navigate(item.path);
                              handleCloseProducts();
                            }}
                            sx={{fontFamily:"Montserrat"}}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popper>

                {/* Services Dropdown */}
                <Popper
                  open={servicesOpen && page.name === 'SERVICES'}
                  anchorEl={servicesAnchorEl}
                  placement="bottom-start"
                  style={{ zIndex: 1300 }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseServices}>
                      <MenuList>
                        {serviceItems.map((item) => (
                          <MenuItem 
                            key={item.name} 
                            onClick={() => {
                              navigate(item.path);
                              handleCloseServices();
                            }}
                            sx={{fontFamily:"Montserrat"}}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Popper>
              </Box>
            ))}

<Button
    variant="contained"
    color="primary"
    onClick={() => navigate('/contact')}
    sx={{
      display: { xs: 'none', md: 'block' }, // Hide on mobile view, show on desktop
      ml: 2, // Optional margin for spacing
      backgroundColor: '#FFA500', // Adjust color as needed
      '&:hover': {
        backgroundColor: '#FF8C00' // Darker shade for hover effect
      },
      fontWeight:"bold",
      fontFamily:"Montserrat"
    }}
    class="btn12 responive_contact_button"
  >
    <MdOutlinePhoneInTalk className='phone-body' style={{fontSize:"30px",textDecoration:"none",marginRight:"5px",fontWeight:"bold"}}/>
    <i class="animation12"></i> +91 8041145681 / 9606645009<i class="animation12"></i>
  </Button>
</Box>

<Box>
<img src='./img/iso-9001.png' style={{fontSize:"40px",height:"50px",marginTop:"-10px"}} alt="ISO 9001" />
</Box>
</Toolbar>
</Container>
</AppBar>
);
}

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import Popper from '@mui/material/Popper';
// import Paper from '@mui/material/Paper';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import MenuList from '@mui/material/MenuList';
// import Collapse from '@mui/material/Collapse';
// import  {MdOutlinePhoneInTalk} from "react-icons/md";
// import './Navbar.css';

// // Import icons
// import MenuIcon from '@mui/icons-material/MenuOutlined';
// import HomeIcon from '@mui/icons-material/HomeOutlined';
// import InfoIcon from '@mui/icons-material/InfoOutlined';
// import CategoryIcon from '@mui/icons-material/CategoryOutlined';
// import BuildIcon from '@mui/icons-material/BuildOutlined';
// import ArticleIcon from '@mui/icons-material/ArticleOutlined';
// import ContactPageIcon from '@mui/icons-material/ContactPageOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

// const pages = [
//   { name: 'HOME', icon: <HomeIcon sx={{ mr: -0.5 }} /> },
//   { name: 'ABOUTUS', icon: <InfoIcon sx={{ mr: -0.5 }} /> },
//   { name: 'PRODUCTS', icon: <CategoryIcon sx={{ mr: -0.5 }} /> },
//   { name: 'SERVICES', icon: <BuildIcon sx={{ mr: -0.5 }} /> },
//   { name: 'PARTNERS', icon: <HandshakeOutlinedIcon sx={{ mr: -0.5 }} /> },
//   { name: 'BLOG', icon: <ArticleIcon sx={{ mr: -0.5 }} /> },
//   { name: 'CONTACT', icon: <ContactPageIcon sx={{ mr: -0.5 }} /> }
// ];

// const productItems = [
//   { name: 'Wikus - Germany Bimetal Band Saw Blades', path: '/wikus' },
//   { name: 'Tenryu - Japan TCT & HSS Circular Cutters', path: '/tenryu' },
//   { name: 'Solar Diamonds Tools', path: '/solar' },
//   { name: 'Singular - Taiwan Band Saw & Circular Saw Machine', path: '/singular' },
//   { name: 'Hardcastle Lubricants & Coolants', path: '/hardcastel' },
//   { name: 'Escon', path: '/esconfiles' },
//   { name: 'Magicut', path: '/magicut' },
//   { name: 'Caltex', path: '/Caltex' },
//   { name: 'V-Belts', path: '/vbelt' },
//   { name: 'Other Products', path: '/othercut' }
// ];

// const serviceItems = [
//   { name: 'Umang Marketing Service', path: '/UmangMarketingService' },
//   { name: 'Umang Engineering Services', path: '/UmangEngineeringServices' }
// ];

// function Navbar() {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [isSticky, setIsSticky] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [productsAnchorEl, setProductsAnchorEl] = useState(null);
//   const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
//   const [showGif, setShowGif] = useState(true);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//     setMobileProductsOpen(false);
//     setMobileServicesOpen(false);
//   };

//   const handleProductsClick = (event) => {
//     event.preventDefault();
//     setProductsAnchorEl(event.currentTarget);
//     setProductsOpen(!productsOpen);
//   };

//   const handleServicesClick = (event) => {
//     event.preventDefault();
//     setServicesAnchorEl(event.currentTarget);
//     setServicesOpen(!servicesOpen);
//   };

//   const handleCloseProducts = () => {
//     setProductsOpen(false);
//     setProductsAnchorEl(null);
//   };

//   const handleCloseServices = () => {
//     setServicesOpen(false);
//     setServicesAnchorEl(null);
//   };

//   const handleNavigation = (pageName) => {
//     if (pageName === 'HOME') {
//       navigate('/');
//     } else {
//       navigate(`/${pageName.replace(/\s+/g, '').toLowerCase()}`);
//     }
//     handleCloseNavMenu();
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const duration = 1.5;
//     const timer = setTimeout(() => {
//         setShowGif(false);
//     }, duration * 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: 'white',
//         color: 'black',
//         boxShadow: 'none',
//         borderBottom: isSticky ? '' : 'none',
//         transition: 'border-bottom 0.3s ease',
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             to="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <div className="logo-container" style={{ marginBottom: "6px" }}>
//               {showGif ? (
//                 <img src="img/tp.gif" alt="umang Marketing" className="logo" />
//               ) : (
//                 <img src="img/tpp7.png" alt="umang Marketing" className="logo" />
//               )}
//             </div>
//           </Typography>

//           {/* Mobile Navigation */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="navigation menu"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               keepMounted
//               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' }, fontFamily: "Montserrat" }}
//             >
//               {pages.map((page) => (
//                 <Box key={page.name}>
//                   <MenuItem
//                     onClick={(e) => {
//                       e.preventDefault();
//                       if (page.name === 'PRODUCTS') {
//                         setMobileProductsOpen(!mobileProductsOpen);
//                       } else if (page.name === 'SERVICES') {
//                         setMobileServicesOpen(!mobileServicesOpen);
//                       } else {
//                         handleNavigation(page.name);
//                       }
//                     }}
//                     sx={{
//                       py: 1.5,
//                       borderBottom: '1px solid #eee',
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       fontFamily: "Montserrat"
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                       {page.icon}
//                       <Typography>{page.name}</Typography>
//                     </Box>
//                     {(page.name === 'PRODUCTS' || page.name === 'SERVICES') && (
//                       <KeyboardArrowDownIcon
//                         sx={{
//                           transform: (page.name === 'PRODUCTS' && mobileProductsOpen) || (page.name === 'SERVICES' && mobileServicesOpen) ? 'rotate(180deg)' : 'rotate(0)',
//                           transition: 'transform 0.3s'
//                         }}
//                       />
//                     )}
//                   </MenuItem>

//                   {page.name === 'PRODUCTS' && (
//                     <Collapse in={mobileProductsOpen}>
//                       <Box
//                         sx={{
//                           backgroundColor: '#f5f5f5',
//                           maxHeight: '300px', // Set a max height to prevent overflow
//                           overflowX: 'auto',  // Enable horizontal scrolling
//                           whiteSpace: 'nowrap', // Prevent wrapping of items
//                         }}
//                       >
//                         {productItems.map((item) => (
//                           <MenuItem
//                             key={item.name}
//                             onClick={() => {
//                               navigate(item.path);
//                               handleCloseNavMenu();
//                             }}
//                             sx={{
//                               py: 1.5,
//                               pl: 4,
//                               borderBottom: '1px solid #eee',
//                               fontFamily: "Montserrat",
//                             }}
//                           >
//                             <Typography>{item.name}</Typography>
//                           </MenuItem>
//                         ))}
//                       </Box>
//                     </Collapse>
//                   )}
//                   {page.name === 'SERVICES' && (
//                     <Collapse in={mobileServicesOpen}>
//                       <Box sx={{ backgroundColor: '#f5f5f5' }}>
//                         {serviceItems.map((item) => (
//                           <MenuItem
//                             key={item.name}
//                             onClick={() => {
//                               navigate(item.path);
//                               handleCloseNavMenu();
//                             }}
//                             sx={{
//                               py: 1.5,
//                               pl: 4,
//                               borderBottom: '1px solid #eee',
//                               fontFamily: "Montserrat",
//                             }}
//                           >
//                             <Typography>{item.name}</Typography>
//                           </MenuItem>
//                         ))}
//                       </Box>
//                     </Collapse>
//                   )}
//                 </Box>
//               ))}
//             </Menu>
//           </Box>

//           {/* Desktop Navigation */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', md: 'flex' },
//               justifyContent: 'center',
//               alignItems: "center",
//               gap: 1,
//               fontFamily: "Montserrat"
//             }}
//           >
//             {pages.map((page) => (
//               <Box key={page.name}>
//                 {page.name === 'PRODUCTS' ? (
//                   <Button
//                     onClick={handleProductsClick}
//                     color="inherit"
//                     startIcon={page.icon}
//                     endIcon={
//                       <KeyboardArrowDownIcon
//                         sx={{
//                           transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)',
//                           transition: 'transform 0.3s'
//                         }}
//                       />
//                     }
//                     sx={{
//                       color: '#1f93cf',
//                       '&:hover': { color: '#67dd27' },
//                       fontWeight: "bold",
//                       fontFamily: "Montserrat"
//                     }}
//                   >
//                     {page.name}
//                   </Button>
//                 ) : page.name === 'SERVICES' ? (
//                   <Button
//                     onClick={handleServicesClick}
//                     color="inherit"
//                     startIcon={page.icon}
//                     endIcon={
//                       <KeyboardArrowDownIcon
//                         sx={{
//                           transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
//                           transition: 'transform 0.3s'
//                         }}
//                       />
//                     }
//                     sx={{
//                       color: '#1f93cf',
//                       '&:hover': { color: '#67dd27' },
//                       fontWeight: "bold",
//                       fontFamily: "Montserrat"
//                     }}
//                   >
//                     {page.name}
//                   </Button>
//                 ) : (
//                   <Button
//                     onClick={() => handleNavigation(page.name)}
//                     startIcon={page.icon}
//                     sx={{
//                       color: '#1f93cf',
//                       '&:hover': { color: '#67dd27' },
//                       fontWeight: "bold",
//                       fontFamily: "Montserrat"
//                     }}
//                   >
//                     {page.name}
//                   </Button>
//                 )}

//                 {/* Products Dropdown */}
//                 <Popper
//                   open={productsOpen}
//                   anchorEl={productsAnchorEl}
//                   placement="bottom-start"
//                   style={{ zIndex: 1300 }}
//                 >
//                   <Paper>
//                     <ClickAwayListener onClickAway={handleCloseProducts}>
//                       <MenuList>
//                         {productItems.map((item) => (
//                           <MenuItem
//                             key={item.name}
//                             onClick={() => {
//                               navigate(item.path);
//                               handleCloseProducts();
//                             }}
//                             sx={{ fontFamily: "Montserrat" }}
//                           >
//                             {item.name}
//                           </MenuItem>
//                         ))}
//                       </MenuList>
//                     </ClickAwayListener>
//                   </Paper>
//                 </Popper>

//                 {/* Services Dropdown */}
//                 <Popper
//                   open={servicesOpen && page.name === 'SERVICES'}
//                   anchorEl={servicesAnchorEl}
//                   placement="bottom-start"
//                   style={{ zIndex: 1300 }}
//                 >
//                   <Paper>
//                     <ClickAwayListener onClickAway={handleCloseServices}>
//                       <MenuList>
//                         {serviceItems.map((item) => (
//                           <MenuItem
//                             key={item.name}
//                             onClick={() => {
//                               navigate(item.path);
//                               handleCloseServices();
//                             }}
//                             sx={{ fontFamily: "Montserrat" }}
//                           >
//                             {item.name}
//                           </MenuItem>
//                         ))}
//                       </MenuList>
//                     </ClickAwayListener>
//                   </Paper>
//                 </Popper>
//               </Box>
//             ))}

// <Button
//     variant="contained"
//     color="primary"
//     onClick={() => navigate('/contact')}
//     sx={{
//       display: { xs: 'none', md: 'block' }, // Hide on mobile view, show on desktop
//       ml: 2, // Optional margin for spacing
//       backgroundColor: '#FFA500', // Adjust color as needed
//       '&:hover': {
//         backgroundColor: '#FF8C00' // Darker shade for hover effect
//       },
//       fontWeight:"bold",
//       fontFamily:"Montserrat"
//     }}
//     class="btn12 responive_contact_button"
//   >
//     <MdOutlinePhoneInTalk className='phone-body' style={{fontSize:"30px",textDecoration:"none",marginRight:"5px",fontWeight:"bold"}}/>
//     <i class="animation12"></i> +91 8041145681 / 9606645009<i class="animation12"></i>
//   </Button>
// </Box>

//           <Box>
//             <img
//               src='./img/iso-9001.png'
//               style={{ fontSize: "40px", height: "50px", marginTop: "-10px" }}
//               alt="ISO 9001"
//             />
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;
