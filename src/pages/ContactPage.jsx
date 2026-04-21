import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="container contact-container">
        <h1 className="section-title">Contact</h1>
        <section className="contact-content fade-in">
          <h3>Get In Touch</h3>
          <p>
            Open to new opportunities, meaningful collaborations, and bespoke freelance projects — I warmly invite you to connect via email.
          </p>
          <div className="contact-info-card">
            <p><strong>Email:</strong> <a href="mailto:aishwarya.rk757@gmail.com" className="contact-link">aishwarya.rk757@gmail.com</a></p>
            <p><strong>Mobile:</strong> <a href="tel:+918951644757" className="contact-link">+91 8951644757</a></p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
