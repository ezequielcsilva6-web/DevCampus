import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ padding: '15px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
      <Link to="/">Home</Link> | {' '}
      <Link to="/ingresso">Ingresso</Link> | {' '}
      <Link to="/noticias">Notícias</Link> | {' '}
      <Link to="/contato">Contato</Link> | {' '}
      <Link to="/cursos">Cursos</Link> | {' '}
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Nav;