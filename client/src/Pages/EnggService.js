// import React from 'react';
// import './EnggService.css'; // Ensure to include your CSS file

// const EnggService = () => {
//   return (
//     <div id="main-wrapper">
//       <div id="main" className="container">
//       <div className='container-fluid blog py-5'>
//         <div className="row">
//           <div id="content" className="content 8u 12u(mobile)">
//             <article className="box post">
//               <header>
//                 <h2><strong>Umang Engineering Services</strong></h2>
//               </header>
              
//               <a href="#" className="image left">
//                 <i>Umang Engineering Services, Bengaluru</i>
//                 <img src="./img/productimage2.png" alt="Umang Engineering"/>
//               </a>
//               <p>
//                 An associate company of <a href="http://umangmarketingblr.com">Umang Marketing</a>, <strong>Umang Engineering Services</strong> offers Metal Cutting Facility. We have imported, fully automatic, world-class Everising Make - Band Saw Machines and Circular Saw machines.
//               </p>
//               <p>
//                 We offer the metal cutting facility to various customers in the Automobile, Aerospace, Machine Tool, Forging Industries, etc.
//               </p>
//               <header>
//                 <h2>Our Speciality in Metal Cutting is:</h2>
//               </header>
//               <ul>
//                 <li>We ensure perfect cuts irrespective of diameters.</li>
//                 <li>Minimize the wastage of material.</li>
//                 <li>Materials cut on Circular saw ensure a lot of material saving - by avoiding any taper, cut to exact size, and can eliminate facing-off operation.</li>
//                 <li>We have an experienced shop floor team.</li>
//                 <li>We have ample storage and Overhead Crane facilities for material handling.</li>
//               </ul>
//             </article>
//           </div>

//           <div id="sidebar" className="sidebar 4u 12u(mobile)">
//             <section>
//               <ul className="divided">
//                 <article className="box excerpt">
//                   <header>
//                     <h2>Other Services</h2>
//                   </header>
//                   <p>
//                     <strong><a href="http://umangmarketingblr.com">Umang Engineering Services</a></strong> supplies <strong>spares</strong> for all kinds of <strong>Band Saw Machine and Circular Saw Machine</strong> of any make.
//                     <br /><br />
//                     We offer <strong>servicing of Band Saw and Circular Saw machines</strong> to Mechanical, Electrical and Electronics, Hydraulics Industries, etc.
//                   </p>
//                   <a href="#" className="image left">
//                     <i>Everising Circular Saw Machine</i>
//                     <img src="./img/productimage2.png" alt="Circular Saw"/>
//                   </a>
//                 </article>
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default EnggService;


//----

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Container, Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
// import { styled } from '@mui/system';

// const theme = createTheme({
//   spacing: 8, // Spacing of 8px per unit
// });

// const FadeUpContainer = styled(Container)(({ theme }) => ({
//   animation: 'fadeUp 1s ease-out',
// }));

// const ImageContainer = styled(Box)({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: theme.spacing(2), // Replace with a number if issue persists
// });

// const CardStyled = styled(Card)(({ theme }) => ({
//   marginTop: theme.spacing(3),
//   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// }));

// const MediaStyled = styled(CardMedia)(({ theme }) => ({
//   height: 300,
//   [theme.breakpoints.down('sm')]: {
//     height: 200,
//   },
// }));

// const EnggService = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <FadeUpContainer maxWidth="lg" id="main-wrapper">
//         <Box my={4} className="container-fluid blog">
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={8}>
//               <CardStyled>
//                 <CardContent>
//                   <Typography variant="h4" component="h2" gutterBottom>
//                     <strong>Umang Engineering Services</strong>
//                   </Typography>
//                   <ImageContainer>
//                     <MediaStyled
//                       image="./img/productimage2.png"
//                       title="Umang Engineering"
//                     />
//                   </ImageContainer>
//                   <Typography variant="body1" paragraph>
//                     An associate company of <a href="http://umangmarketingblr.com">Umang Marketing</a>, <strong>Umang Engineering Services</strong> offers Metal Cutting Facility. We have imported, fully automatic, world-class Everising Make - Band Saw Machines and Circular Saw machines.
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     We offer the metal cutting facility to various customers in the Automobile, Aerospace, Machine Tool, Forging Industries, etc.
//                   </Typography>
//                   <Typography variant="h5" component="h3" gutterBottom>
//                     Our Speciality in Metal Cutting is:
//                   </Typography>
//                   <ul>
//                     <li>We ensure perfect cuts irrespective of diameters.</li>
//                     <li>Minimize the wastage of material.</li>
//                     <li>Materials cut on Circular saw ensure a lot of material saving - by avoiding any taper, cut to exact size, and can eliminate facing-off operation.</li>
//                     <li>We have an experienced shop floor team.</li>
//                     <li>We have ample storage and Overhead Crane facilities for material handling.</li>
//                   </ul>
//                 </CardContent>
//               </CardStyled>
//             </Grid>
            
