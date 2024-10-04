import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoClients.css';

interface LogoClientsProps {
  logos: string[];
}

const LogoClients: React.FC<LogoClientsProps> = ({ logos }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, // Desplazarse de una en una
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };


  const cardStyle: React.CSSProperties = {

    width: "180px", // Tamaño de la card
    height: "180px", // Altura de la card
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto", // Centrando las cards con margen
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Sombra de la card
    borderRadius: "8px", // Borde redondeado
    backgroundColor: "red", // Fondo blanco para la card
    padding: "10px",
  };

  const logoStyle: React.CSSProperties = {
    width: "130px", // Fijar el ancho de la imagen
    height: "140px", // Fijar la altura de la imagen
    objectFit: "contain", // Asegura que la imagen se ajuste sin distorsionar
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center", // Centramos el texto
    marginBottom: "20px", // Margen inferior para separar del contenido
    fontSize: "24px", // Tamaño de fuente para el título
    fontWeight: "bold", // Negrita para el título
  };

  return (
    <div style={{ width: "80%", margin: " 4rem auto 3rem auto ",  }}>
      <h2 >Nuestros Clientes</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="div-logo" key={index} style={cardStyle}>
            <img
              src={logo}
              alt={`logo-cliente-${index}`}
              style={logoStyle} />
          </div>
         ))}
      </Slider>
  
    </div>
  );
};

export default LogoClients;
