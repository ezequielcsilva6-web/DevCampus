import React from 'react';

function Noticias() {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #8e44ad', // Borda roxa
      backgroundColor: '#121212', // Fundo quase preto
      color: '#f5f5f5', // Texto principal claro para leitura
      maxWidth: '600px', 
      margin: '20px auto',
      borderRadius: '8px'
    }}>
      <p style={{ color: '#bb86fc', fontWeight: 'bold', margin: '0' }}>/noticias</p>
      <h2 style={{ marginTop: '5px', color: '#ffffff' }}>Notícias - Faculdade Horizonte</h2>
      
      <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>Inscrições Abertas para o Vestibular 2027</h3>
        <span style={{ fontSize: '12px', color: '#a0a0a0' }}>Publicado em: 10 de Novembro de 2026</span>
        <p style={{ marginTop: '10px', color: '#cccccc' }}>
          A Faculdade Horizonte anuncia a abertura das inscrições para o vestibular de verão. 
          Este ano, temos a alegria de lançar três novos cursos na área de Tecnologia da Informação. 
          Garanta sua vaga!
        </p>
      </div>

      <div style={{ marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>Inauguração do Novo Laboratório Maker</h3>
        <span style={{ fontSize: '12px', color: '#a0a0a0' }}>Publicado em: 05 de Novembro de 2026</span>
        <p style={{ marginTop: '10px', color: '#cccccc' }}>
          O nosso campus principal conta agora com um espaço moderno equipado com impressoras 3D, 
          kits de robótica e computadores de última geração, disponível para todos os alunos da instituição.
        </p>
      </div>

      <div>
        <h3 style={{ margin: '0 0 5px 0', color: '#b28dff' }}>Semana de Carreiras e Estágios</h3>
        <span style={{ fontSize: '12px', color: '#a0a0a0' }}>Publicado em: 28 de Outubro de 2026</span>
        <p style={{ marginTop: '10px', color: '#cccccc' }}>
          Prepare o seu currículo! Na próxima semana, receberemos mais de 20 empresas parceiras 
          no pátio central para palestras, workshops e entrevistas de estágio com nossos estudantes.
        </p>
      </div>
    </div>
  );
}

export default Noticias;