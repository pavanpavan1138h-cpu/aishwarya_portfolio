import React from 'react';

const experienceData = [
  { id: 1, role: 'Principal Architect', company: 'Aishwarya Design Studio', years: '2020 - Present', desc: 'Leading sustainable architectural and interior design projects globally.' },
  { id: 2, role: 'Senior Designer', company: 'Global Arch Firm', years: '2016 - 2020', desc: 'Specialized in high-end residential spaces and urban planning.' },
  { id: 3, role: 'Junior Architect', company: 'Creative Build Co.', years: '2014 - 2016', desc: 'Assisted in commercial real estate development and modern interiors.' },
];

const Experience = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">Experience</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
          {experienceData.map((item) => (
            <div key={item.id} className="team-card fade-in glass-box" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '3px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 300 }}>{item.role}</h3>
                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{item.years}</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 400 }}>{item.company}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
