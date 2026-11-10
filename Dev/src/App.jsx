import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Corrigido para "componets" (o nome da sua pasta) e com a extensão .jsx
import Nav from './components/Nav.jsx'; 
import Ingresso from './pages/Ingresso.jsx';
import Noticias from './pages/Noticias.jsx';
import Contato from './pages/Contato.jsx';
function App() {
  return (
    <BrowserRouter>
      {/* O Nav fica fora do <Routes> para aparecer em todas as páginas */}
      <Nav />
      
      <Routes>
        {/* As 3 páginas principais que criamos */}
        <Route path="/ingresso" element={<Ingresso />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contato" element={<Contato />} />
        
        {/* As outras 3 rotas para completar as 6 (feitas de forma simples direto aqui) */}
        <Route path="/" element={<div>Página Inicial</div>} />
        <Route path="/cursos" element={<div>Cursos da Instituição</div>} />
        <Route path="/sobre" element={<div>Sobre o Campus</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;