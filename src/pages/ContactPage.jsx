import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '50px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <h1 className="section-title">Let's Talk</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', marginTop: '3rem' }}>
          <div className="fade-in">
            <h3 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem' }}>Reach out to me</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Have a project in mind or simply want to say hello? Fill out the form or reach me via my contact details. I'd love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p><strong>Email:</strong> hello@aishwarya.arch</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Creative Studio, Design District</p>
            </div>
          </div>
          <div className="glass-box fade-in" style={{ padding: '2.5rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', resize: 'none' }}></textarea>
              </div>
              <button className="cta-button" style={{ border: '1px solid var(--accent-color)', color: 'var(--accent-color)', marginTop: '0.5rem', cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
