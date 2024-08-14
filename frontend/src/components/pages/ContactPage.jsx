import React from 'react';
import './ContactPage.css';
import Contact  from '../contact.jsx'
import Navbar from '../navbar.jsx';

const ContactPage = () => {
  return <div className='Contacts-Main'>
    <Navbar/>
    <Contact/>
  </div>;
};

export default ContactPage;
