import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import logoFooter from '../../assets/images/footer.png'

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={columnStyles}>
        <motion.img
          src={logoFooter}
          alt="Company Logo"
          style={logoStyles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div style={columnStyles}>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone style={iconStyles} />
          <span style={textStyles}> 561 478 7336</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone style={iconStyles} />
          <span style={textStyles}>998 191 8853</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone style={iconStyles} />
          <span style={textStyles}>998 122 9370</span>
        </motion.div>
      </div>
      <div style={columnStyles}>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope style={iconStyles} />
          <span style={textStyles}>hello@CRAS.com
          </span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span style={textStyles}>Av. Acanceh, Manzana 2, Literal 3, Piso 3 <br/>Contraesquina, De Las Americas, 77504 Cancún, Q.R.</span>
        </motion.div>
      </div>
    </footer>
  );
};

// Estilos en línea
const footerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '20px',
  backgroundColor: '#152347',
  flexWrap: 'wrap',
};

const columnStyles: React.CSSProperties = {
  flex: '1',
  minWidth: '250px',
  padding: '10px',
};

const logoStyles: React.CSSProperties = {
  height: '60px',
};

const contactItemStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  margin: '10px 0',
  transition: 'transform 0.3s ease',
};

const iconStyles: React.CSSProperties = {
  color: 'white', // Azul
  fontSize: '1.5rem',
};

const textStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: 'white',
  fontWeight: '100',
  alignSelf: 'center',
  textAlign: 'justify'
};

export default Footer;
