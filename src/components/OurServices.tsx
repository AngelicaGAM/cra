import React, { CSSProperties } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './OurServices.css';
import ServiceCard from './ServiceCard';
interface CarouselCardProps {
  logo: string;
  text: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ logo, text }) => {
  const cardStyle: CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    maxWidth: '300px',
    margin: '1rem',
    cursor: 'pointer',
  };

  const logoStyle: CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const textStyle: CSSProperties = {
    color: '#333',
    textAlign: 'center',
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} style={cardStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <p style={textStyle}>{text}</p>
    </motion.div>
  );
};

const OurServices: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const containerStyle: CSSProperties = {
    marginTop:'3rem',
    marginBottom: '3rem',
    backgroundColor: 'white',
  };

  const cardsData = [
    {
      logo: 'https://grupoactiva.es/wp-content/uploads/2023/06/updated_Negocio_Consultoria.jpg',
      text: 'Consultoría de Negocios',
    },
    {
      logo: 'https://tse4.mm.bing.net/th?id=OIP.jNhkXH2W83dvbmAnYvDyqgHaEL&pid=Api&P=0&h=180',
      text: 'Consultoría Financiera',
    },
    {
      logo: 'https://tse3.mm.bing.net/th?id=OIP.NF-yrJy_8yWtlcyMjFZZNQHaE8&pid=Api&P=0&h=180',
      text: 'Consultoría de Marketing',
    },
    {
      logo: 'https://tse3.mm.bing.net/th?id=OIP.9nJ7i9ewCBMdiaW7zCxBCwHaE7&pid=Api&P=0&h=180',
      text: 'Consultoría de Gestión',
    },
    {
      logo: 'https://tse1.mm.bing.net/th?id=OIP._RevHXOjr2pyrizgtSoRywHaEX&pid=Api&P=0&h=180',
      text: 'Consultoría Contable y Fiscal',
    },
    {
      logo: 'https://tse2.mm.bing.net/th?id=OIP.Q362i6rnhNRyhQgu0ouXiAAAAA&pid=Api&P=0&h=180',
      text: 'Consultoría de Capital Humano y jurídica',
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#0056b3', marginBottom: '2rem' }}>Nuestros servicios</h2>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <ServiceCard key={index} image={card.logo} text={card.text} />
        ))}
      </Slider>
    </div>
  );
};

export default OurServices;
