import React from 'react';
import { useMediaQuery } from 'react-responsive';
import image from '../../assets/images/home-mobile.jpg'

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
          src="/path/to/your/video.mp4"
          style={mediaStyles}
          autoPlay
          loop
          muted
        />
      )}
      <div style={overlayStyles}>
        <h1 style={textStyles}>CRA Consulting</h1>
      </div>
    </div>
  );
};

// Estilos en línea
const containerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100vh',
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

const textStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '3rem',
  textAlign: 'center',
  textShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)', // Efecto difuminado en el texto
};

export default Home;
