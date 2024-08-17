import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section
      style={{
        padding: '50px 20px',
        backgroundColor: '#f7f7f7',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Acerca de Nosotros</h2>
        <p style={{ maxWidth: '800px', margin: '20px auto', color: '#555' }}>
        Fundada en 2024, CRAS Consulting tiene como objetivo revolucionar la cultura corporativa en las empresas globales.
        Nuestra visión es liderar la Consultoría Corporativa con estrategias de vanguardia, y nuestra misión es impulsar resultados
        excepcionales para nuestros clientes. Con nuestra experiencia, nos estamos convirtiendo rápidamente en líderes de la industria.
        </p>
      </motion.div>
    
    </section>
  );
};

export default AboutUs;
