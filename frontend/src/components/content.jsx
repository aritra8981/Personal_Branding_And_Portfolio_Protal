import React from 'react';
import '../components/style/content.css';
import { Link } from 'react-router-dom';
const ContentSection = () => {
  return (
    <div className="content">
      <h1>
        Bringing <br />
        <span>Ambition</span>
        <br />
        to Life
      </h1>
      <p className="para">
        Innovative designs and creative solutions tailored to your needs.<br />
        Explore my portfolio to see how I blend creativity with precision,<br />
        turning ideas into impactful realities. Let's work together to bring<br />
        your vision to life with excellence and flair.
      </p>
      <button className="cn">
        <Link to="/signup">JOIN US</Link>
      </button>
    </div>
  );
};

export default ContentSection;
