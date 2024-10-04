import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../assets/images/home-mobile.jpg'
import video from '../../assets/images/video/videoBanner.mp4'

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div style={containerStyles}>
      {isMobile ? (
        <img
          src={image}
          alt="Mobile Image"
          style={mediaStyles}
        />
      ) : (
        <video
          src={video}
          style={mediaStyles}
          autoPlay
          loop
          muted
        />
      )}
      <div style={overlayStyles}>
        <div style={textstylesDiv}>
        <h1 style={textStyles}>CRA Consulting</h1>
        <p> Innovamos, optimizamos y crecemos contigo: tu éxito es nuestra misión. </p>
        </div>
    
      </div>
    </div>
  );
};

// Estilos en línea
const containerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '60vh',
  overflow: 'hidden',
};

const mediaStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.5)', // Capa de difuminado oscuro
};

const textstylesDiv: React.CSSProperties = {
    color: 'white', 
    fontWeight: 'bold'
}
const textStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '3rem',
  textAlign: 'center',
  textShadow: '0px 4px 8px #152347', // Efecto difuminado en el texto
};


export default Home;
