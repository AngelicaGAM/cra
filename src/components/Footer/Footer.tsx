import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
          <span style={textStyles}>+1 (123) 456-7890</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone style={iconStyles} />
          <span style={textStyles}>+1 (098) 765-4321</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone style={iconStyles} />
          <span style={textStyles}>+1 (555) 123-4567</span>
        </motion.div>
      </div>
      <div style={columnStyles}>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope style={iconStyles} />
          <span style={textStyles}>contact@company.com</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span style={textStyles}>1234 Company St, City, Country</span>
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
  backgroundColor: '#f0f0f0',
  borderTop: '1px solid #ccc',
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
  color: '#007bff', // Azul
  fontSize: '1.5rem',
};

const textStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
};

export default Footer;
