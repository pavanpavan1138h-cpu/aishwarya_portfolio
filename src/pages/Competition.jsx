import React from 'react';

const compData = [
  { id: 1, title: 'International Design Awards - Gold', year: '2023', project: 'Glass Retreat' },
  { id: 2, title: 'National Sustainable Architecture Award', year: '2022', project: 'Timber Pavilion' },
  { id: 3, title: 'Urban Design Competition - Finalist', year: '2021', project: 'City Square Revitalization' },
];

const Competition = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">Competitions</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
          {compData.map((comp) => (
            <div key={comp.id} className="glass-box fade-in" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: '2.5rem', opacity: 0.05, fontSize: '4rem', fontWeight: 700, pointerEvents: 'none' }}>#0{comp.id}</div>
              <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{comp.year}</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '300', marginTop: '0.5rem', marginBottom: '1rem' }}>{comp.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Project: {comp.project}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;
