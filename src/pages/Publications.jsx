import React from 'react';

const pubData = [
  { id: 1, title: 'Architectural Digest Feature', year: '2023', text: 'Our minimalist haven project was featured in the top modern spaces issue.' },
  { id: 2, title: 'Domus Magazine', year: '2022', text: 'An extensive interview discussing sustainable interior materials.' },
  { id: 3, title: 'DesignBoom Highlights', year: '2021', text: 'Recognized as an emerging architect shaping urban environments.' },
];

const Publications = () => {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="container">
        <h1 className="section-title">Publications</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
          {pubData.map((pub) => (
            <div key={pub.id} className="glass-box fade-in" style={{ padding: '2.5rem', borderLeft: '3px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '300' }}>{pub.title}</h3>
                <span style={{ color: 'var(--text-secondary)' }}>{pub.year}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{pub.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
