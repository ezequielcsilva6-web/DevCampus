import React from 'react';

function Contato() {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #8e44ad',
      backgroundColor: '#121212',
      color: '#f5f5f5',
      maxWidth: '400px', 
      margin: '20px auto',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#bb86fc', fontWeight: 'bold', margin: '0' }}>/contato</p>
      <h2 style={{ marginTop: '5px', color: '#ffffff' }}>Contato - Faculdade Horizonte</h2>
      
      <div style={{ marginBottom: '20px', lineHeight: '1.6', color: '#cccccc' }}>
        <p><strong>📍 Endereço:</strong> Av. Horizonte, 456 - Campus Central</p>
        <p><strong>📞 Telefone:</strong> (11) 4000-8000</p>
        <p><strong>✉️ E-mail:</strong> atendimento@faculdadehorizonte.edu.br</p>
      </div>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Seu Nome" 
          style={{ padding: '10px', backgroundColor: '#222', color: '#ffffff', border: '1px solid #444', borderRadius: '4px' }} 
        />
        <input 
          type="email" 
          placeholder="Seu E-mail" 
          style={{ padding: '10px', backgroundColor: '#222', color: '#ffffff', border: '1px solid #444', borderRadius: '4px' }} 
        />
        <textarea 
          placeholder="Sua Mensagem" 
          rows="4" 
          style={{ padding: '10px', backgroundColor: '#222', color: '#ffffff', border: '1px solid #444', borderRadius: '4px', resize: 'vertical' }}
        ></textarea>
        
        <button 
          type="button" 
          style={{ 
            padding: '12px', 
            backgroundColor: '#8e44ad', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default Contato;