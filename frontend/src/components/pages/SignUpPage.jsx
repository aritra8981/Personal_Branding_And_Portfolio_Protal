import React from 'react';
import './SignUpPage.css';
import Navbar from '../navbar';
import SignUpForm from '../SignUpForm';

const MainContent = () => {
  return (
    <div className="SignUpPage-main">
      <Navbar/>
      <SignUpForm />
    </div>
  );
};

export default MainContent;
