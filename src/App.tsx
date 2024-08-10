// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <section id="about">
        <h1>Acerca de nosotros</h1>
      </section>
      <section id="services">
        <h1>Nuestros servicios</h1>
      </section>
      <section id="contact">
        <h1>Contáctanos</h1>
      </section>
      <Footer />
    </div>
  );
};

export default App;
