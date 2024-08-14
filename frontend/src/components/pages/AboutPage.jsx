import React from 'react';
import './AboutPage.css';
import About from '../about.jsx'
import Navbar from '../navbar.jsx';

const AboutPage = () => {
  return <div className='AboutPage-main'>
    <Navbar/>
    <About/>
  </div>;
};

export default AboutPage;
