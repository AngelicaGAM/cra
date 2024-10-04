import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import { FaWhatsapp } from 'react-icons/fa';



const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: isMobile ? 'space-between': 'space-around'  ,
    alignItems: 'center',
    padding: '20px 20px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  };

 
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header style={headerStyles}>
      <div>
        <img
          src={logo} // Reemplaza con la ruta de tu logo
          alt="Logo"
          style={logoStyles}
          
        />
      </div>

      {/* Menú para Desktop */}
      {!isMobile && (
        <nav style={navStyles}>
          <motion.a
            href="#section1"
            style={navLinkStyles}
            whileHover={{ scale: 1.1, color: '#17B009', borderBottom: '1px solid #17B009' }}
            whileFocus={{ scale: 1.1 }}
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            Servicios
          </motion.a>
          <motion.a
            href="#section2"
            style={navLinkStyles}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
           Clientes
          </motion.a>
          <motion.a
            href="#section3"
            style={navLinkStyles}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            Contacto

          </motion.a>
        </nav>
      )}

      {/* Botón de WhatsApp (solo en Desktop) */}
      {!isMobile && (
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyles}
          whileHover={{ scale: 1.1 }}
          
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 }
          }}
        >
        <FaWhatsapp style={iconStyles} />
     
        </motion.a>
      )}

      {/* Menú Sandwich para Mobile */}
      {isMobile && (
        <>
          <div style={menuIconStyles} onClick={toggleMenu}>
            <FiMenu size={24} />
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={mobileMenuContainerStyles}
            >
              <div style={menuCloseIconStyles} onClick={toggleMenu}>
                <FiX size={24} />
              </div>
              <nav style={mobileMenuStyles}>
                <a href="#section1" style={mobileNavLinkStyles} onClick={toggleMenu}>Sección 1</a>
                <a href="#section2" style={mobileNavLinkStyles} onClick={toggleMenu}>Sección 2</a>
                <a href="#section3" style={mobileNavLinkStyles} onClick={toggleMenu}>Sección 3</a>
              </nav>
            </motion.div>
          )}
        </>
      )}
    </header>
  );
  

};

// Estilos en línea


const logoStyles: React.CSSProperties = {
  height: '50px',
  cursor: 'pointer',
};

const navStyles: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
};

const navLinkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#737373', 
  fontWeight: 500,
  cursor: 'pointer',
  position: 'relative',
};





const menuIconStyles: React.CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const mobileMenuContainerStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50vh',
  backgroundColor: '#fff',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '20px',
};

const menuCloseIconStyles: React.CSSProperties = {
  alignSelf: 'flex-end',
  padding: '10px',
  cursor: 'pointer',
};

const mobileMenuStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  marginTop: '20px',
};

const mobileNavLinkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#737373', 
  fontWeight: 500,
  fontSize: '24px',
};


const buttonStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  backgroundColor: '#25D366',
  color: '#fff',
  borderRadius: '50%',
  textDecoration: 'none',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
};

const iconStyles: React.CSSProperties = {
  fontSize: '32px'
};


export default Header;
