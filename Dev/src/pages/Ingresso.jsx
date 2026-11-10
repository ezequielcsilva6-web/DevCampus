import React from 'react';

function Ingresso() {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #8e44ad',
      backgroundColor: '#121212',
      color: '#f5f5f5',
      maxWidth: '600px', 
      margin: '20px auto',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#bb86fc', fontWeight: 'bold', margin: '0' }}>/ingresso</p>
      <h2 style={{ marginTop: '5px', color: '#ffffff' }}>Formas de Ingresso</h2>
      <p style={{ color: '#cccccc', marginBottom: '25px', lineHeight: '1.5' }}>
        Na Faculdade Horizonte, oferecemos diversas portas de entrada para você começar a construir o seu futuro. Escolha a opção que melhor se adapta ao seu perfil:
      </p>
      
      <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>📝 Vestibular Tradicional e Agendado</h3>
        <p style={{ marginTop: '10px', color: '#cccccc', lineHeight: '1.5' }}>
          Realize a nossa prova online ou presencial. No Vestibular Agendado, você escolhe a data e horário que melhor se encaixam na sua rotina. Já no Vestibular Tradicional, você concorre a bolsas de estudo por mérito de até 100%.
        </p>
      </div>

      <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>🎓 Nota do ENEM</h3>
        <p style={{ marginTop: '10px', color: '#cccccc', lineHeight: '1.5' }}>
          Utilize a sua nota do Exame Nacional do Ensino Médio (ENEM) dos últimos 5 anos. Dependendo da sua pontuação, você não precisa fazer a nossa prova e já garante descontos proporcionais à sua nota direto na mensalidade.
        </p>
      </div>

      <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>🔄 Transferência Externa</h3>
        <p style={{ marginTop: '10px', color: '#cccccc', lineHeight: '1.5' }}>
          Estuda em outra instituição e quer vir para a Horizonte? O processo é rápido, sem taxa de matrícula, com aproveitamento das disciplinas que você já cursou e 30% de desconto garantido até o final do curso.
        </p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>💰 Bolsas e Financiamentos</h3>
        <p style={{ marginTop: '10px', color: '#cccccc', lineHeight: '1.5' }}>
          Aceitamos alunos através do Prouni e FIES. Além disso, contamos com o programa "Horizonte Acessível", um crédito universitário próprio sem juros para você pagar a faculdade no dobro do tempo.
        </p>
      </div>

      <button style={{ 
        width: '100%', 
        padding: '12px', 
        backgroundColor: '#8e44ad', 
        color: 'white', 
        border: 'none', 
        borderRadius: '6px', 
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}>
        Iniciar Minha Inscrição
      </button>
    </div>
  );
}

export default Ingresso;