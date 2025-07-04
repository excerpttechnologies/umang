import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const ColdplayWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [cloneStyle, setCloneStyle] = useState({});
  const gridWrapperRef = useRef(null);
  const navRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const hListRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (gridWrapperRef.current) {
        gridWrapperRef.current.classList.remove('init');
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('#home section');
      sections.forEach((section, index) => {
        const transY = index * window.scrollY;
        section.style.transform = `translateY(-${transY}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (index, e) => {
    setActiveTab(index);
    createRipple(e);
    createMegaRipple(e);
    setIsContentOpen(true);
  };

  const createRipple = (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX - e.currentTarget.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.currentTarget.offsetTop}px`;
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  };

  const createMegaRipple = (e) => {
    const megaRipple = document.createElement('div');
    megaRipple.classList.add('ripple', 'mega');
    megaRipple.style.left = `${e.clientX}px`;
    megaRipple.style.top = `${e.clientY}px`;
    megaRipple.style.background = window.getComputedStyle(e.currentTarget).borderColor;
    contentWrapperRef.current.querySelector('.content').appendChild(megaRipple);
    setTimeout(() => {
      megaRipple.style.opacity = '0';
      setTimeout(() => megaRipple.remove(), 1000);
    }, 500);
  };

  const handleCardClick = (index, e) => {
    setActiveTab(index);
    setIsContentOpen(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setCloneStyle({
      top: rect.top + rect.height / 2,
      left: rect.left + rect.width / 2,
      height: rect.height,
      width: rect.width,
    });
    setTimeout(() => {
      setCloneStyle({
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
      });
    }, 0);
    setTimeout(() => {
      navRef.current.classList.remove('inactive');
      navRef.current.querySelector('.active').scrollIntoView();
    }, 500);
  };

  const handleClose = () => {
    navRef.current.classList.add('inactive');
    setTimeout(() => {
      const activeCard = gridWrapperRef.current.querySelectorAll('div')[activeTab].querySelector('div');
      const rect = activeCard.getBoundingClientRect();
      setCloneStyle({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
        height: rect.height,
        width: rect.width,
      });
      setTimeout(() => {
        setIsContentOpen(false);
        setCloneStyle({});
      }, 700);
    }, 500);
  };

  useEffect(() => {
    let leftScrollTarget = 0;
    const handleWheel = (e) => {
      e.preventDefault();
      const temp = leftScrollTarget - e.deltaY * 10;
      if (temp <= 0) {
        leftScrollTarget = 0;
      } else if (temp >= hListRef.current.scrollWidth - hListRef.current.clientWidth) {
        leftScrollTarget = hListRef.current.scrollWidth - hListRef.current.clientWidth;
      } else {
        leftScrollTarget = temp;
      }
    };

    const render = () => {
      if (hListRef.current) {
        hListRef.current.scrollLeft += (leftScrollTarget - hListRef.current.scrollLeft) / 10;
      }
      requestAnimationFrame(render);
    };

    if (hListRef.current) {
      hListRef.current.addEventListener('wheel', handleWheel);
    }
    render();

    return () => {
      if (hListRef.current) {
        hListRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const tabs = ['About', 'Work', 'Profiles', 'Store', 'Tours', 'Videos', 'News', 'Underground', 'Connect'];
  const cards = ['About', 'Work', 'Profiles', 'Store', 'Tours', 'Videos', 'News', 'Underground'];

  return (
    <>
      <nav className={`main hList ${isContentOpen ? '' : 'inactive'}`} ref={navRef}>
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={(e) => handleTabClick(index, e)}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span>{tab}</span>
          </div>
        ))}
      </nav>
      <div id="home">
        <span className="pagetag">#HOME</span>
        <section className="header">
          <div>
            <h2><span>W</span><span>ELCOME</span></h2>
            <h5>COLDPLAY</h5>
          </div>
          <div className='logo'></div>
        </section>
        <section id="grid_wrapper" className="init" ref={gridWrapperRef}>
          {cards.map((card, index) => (
            <div key={card} style={{ transitionDelay: `${index * 0.05}s` }}>
              <div onClick={(e) => handleCardClick(index, e)}>
                <span>{card}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div id="content_wrapper" className={isContentOpen ? '' : 'inactive'} ref={contentWrapperRef}>
        <button className="close" onClick={handleClose}><X /></button>
        <div className='content'>
          {tabs.map((tab, index) => (
            <section key={tab} className={index === activeTab ? 'active' : ''}>
              <h2>#{index + 1}</h2>
              <p>Here's some content for the {tab} tab.</p>
              <p>You can replace this with actual content for each tab.</p>
            </section>
          ))}
        </div>
        {isContentOpen && (
          <div className="clone" style={cloneStyle}>
            <span>{cards[activeTab]}</span>
          </div>
        )}
      </div>
      <div id="footer">
        <span style={{display:'block',fontSize:'0.9em',lineHeight:'55px'}}>
          <span style={{display:'inline-block'}}>&copy; <span style={{fontFamily:'Titillium Web',fontWeight:900,letterSpacing:'0.06em'}}>CALVRIX</span> Design 2016</span>
        </span>
        <span style={{display:'block',fontSize:'0.7em',lineHeight:'30px',marginTop:'-25px',color:'rgba(255,255,255,0.15)'}}>&lang; !--kidding obviously-- &rang;</span>
      </div>
      <style jsx>{`
        body {
          margin: 0;
          overflow-X: hidden;
          font-family: "Raleway", "Roboto", "Helvetica", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-font-smoothing: antialiased;
          -ms-font-smoothing: antialiased;
          font-smoothing: antialiased;
          background: rgba(18,18,26,1);
          background-image: url('http://artlantis-media.ru/static/img/0000/0002/7260/27260842.qvpm616fga.png');
          background-blend-mode: overlay;
          background-size: 15%;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        /* Rest of the CSS goes here */
      `}</style>
    </>
  );
};

export default ColdplayWebsite;