//             <Grid item xs={12} md={4}>
//               <CardStyled>
//                 <CardContent>
//                   <Typography variant="h5" component="h3" gutterBottom>
//                     Other Services
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     <strong><a href="http://umangmarketingblr.com">Umang Engineering Services</a></strong> supplies <strong>spares</strong> for all kinds of <strong>Band Saw Machine and Circular Saw Machine</strong> of any make.
//                     <br /><br />
//                     We offer <strong>servicing of Band Saw and Circular Saw machines</strong> to Mechanical, Electrical and Electronics, Hydraulics Industries, etc.
//                   </Typography>
//                   <ImageContainer>
//                     <MediaStyled
//                       image="./img/productimage2.png"
//                       title="Circular Saw"
//                     />
//                   </ImageContainer>
//                 </CardContent>
//               </CardStyled>
//             </Grid>
//           </Grid>
//         </Box>
//       </FadeUpContainer>
//     </ThemeProvider>
//   );
// };

// export default EnggService;



import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Grow } from '@mui/material';
import { styled } from '@mui/system';

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

const EnggService = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }} id="main-wrapper">
        <Grid container spacing={4}>
          <Grow in={true} timeout={1000}>
            <Grid item xs={12} md={8}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
                    Umang Engineering Services
                  </Typography>
                  <StyledCardMedia
                    image="./img/circular-saw1.jpg"
                    title="Umang Engineering"
                  />
                  <Box mt={2}>
                    <StyledTypography variant="body1" paragraph>
                      An associate company of <a href="http://umangmarketingblr.com">Umang Marketing</a>, <strong>Umang Engineering Services</strong> offers Metal Cutting Facility. We have imported, fully automatic, world-class Everising Make - Band Saw Machines and Circular Saw machines.
                    </StyledTypography>
                    <StyledTypography variant="body1" paragraph>
                      We offer the metal cutting facility to various customers in the Automobile, Aerospace, Machine Tool, Forging Industries, etc.
                    </StyledTypography>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      Our Speciality in Metal Cutting is:
                    </Typography>
                    <ul>
                      <li>We ensure perfect cuts irrespective of diameters.</li>
                      <li>Minimize the wastage of material.</li>
                      <li>Materials cut on Circular saw ensure a lot of material saving - by avoiding any taper, cut to exact size, and can eliminate facing-off operation.</li>
                      <li>We have an experienced shop floor team.</li>
                      <li>We have ample storage and Overhead Crane facilities for material handling.</li>
                    </ul>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
          
          <Grow in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    Other Services
                  </Typography>
                  <StyledTypography variant="body1" paragraph>
                    <strong><a href="http://umangmarketingblr.com">Umang Engineering Services</a></strong> supplies <strong>spares</strong> for all kinds of <strong>Band Saw Machine and Circular Saw Machine</strong> of any make.
                  </StyledTypography>
                  <StyledTypography variant="body1" paragraph>
                    We offer <strong>servicing of Band Saw and Circular Saw machines</strong> to Mechanical, Electrical and Electronics, Hydraulics Industries, etc.
                  </StyledTypography>
                  <StyledCardMedia
                    image="./img/circular-saw.jpg"
                    title="Circular Saw"
                  />
                  <p className='res-text-container'>At Umang Engineering Services, we are committed to providing our customers with reliable, high-quality metal cutting solutions that enhance productivity and reduce costs. Whether you’re in the automotive sector or involved in aerospace manufacturing, our services are tailored to meet the specific needs of your industry.provides a state-of-the-art Metal Cutting Facility, equipped with imported, fully automatic Everising Band Saw Machines and Circular Saw Machines. Our facility is designed to serve a wide range of industries, including Automobile, Aerospace, Machine Tool, and Forging, delivering precision cuts that meet the highest industry standards.







</p>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grow>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default EnggService;