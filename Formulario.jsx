import React from 'react';

const LoginForm = () => {
  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3 style={{ textAlign: 'center' }}>Exámen</h3>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Usuario:</label>
        <input 
          type="text" 
          id="username" 
          placeholder="Usuario"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Contraseña"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <button style={{ padding: '10px 15px', backgroundColor: '#370eee', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
