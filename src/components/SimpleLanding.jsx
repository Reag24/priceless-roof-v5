import React from 'react';

const SimpleLanding = () => {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          Wilmington's #1 Roofing Company
        </h1>
        
        <p style={{
          fontSize: '2rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          18/18 5 Star Reviews
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '2rem'
        }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#fbbf24', fontSize: '2rem' }}>★</span>
          ))}
        </div>
        
        <p style={{
          fontSize: '1.5rem',
          color: '#374151',
          marginBottom: '3rem'
        }}>
          Professional roofing services for Wilmington, NC and the surrounding coastal areas.
        </p>
        
        <button style={{
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '15px 30px',
          fontSize: '1.5rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Book Free Inspection
        </button>
      </div>
    </div>
  );
};

export default SimpleLanding;
