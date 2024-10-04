import React from 'react';
import { motion } from 'framer-motion';

interface Person {
  name: string;
  position: string;
  photoUrl: string;
}

interface BioProps {
  people: Person[];
}

const OrgStructure: React.FC<BioProps> = ({ people }) => {
  return (
    <div style={{marginTop: '3rem'}}>
      <h2 >Nuestro Equipo</h2>
      <div style={{ marginTop: '2rem', marginBottom: '3rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>

        {people.map((person, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ textAlign: 'center' }}
          >
            <motion.img
              src={person.photoUrl}
              alt={person.name}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 style={{ margin: 0 }}>{person.name}</h3>
              <p style={{ margin: 0, color: '#555' }}>{person.position}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default OrgStructure;
