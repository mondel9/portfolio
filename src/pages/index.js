import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import { projObjOne, projObjTwo, projObjFour } from '../components/Project/Data';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <h1 id="portfolio" className="pad portfolio-title">Portfolio</h1>
      <Project {...projObjOne} />
      <Project {...projObjTwo} />
      <Project {...projObjFour} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;