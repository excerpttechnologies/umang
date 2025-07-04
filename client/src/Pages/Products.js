// import React from 'react'

// const Products = () => {
//   return (
//     <div>
//       <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-fullscreen">
//                 <div class="modal-content rounded-0">
//                     <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-body d-flex align-items-center bg-primary">
//                         <div class="input-group w-75 mx-auto d-flex">
//                             <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
//                             <span id="search-icon-1" class="btn bg-light border nput-group-text p-3"><i class="fa fa-search"></i></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         <div class="container-fluid bg-breadcrumb">
//             <div class="container text-center py-5" style={{maxWidth: "900px"}}>
//                 <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Projects</h4>
//                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
//                     <li class="breadcrumb-item"><a href="/">Home</a></li>
                  
//                     <li class="breadcrumb-item active text-primary">Project</li>
//                 </ol>    
//             </div>
//         </div>
        
//         <div class="container-fluid projects bg-light py-5">
//             <div class="container py-5">
//                 <div class="row g-5">
//                     <div class="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
//                         <div>
//                             <h4 class="text-primary">Our Projects</h4>
//                             <h1 class="display-4 mb-4">How to work Our Electricity Projects</h1>
//                             <p class="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fugiat quae nihil obcaecati,</p>
//                             <ul class="nav">
//                                 <li class="nav-item bg-white mb-4 w-100">
//                                     <a class="d-flex align-items-center h4 mb-0 p-3 active" data-bs-toggle="pill" href="#ProjectsTab-1">
//                                         <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>Power Path Unveiling Our process</span>
//                                     </a>
//                                 </li>
//                                 <li class="nav-item bg-white mb-4 w-100">
//                                     <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-2">
//                                         <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-charging-station small"></span></div><span>Electro Flow Decoding Our method</span>
//                                     </a>
//                                 </li>
//                                 <li class="nav-item bg-white mb-4 w-100">
//                                     <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-3">
//                                         <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-broadcast-tower small"></span></div><span>Energetic Engine Behind Scenes</span>
//                                     </a>
//                                 </li>
//                                 <li class="nav-item bg-white mb-4 w-100">
//                                     <a class="d-flex align-items-center h4 mb-0 p-3" data-bs-toggle="pill" href="#ProjectsTab-4">
//                                         <div class="projects-icon btn-md-square bg-primary text-white me-3"><span class="fas fa-bolt small"></span></div><span>Watt Works Discover Operations</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="col-lg-7 wow fadeInRight" data-wow-delay="0.2s">
//                         <div class="tab-content">
//                             <div id="ProjectsTab-1" class="tab-pane fade show p-0 active">
//                                 <div class="projects-item">
//                                     <img src="img/industrial-1.jpg" class="img-fluid w-100" alt=""/>
//                                     <div class="projects-content bg-white p-4">
//                                         <h4 class="mb-3">Power Path Unveiling Our process</h4>
//                                         <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
//                                         </p>
//                                         <a class="btn btn-primary py-2 px-4" href="#">Read More</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="ProjectsTab-2" class="tab-pane fade show p-0">
//                                 <div class="projects-item">
//                                     <img src="img/industrial-2.jpg" class="img-fluid w-100" alt=""/>
//                                     <div class="projects-content bg-white p-4">
//                                         <h4 class="mb-3">Electro Flow Decoding Our method</h4>
//                                         <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
//                                         </p>
//                                         <a class="btn btn-primary py-2 px-4" href="#">Read More</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="ProjectsTab-3" class="tab-pane fade show p-0">
//                                 <div class="projects-item">
//                                     <img src="img/commercial-1.jpg" class="img-fluid w-100" alt=""/>
//                                     <div class="projects-content bg-white p-4">
//                                         <h4 class="mb-3">Energetic Engine Behind Scenes</h4>
//                                         <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
//                                         </p>
//                                         <a class="btn btn-primary py-2 px-4" href="#">Read More</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="ProjectsTab-4" class="tab-pane fade show p-0">
//                                 <div class="projects-item">
//                                     <img src="img/commercial-2.jpg" class="img-fluid w-100" alt=""/>
//                                     <div class="projects-content bg-white p-4">
//                                         <h4 class="mb-4">Watt Works Discover Operations</h4>
//                                         <p class="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quo? Enim facere, praesentium voluptatem vero officiis libero fuga rem autem amet recusandae voluptates, dolorem quo magni. Corporis eveniet consequuntur accusantium.
//                                         </p>
//                                         <a class="btn btn-primary py-2 px-4" href="#">Read More</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Products










import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MdOutlineDoubleArrow } from "react-icons/md";
import '../Components/Navbar.css'

