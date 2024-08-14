// src/AboutUs.js
import React from 'react';
import about from '../components/style/about.css'
import frontendimg from '../components/assests/front-end.png'
import Backendimg from '../components/assests/Backend.png'

const AboutUs = () => {
  return (
    <>
      <div className='main-about'>
        <section className="about-us">
          <h1>About Us</h1>
          <div className="team-container">
            <div className="team-member">
              <img src={frontendimg} alt="Jay & Ashish" className="member-photo-frontend" />
              <h2>Jay & Ashish</h2>
              <p>Jane is a skilled designer with a passion for creating visually stunning designs. She has over 5 years of experience in graphic design and UX/UI design.</p>
            </div>
            <div className="team-member">
              <img src= {Backendimg} alt="Aritra, Bharti & Ashutosh" className="member-photo-Backend" />
              <h2>Aritra, Bharti & Ashutosh</h2>
              <p>John is a talented developer specializing in front-end technologies. With a knack for problem-solving and a love for coding, he brings ideas to life with clean, efficient code.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
          <section className="bio">
            <h2>Our Mission</h2>
            <p>We are dedicated to delivering high-quality work that meets our clients' needs. Our mission is to create innovative solutions and build long-lasting relationships with our clients.</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
