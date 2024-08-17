// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import OrgStructure from './components/Home/OrgStructure';
import AboutUs from './components/Home/AboutUs';
import ContactForm from './components/ContactForm';
import OurServices from './components/OurServices';
import MarketClients from './components/MarketClients';

import './App.css';

const App: React.FC = () => {
  const people = [
    { name: 'Dave Castillo', position: 'CBDO & PARTNER', photoUrl: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg' },
    { name: 'Johnny Alvarez', position: 'CFO & PARTNER', photoUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { name: 'Erick Rangel', position: 'CFO & PARTNER', photoUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  ];

  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
    
      <OurServices />
      <MarketClients />
      <OrgStructure people={people} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
