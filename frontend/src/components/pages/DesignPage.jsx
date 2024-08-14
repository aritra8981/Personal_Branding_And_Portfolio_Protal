import React from 'react';
import './DesignPage.css';
import Navbar from '../navbar';
// import Suggestion from '../suggestion';
import PortfolioSection from '../portfolioParaSection';
import CardContainer from '../card';

const MainContent = () => {
  return (
    <div className="Desining-main">
      <Navbar/>
      {/* <Suggestion /> */}
      <PortfolioSection />
      <CardContainer />
    </div>
  );
};

export default MainContent;