// const cardData = [
//   {
//     title: 'Wikus',
//     description: 'Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica.',
//     image: 'img/wikuslogo.jpeg',
//     link:"/wikus"
//   },
//   {
//     title: 'Tenryu',
//     description: 'Chameleons are known for their ability to change color and their unique vision.',
//     image: 'img/tenryu.png',
//     link:"/tenryu"
//   },
//   {
//     title: 'Solar Diamonds',
//     description: 'Geckos are small, mostly nocturnal lizards that are found in warm climates throughout the world.',
//     image: 'img/solarlogo.jpeg',
//      link:"/solar"
//   },
//   {
//     title: 'Singular',
//     description: 'The Komodo dragon is the largest living species of lizard, native to the Indonesian islands.',
//     image: 'img/sing.png',
//      link:"/singular"
//   },
//   {
//     title: 'HardCastle',
//     description: 'Iguanas are herbivorous lizards native to tropical areas of Central and South America.',
//     image: 'img/h1.jpg',
//     link:"/hardcastel"
//   },
//   {
//     title: 'Escon',
//     description: 'Monitor lizards are large lizards found in Africa, Asia, and Oceania, with some species in the Americas.',
//     image: 'img/cal.png',
//     link:"/Esconfiles"
//   },
//   {
//     title: 'Magicut',
//     description: 'Anoles are a common type of small lizard, known for their bright colors and agility.',
//     image: 'img/magi-logo.png',
//     link:"/magicut"
//   },
//   {
//     title: 'Caltex',
//     description: 'Basilisks are known for their ability to "run" on water and their vibrant appearance.',
//     image: 'img/cal.jpeg',
//     link:"/ff"
//   },
//   {
//     title: 'V-Belt',
//     description: 'Skinks are smooth-scaled lizards commonly found in deserts, forests, and grasslands.',
//     image: 'img/h2.jpg',
//     link:"/Vbelt"
//   },
//   {
//     title: 'Other Products',
//     description: 'Bearded dragons are popular pets known for their friendly nature and interesting behavior.',
//     image: 'img/11.png',
//     link:"/othercut"
//   }
// ];


const cardData = [
  {
    title: '',
    description: '',
    image: 'img/wikuslogo.jpeg',
    link:"/wikus"
  },
  {
    title: '',
    description: '',
    image: 'img/tenryu.png',
    link:"/tenryu"
  },
  {
    title: '',
    description: '',
    image: 'img/solarlogo.jpeg',
     link:"/solar"
  },
  {
    title: '',
    description: '',
    image: 'img/sing.png',
     link:"/singular"
  },
  {
    title: '',
    description: '',
    image: 'img/09.png',
    link:"/hardcastel"
  },
  {
    title: '',
    description: '',
    image: 'img/cal.png',
    link:"/Esconfiles"
  },
  {
    title: '',
    description: '',
    image: 'img/magi-logo.png',
    link:"/magicut"
  },
  {
    title: '',
    description: '',
    image: 'img/cal.jpeg',
    link:"/Caltex"
  },
  {
    title: '',
    description: '',
    image: 'img/h2.png',
    link:"/Vbelt"
  },
  {
    title: '',
    description: '',
    image: 'img/11.png',
    link:"/othercut"
  }
];


export default function Products() {
  return (
    <>
     <div className="container-fluid bg-breadcrumb_productss">
       <div class="container text-center py-5" style={{maxWidth: "900px", }}>
       <h4 style={{color:"white"}} class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Products</h4>

                 {/* <img src="./img/wikuslogo.jpeg" data-wow-delay="0.1s" style={{borderRadius:"20px",height:"100px",width:"150px"}}/> */}
                 <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"style={{ 
     marginTop: "100px"}}>
                     <li class="" style={{color:"white"}}><a href="/"><strong style={{color:"white"}}>Home</strong></a><MdOutlineDoubleArrow/></li>
                     {/* <li class="breadcrumb-item"><a href="#">Pages</a></li> */}
                     <li class="breadcrumb-item active text-primary" style={{color:"white"}}><strong style={{color:"white"}}>Products</strong></li>
                 </ol>    
            </div>
      </div>

    <div className='paragraph-container'>
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link to={card.link}>
          <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            component="img"
            alt={card.title}
            height="140"
            image={card.image}
            sx={{
              objectFit: 'contain' // Ensures the image is contained within the defined area
            }}
          />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small" variant="contained">
                <Link to={card.link} style={{color:"white",textDecoration:"none"}}>More</Link>
              </Button>
            </CardActions> */}
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
    </div>
    </>
  );
}
