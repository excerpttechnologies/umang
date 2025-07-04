// import React from 'react'
// import './DemonstrationCenter.css';

// const DemonstrationCenter = () => {
//   return (
//     <div>
//        <div id="main-wrapper">
//             <div id="main" className="container">
//                 <div className="row">

//                     {/* Content */}
//                     <div id="content" className="content 8u 12u(mobile)">

//                         {/* Post */}
//                         <article className="box post">
//                             <header>
//                                 <h2><strong>Demonstration Center</strong></h2>
//                             </header>

//                             <a href="#" className="image left">
//                                 <i>Everising Circular Saw Machine</i>
//                                 <img src="./img/productimage.png" alt="Everising Circular Saw Machine" />
//                             </a>

//                             <p>
//                                 <a href="http://umangmarketingblr.com">Umang Marketing</a> offer free demonstration of <strong>Everising Circular Saw, Band Saw Machine operation, Wikus Germany Bimetal Band Saw Blade operation and Tenryu - Japan TCT &amp; HSS Circular Cutters operation.</strong>
//                             </p>
//                         </article>

//                     </div>

//                     {/* Sidebar */}
//                     <div id="sidebar" className="sidebar 4u 12u(mobile)">

//                         {/* Excerpts */}
//                         <section>
//                             <ul className="divided">
//                                 <li>

//                                     {/* Excerpt */}
//                                     <article className="box excerpt">
//                                         <a href="#" className="image left">
//                                             <i>Everising Band Saw Machine</i>
//                                             <img src="./img/productimage.png" alt="Everising Band Saw Machine" />
//                                         </a>
//                                     </article>

//                                 </li>
//                             </ul>
//                         </section>

//                     </div>

//                 </div>
//             </div>
//     </div>
//     </div>
//   )
// }

// export default DemonstrationCenter
//--------------------------------------------------------


import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Grow } from '@mui/material';
import { styled } from '@mui/system';
import './DemonstrationCenter.css'; // We'll create this file for custom overrides

const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  [theme.breakpoints.down('sm')]: {
    paddingTop: '75%', // 4:3 aspect ratio for mobile
  },
}));

const StyledTypography = styled(Typography)({
  textAlign: 'justify',
});

const DemonstrationCenter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }} id="main-wrapper">
        <Grid container spacing={4}>
          <Grow in={true} timeout={1000}>
            <Grid item xs={12} md={8} className="content">
              <StyledCard>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                    Demonstration Center
                  </Typography>
                  <Box className="image-container">
                    <Typography variant="caption" display="block" gutterBottom>
                      Everising Circular Saw Machine
                    </Typography>
                    <StyledCardMedia
                      image="./img/caltex1.jpg"
                      title="Everising Circular Saw Machine"
                    />
                  </Box>
                  <StyledTypography variant="body1" paragraph>
                    <a href="http://umangmarketingblr.com">Umang Marketing</a> offer free demonstration of Everising Circular Saw, Band Saw Machine operation, Wikus Germany Bimetal Band Saw Blade operation and Tenryu - Japan TCT & amp; HSS Circular Cutters operation.
                    At Umang Marketing, we take pride in offering free, comprehensive demonstrations of our cutting-edge products to help you make informed decisions for your business. Our Demonstration Center is equipped with the latest Everising Circular Saw Machines, Band Saw Machines, Wikus Germany Bimetal Band Saw Blades, and Tenryu - Japan TCT & HSS Circular Cutters. During these sessions, our experienced technicians walk you through the operation of each machine, showcasing their precision, efficiency, and cutting capabilities. You’ll gain valuable insights into how these tools can optimize your cutting processes, improve productivity, and meet the specific needs of your applications. Whether you’re considering upgrading your equipment or simply exploring new technologies, these demonstrations provide a hands-on experience that highlights the quality and performance of our products.
                  </StyledTypography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
          
          <Grow in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <Grid item xs={12} md={4} className="sidebar">
              <StyledCard>
                <CardContent>
                  <Box className="image-container">
                    <Typography variant="caption" display="block" gutterBottom>
                      Everising Band Saw Machine
                    </Typography>
                    <StyledCardMedia
                      image="./img/caltex2.jpg"
                      title="Everising Band Saw Machine"
                    />

                  </Box>
                  <p className="res-text-container">The Demonstrations of the Everising Circular Saw Machines, renowned for their precision and efficiency in metal cutting. Our experts will guide you through the operation of these machines, showcasing their superior cutting speed and accuracy, essential for any industrial application. Additionally, you can witness the powerful performance of the Everising Band Saw Machines, which are engineered for high-performance tasks and built to last. We also demonstrate the operation of the Wikus Germany Bimetal Band Saw Blades, known for their exceptional durability and cutting precision, as well as the Tenryu - Japan TCT & HSS Circular Cutters, which are trusted for their high-quality results. Visit our Demonstration Center to explore these innovative tools and see how they can elevate your cutting processes.</p>
                  
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default DemonstrationCenter;