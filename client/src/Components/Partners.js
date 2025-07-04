// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   maxWidth: 600,
//   margin: 'auto',
//   boxShadow: '0 30px 80px 10px rgba(0,0,0,.2)',
//   height: 'auto', // Set a fixed height for the card
//   padding:"20px"
// }));

// const ContentWrapper = styled(CardContent)(({ theme }) => ({
//   flex: '1 0 auto',
//   display: 'flex',
//   flexDirection: 'column',
//   overflow: 'auto', // Add scroll if content exceeds the height
// }));

// const PartnershipLevelBox = styled(Box)(({ theme }) => ({
//   width: 50,
//   writingMode: 'vertical-rl',
//   background: 'linear-gradient(to bottom, #3f51b5, #2196f3)',
//   color: 'white',
//   fontSize: 18,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const DetailTypography = styled(Typography)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   fontSize: 15,
//   textTransform: 'uppercase',
//   marginRight: 20,
//   fontWeight: 700,
// }));

// const partners = [
//   {
//     id: 1,
//     name: "Wikus",
//     tags: [],
//     description: "WIKUS India Pvt Ltd, a 100% Subsidiary of WIKUS Germany is the First European Band Saw Manufacturer to set up its own manufacturing facility in INDIA.",
//     image: "./img/wikuslogo.jpeg"
//   },
//   {
//     id: 2,
//     name: "Tenryu",
//     tags: [],
//     description: "The company was founded over 100 years ago in 1913 and first activities go back to 1910. The first ever Circular Saw Blade produced in Japan was made by TENRYU.",
//     image: "./img/tenryu.png"
//   },
//   {
//     id: 3,
//     name: "Solar",
//     tags: [],
//     description: "Solar Diamond was started in the year 1982, with a registered office in Mumbai and a factory in Ambernath. From a small beginning it has grown well to cater home market and export market. We have a large network throughout India, United States, Germany,Italy, U.K., Middle East, etc.",
//     image: "./img/solarlogo.jpeg"
//   },
//   {
//     id: 4,
//     name: "Singular",
//     tags: [],
//     description: "SINGULAR MACHINERY is comprised of top professionals uniting their talents ranging from administration and sales to design and manufacturing of all kinds of industrial sawing machines and metal cutting bandsaw.",
//     image: "./img/Sing.png"
//   },
// ];

// const Partners = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentPartner = partners[currentIndex];

//   return (
//     <StyledCard>
//       <CardMedia
//         component="img"
//         sx={{ width: '45%', objectFit: 'contain' }}
//         image={currentPartner.image}
//         alt={currentPartner.name}
//       />
//       <ContentWrapper>
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {currentPartner.name}
//           </Typography>
//           {currentPartner.tags.map((tag, index) => (
//             <Chip
//               key={index}
//               label={tag}
//               size="small"
//               sx={{
//                 ml: 1,
//                 color: 'white',
//                 bgcolor: index % 2 === 0 ? '#3f51b5' : '#2196f3',
//               }}
//             />
//           ))}
//         </Box>
//         <Typography 
//   variant="body2" 
//   color="text.secondary" 
//   sx={{ 
//     mb: 2, 
//     overflow: 'auto',
//     flexGrow: 1,
//     wordWrap: 'break-word',
//     overflowWrap: 'break-word',
//     hyphens: 'auto',
//     width: '100%',
//     display: 'block',
//     '& span': {
//       display: 'inline-block',
//       maxWidth: '35ch',
//       whiteSpace: 'normal',
//       height:'250px'
//     }
//   }}
// >
//   <span>{currentPartner.description}</span>
// </Typography>
//       </ContentWrapper>
//       <PartnershipLevelBox>
//         {currentPartner.partnershipLevel}
//       </PartnershipLevelBox>
//     </StyledCard>
//   );
// };

// export default Partners;

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: '0 10px 30px rgba(0,0,0,.1)',

  height: 'auto',
  padding: "20px",

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    height: '230px',
    maxWidth: 650,

  },
}));

const ContentWrapper = styled(CardContent)(({ theme }) => ({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    maxWidth: '55%',
  },
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 4,
  background: 'linear-gradient(to right, #3f51b5, #2196f3)',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    width: 4,
    height: 'auto',
    marginTop: 0,
    marginLeft: theme.spacing(2),
  },
}));

const partners = [
  {
    id: 1,
    name: "Wikus",
    tags: [],
    description: "WIKUS India, a subsidiary of WIKUS Germany, pioneered European band saw manufacturing in India. Known for quality and innovation in the cutting tool industry.",
    image: "./img/wikuslogo.jpeg"
  },
  {
    id: 2,
    name: "Tenryu",
    tags: [],
    description: "TENRYU, founded in 1913, is Japan's first circular saw blade manufacturer. With over a century of expertise, they lead in cutting tool innovation and quality.",
    image: "./img/tenryu.png"
  },
  {
    id: 3,
    name: "Solar",
    tags: [],
    description: "Solar Diamond, established 1982, grew from a small Mumbai office to serve global markets. Known for quality diamond tools in India and internationally.",
    image: "./img/solarlogo.jpeg"
  },
  {
    id: 4,
    name: "Singular",
    tags: [],
    description: "SINGULAR MACHINERY unites top professionals in industrial sawing. Expertise spans from administration to manufacturing of cutting-edge metal cutting bandsaws.",
    image: "./img/Sing.png"
  },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentPartner = partners[currentIndex];

  return (
    <StyledCard>
      <CardMedia
        component="img"
        sx={(theme) => ({ 
          width: '100%', 
          height: 150,
          objectFit: 'contain',
          marginBottom: theme.spacing(2),
          order: 0,
          [theme.breakpoints.up('md')]: {
            width: '40%',
            height: 'auto',
            marginBottom: 0,
          },
        })}
        image={currentPartner.image}
        alt={currentPartner.name}
      />
      <ContentWrapper>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginBottom: 1,fontFamily:"Crimson Pro, serif" }}>
            {currentPartner.name}
          </Typography>
          {currentPartner.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                color: 'white',
                bgcolor: index % 2 === 0 ? '#3f51b5' : '#2196f3',
              }}
            />
          ))}
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2, 
            flexGrow: 1,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            hyphens: 'auto',
            width: '100%',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {currentPartner.description}
        </Typography>
      </ContentWrapper>
      <VerticalLine />
    </StyledCard>
  );
};

export default Partners;