import React from 'react';
import './HomePage.css';
import Navbar from '../navbar';
import LoginForm from '../login';
import ContentSection from '../content';

const Home = () => {
  return (
    <div className="HomePage-main">
      <Navbar/>
      <ContentSection/>
      <LoginForm/>
    </div>
  );
};

export default Home;