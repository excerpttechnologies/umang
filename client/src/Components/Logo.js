import React, { useEffect } from 'react';
import './Logo.css'
function Logo ({ showGif }) {
  useEffect(() => {
    // Preload both images on component mount
    const gifImage = new Image();
    gifImage.src = "img/tp.gif";
    const staticImage = new Image();
    staticImage.src = "img/tpp7.png";
  }, []);

  return (
    <div className="logo-container" style={{ marginBottom: '6px' }}>
      <img
        src={showGif ? "img/tp.gif" : "img/tpp7.png"}
        alt="Umang Marketing Logo"
        className="logo"
        style={{
          transition: 'opacity 0.5s',
          opacity: showGif ? 1 : 0,
          position: 'absolute', // For smooth overlay switching
          top: 0,
          left: 0,
        }}
      />
      {/* <img
        src={!showGif ? "img/tpp7.png" : "img/tp.gif"}
        alt="Umang Marketing Static"
        className="logo"
        style={{
          transition: 'opacity 0.5s',
          opacity: showGif ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      /> */}
      {showGif ? (
                  <img src="img/tp.gif" alt="umang Marketing" className="logo" />
              ) : <img src="img/tpp7.png" alt="umang Marketing" className="logo"/>}
    </div>
  );
};

export default Logo;