// src/ContactUs.js
import React from 'react';
import Contact from '../components/style/contact.css'

const ContactUs = () => {
  return (
    <>
      <div className='contact-main'>
        <section className="contact">
          <h1>Contact Us</h1>
          <form action="your-server-endpoint" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
