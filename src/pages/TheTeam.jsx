import React from 'react';

const teamData = [
  { id: 1, name: 'Aishwarya', role: 'Principal Architect', img: 'https://images.unsplash.com/photo-1541888081682-1df6bce1eb58?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Rohan Sharma', role: 'Senior Designer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Priya Iyer', role: 'Interior Specialist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop' },
];

const TheTeam = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">The Team</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
          {teamData.map((member) => (
            <div key={member.id} className="team-card fade-in">
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.4s ease' }} onMouseOver={e=>e.currentTarget.style.filter='grayscale(0%)'} onMouseOut={e=>e.currentTarget.style.filter='grayscale(100%)'} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 300 }}>{member.name}</h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
