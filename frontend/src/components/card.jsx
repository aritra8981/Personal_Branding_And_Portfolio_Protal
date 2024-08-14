import React from "react";
import "../components/style/card.css";
import Template1 from "../components/assests/temp1.PNG";
import Template2 from "../components/assests/Template-4.jpg";
import Template3 from "../components/assests/Template-2.jpg2.1.PNG";
import Template4 from "../components/assests/template 4.1.PNG";
import { Link } from "react-router-dom";
// import 

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <Link to="/Template">
          <img src={Template1} alt="Template 1" />
        </Link>
      </div>
      <div className="card2">
        <Link to="../clark-master/index.html">
          <img src={Template2} alt="Template 4" />
        </Link>
      </div>
      <div className="card3">
        <Link to="#">
          <img src={Template3} alt="Template 2" />
        </Link>
      </div>
      <div className="card4">
        <Link to="#">
          <img src={Template4} alt="Template 4.1" />
        </Link>
      </div>
    </div>
  );
};

export default CardContainer;
