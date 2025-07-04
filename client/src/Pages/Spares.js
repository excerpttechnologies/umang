// import React from 'react';
// import './Spares.css'; // Make sure to include your CSS file

// const Spares = () => {
//   return (
//     <div id="main-wrapper">
//       <div id="main" className="container">
//         <div className="row">
//           <div id="content" className="content 8u 12u(mobile)">
//             <article className="box post">
//               <header>
//                 <h2><strong>Servicing of Band Saw & Circular Saw Machines</strong></h2>
//               </header>
//               <a href="#" className="image left">
//                 <i>Everising Circular Saw Machine</i>
//                 <img src="./img/productimage1.png" alt="Circular Saw Machine"/>
//               </a>
//               <p>
//                 <a href="http://umangmarketingblr.com">Umang Engineering Services</a> offers servicing of Band Saw and Circular Saw machines to Mechanical, Electrical and Electronics, Hydraulics Industries, etc.
//               </p>
//             </article>
//           </div>
//           <div id="sidebar" className="sidebar 4u 12u(mobile)">
//             <section>
//               <ul className="divided">
//                 <article className="box excerpt">
//                   <header>
//                     <h2>Spares Supply</h2>
//                   </header>
//                   <a href="#" className="image left">
//                     <i>Everising Band Saw Machine</i>
//                     <img src="./img/productimage1.png" alt="Band Saw Machine"/>
//                   </a>
//                   <p>
//                     <strong><a href="http://umangmarketingblr.com">Umang Engineering Services</a></strong> supplies spares for all kinds of Band Saw Machines and Circular Saw Machines of any make.
//                   </p>
//                 </article>
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Spares;



//----------------------------



import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Grow } from '@mui/material';
import { styled } from '@mui/system';
import './Spares.css'; // We'll create this file for custom overrides

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

const Spares = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }} id="main-wrapper">
        <Grid container spacing={4}>
          <Grow in={true} timeout={1000}>
            <Grid item xs={12} md={8} className="content">
              <StyledCard>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                    Servicing of Band Saw & Circular Saw Machines
                  </Typography>
                  <Box className="image-container">
                    <Typography variant="caption" display="block" gutterBottom>
                      Everising Circular Saw Machine
                    </Typography>
                    <StyledCardMedia
                      image="./img/hard1.jpg"
                      title="Circular Saw Machine"
                    />
                  </Box>
                  <StyledTypography variant="body1" paragraph>
                    <a href="http://umangmarketingblr.com">Umang Engineering Services</a> offers servicing of Band Saw and Circular Saw machines to Mechanical, Electrical and Electronics, Hydraulics Industries, etc.
                    Umang Engineering Services is dedicated to delivering top-tier servicing for Band Saw and Circular Saw machines across various industries such as Mechanical, Electrical and Electronics, and Hydraulics. Our team of skilled technicians is equipped to handle everything from routine maintenance to intricate repairs, ensuring your machines perform reliably and efficiently. By partnering with us, you can trust that your equipment will receive the highest level of care, helping to prevent unexpected breakdowns and prolonging the operational life of your machinery. We understand the unique challenges faced by different industries, and our services are tailored to meet the specific needs of your business, keeping your cutting operations seamless and productive.
                  </StyledTypography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
          
          <Grow in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <Grid item xs={12} md={4} className="sidebar">
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    Spares Supply
                  </Typography>
                  <Box className="image-container">
                    <Typography variant="caption" display="block" gutterBottom>
                      Everising Band Saw Machine
                    </Typography>
                    <StyledCardMedia
                      image="./img/productimage1.png"
                      title="Band Saw Machine"
                    />
                  </Box>
                  <StyledTypography variant="body1" paragraph>
                    <strong><a href="http://umangmarketingblr.com">Umang Engineering Services</a></strong> supplies spares for all kinds of Band Saw Machines and Circular Saw Machines of any make.Umang Engineering Services provides expert servicing of Band Saw and Circular Saw machines, catering to a wide range of industries including Mechanical, Electrical and Electronics, and Hydraulics. Our comprehensive maintenance services ensure that your cutting machines operate at peak performance, minimizing downtime and extending their lifespan. With our specialized knowledge and experience, we address all aspects of machine upkeep, from routine inspections to complex repairs. Whether you're in the mechanical sector or dealing with sophisticated hydraulic systems, our services are designed to meet the rigorous demands of your industry, ensuring that your equipment runs smoothly and efficiently.
                  </StyledTypography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Spares;