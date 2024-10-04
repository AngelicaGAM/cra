import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import image2 from '../assets/images/services/image2.jpg';
import './OurServices.css';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const OurServices: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Nuestros Servicios" />
        <Tab label="Service 2" />
        <Tab label="Service 3" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className='corpSolutions'>
          <div className='text-corp'>
            <p>  Ofrecemos soluciones corporativas integrales, que incluyen consultoría de negocios para alta dirección de empresa, consultoría financiera, consultoría de marketing, consultoría de gestión, consultoría contable y fiscal, consultoría de capital humano y consultoría jurídica. Nuestros servicios están diseñados para otorgarlos de manera presencial y en línea </p>
          </div>
          <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
        </div>

      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography variant="h4">Service 2</Typography>
        <img src="service2-image-url" alt="Service 2" style={{ width: '100%' }} />
        <Typography>Description for Service 2</Typography>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography variant="h4">Service 3</Typography>
        <img src="service3-image-url" alt="Service 3" style={{ width: '100%' }} />
        <Typography>Description for Service 3</Typography>
      </TabPanel>
    </Box>
  );
};

export default OurServices;
