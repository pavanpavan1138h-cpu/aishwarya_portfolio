import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '50px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h1 className="section-title">Contact</h1>
        <div className="fade-in" style={{ marginTop: '3rem', maxWidth: '600px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem' }}>Get In Touch</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            I am currently open for exciting new opportunities, collaborations, or freelance projects. Feel free to reach out directly via email.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p><strong>Email:</strong> <a href="mailto:hi@aishwarya.me" style={{ color: 'var(--accent-color)' }}>hi@aishwarya.me</a></p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
