import { useEffect } from 'react';
import React from 'react'
import ReactGA from 'react-ga'

const Thankyou = () => {
        const redirectTo = (url) => {
    window.open(url, '_blank');
  };
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
}, []);


  return (
    <div className='thy' style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Thank You!</h1>
        <p style={styles.message}>We've received your message and will respond within 24 hours.</p>
       
       <br />
       <br/>


      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // Light gray background
  },
  content: {
    textAlign: 'center',
    padding: '40px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Box shadow for depth
    maxWidth: '400px',
    width: '100%',
    marginLeft:"-550px",
    marginBottom:"200px"
  },
  title: {
    fontSize: '2.5rem',
    color: '#333', // Dark title color
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#666', // Medium gray message color
    marginBottom: '30px',
  },
  additionalMessage: {
    fontSize: '1rem',
    color: '#888', // Light gray additional message color
  },
};

export default Thankyou