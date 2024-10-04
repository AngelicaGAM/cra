import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import OrgStructure from './components/Home/OrgStructure';
import AboutUs from './components/Home/AboutUs';
import ContactForm from './components/ContactForm';
import OurServices from './components/OurServices';
import MarketClients from './components/MarketClients';
import LogoClients from './components/LogoClients';
import './App.css';

import crystal from './assets/images/logosClientes/CRYSTAL.webp';
import yeahSmile from './assets/images/logosClientes/yeahsmile.png';
import hospital from './assets/images/logosClientes/hospitalAngels.jpeg';
import kratz from './assets/images/logosClientes/krastz.jpg';

const App: React.FC = () => {
  const people = [
    { name: 'Dave Castillo', position: 'CBDO & PARTNER', photoUrl: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg' },
    { name: 'Johnny Alvarez', position: 'CFO & PARTNER', photoUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { name: 'Erick Rangel', position: 'CFO & PARTNER', photoUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  ];

  const logos = [
    crystal,
    yeahSmile,
    hospital,
    kratz
  ]

  const title = "Ofrecemos soluciones corporativas integrales";
  const content = [
    "Que incluyen consultoría de negocios para alta dirección de empresa, consultoría financiera, consultoría de marketing, consultoría de gestión, consultoría contable y fiscal, consultoría de capital humano y consultoría jurídica.",
    "Nuestros servicios están diseñados para otorgarlos de manera presencial y en línea."
  ];


  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
    
      <OurServices title={title} content={content}/>
      {/* <MarketClients /> */}
      <OrgStructure people={people} />
      
       <LogoClients logos={logos} /> 
       <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
