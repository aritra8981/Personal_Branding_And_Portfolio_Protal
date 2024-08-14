import React from 'react';
import portfolio from '../components/assests/portfolio.jfif';
import '../components/style/portfolioParaSection.css';

const PortfolioSection = () => {
  return (
    <div className="D-para">
      <div>
        <h2>Portfolio Template</h2>
        <p>
        "Elegantly designed framework that showcases your work with clarity and style. 
        It features a streamlined layout that highlights your projects, skills, and achievements,
        presenting them in a visually appealing and organized manner."
        </p>
      </div> 
      <div className="para-img">
        <img src={portfolio} alt="Portfolio" />
      </div>
    </div>
  );
};

export default PortfolioSection;
