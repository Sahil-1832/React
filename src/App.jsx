import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  )
}

export default App
