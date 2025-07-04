import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import DemonstrationCenter from './Pages/DemonstrationCenter';
import Spares from './Pages/Spares';
import EnggService from './Pages/EnggService';
import Hardcastel from './Pages/Hardcastel';
import Tenryu from './Pages/Tenryu';
import Magicut from './Pages/Magicut';
import Esconfiles from './Pages/Esconfiles';
import Solar from './Pages/Solar';
import OtherCut from './Pages/OtherCut';
import Whatsapp from './Pages/Whatsapp';
import Testinomial from './Pages/Testinomial';
import ProductSlider from './Pages/ProductSlider';

import Inquiry from './Components/Inquiry';
import SplitCarousel from './Components/Splitcaros';
import Wikus from './Pages/Wikus';
import Singular from './Pages/Singular';
import Partners from './Components/Partners';
import DownloadComponent from './Components/DownloadComponent';
import Thankyou from './Pages/Thankyou';
import SolarSecond from './Pages/SolarSecond';
import SolarThree from './Pages/SolarThree';
import Ff from './Pages/ff';
import VBelt from './Pages/VBelt';
import ScrollToTop from './Components/ScrollToTop';
import ColdplayWebsite from './Components/ColdplayWebsite';
import Popup from './Components/Popup'
import OurPartners from './Components/OurPartners';
import UmangEngineeringServices from './Components/UmangEngineeringServices';
import UmangMarktingService from './Components/UmangMarktingService';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Check if the popup has been shown before using localStorage
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true); // Show popup if it hasn't been shown
      localStorage.setItem('popupShown', 'true'); // Set the flag so it doesn't show again
    }else{
      localStorage.removeItem('popupShown')
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup when the user clicks 'Close'
  };
  return (
    <>
    <Router>
   
      <Navbar />
      <ScrollToTop />
      {/* <Slider /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/demonstrationcenter" element={<DemonstrationCenter />} /> */}
        {/* <Route path="/spares" element={<Spares />} />
        <Route path="/enggservice" element={<EnggService />} /> */}
        <Route path='/UmangEngineeringServices' element={<UmangEngineeringServices/>}/>
        <Route path='/UmangMarketingService' element={<UmangMarktingService/>}/>
        <Route path="/hardcastel" element={<Hardcastel />} />
        <Route path="/tenryu" element={<Tenryu />} />
        <Route path="/magicut" element={<Magicut />} />
        <Route path="/Escon" element={<Esconfiles />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/othercut" element={<OtherCut />} />
        <Route path='/testinomial' element={<Testinomial/>}/>
        <Route path='/productSlider' element={<ProductSlider/>}/>   
        <Route path='/inquiry' element={<Inquiry/>}/>
        <Route path='/SplitCarousel' element={<SplitCarousel/>}/>
        <Route path="/wikus" element={<Wikus />} />
        <Route path="/singular" element={<Singular />} />
        <Route path="/partner" element={<Partners/>} />
        <Route path="/download" element={<DownloadComponent/>}/>
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/service/:servicePath" element={<Service />} />
      
        <Route path="/Stwo" element={<SolarSecond/>}/>
        <Route path="/Sthree" element={<SolarThree/>}/>
        <Route path='/Caltex' element={<Ff/>}/>
        <Route path="/Esconfiles" element={<Esconfiles/>}/>
        <Route path='/magicut' element={<Magicut/>}/>
        <Route path='/Vbelt' element={<VBelt/>}/>
        <Route path='/cold' element={<ColdplayWebsite/>}/>
        <Route path='/Partners' element={<OurPartners/>}/>
      
        
      </Routes>
      <Whatsapp />
      <Footer />
    
      <Inquiry/>
    </Router>
  
   </>
  );
}

export default App;
