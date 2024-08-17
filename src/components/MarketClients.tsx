import React from 'react';
import { motion } from 'framer-motion';
import './MarketClients.css';

const MarketClients: React.FC = () => {
  const services = [
    { name: 'Atención médica', image: 'https://3.bp.blogspot.com/-BQEEvw68Y_8/Ut6BeruTbxI/AAAAAAAACho/NnlM-PkQ1hs/s1600/avionA320.jpg', link: '#atencion-medica' },
    { name: 'Aviación privada', image: '/images/aviacion-privada.jpg', link: '#aviacion-privada' },
    { name: 'Bienes raíces', image: '/images/bienes-raices.jpg', link: '#bienes-raices' },
    { name: 'Hoteles', image: '/images/hoteles.jpg', link: '#hoteles' },
    { name: 'Turismo', image: '/images/turismo.jpg', link: '#turismo' },
    { name: 'Conserjería', image: '/images/conserjeria.jpg', link: '#conserjeria' },
    { name: 'Lujo', image: '/images/lujo.jpg', link: '#lujo' },
    { name: 'Finanzas', image: '/images/finanzas.jpg', link: '#finanzas' },
  ];

  return (
    <section className="market-clients">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Mercado y Clientes</h2>
        <p>Atendemos diversos segmentos del mercado, incluidos:</p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.a
            key={index}
            href={service.link}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-content">
              <img src={service.image} alt={service.name} className="service-image" />
              <div className="service-text">
                <h3>{service.name}</h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p 
        className="footer-text"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}>
        Hemos construido sólidas relaciones con los clientes en varias regiones del mundo.
      </motion.p>
    </section>
  );
};

export default MarketClients;
