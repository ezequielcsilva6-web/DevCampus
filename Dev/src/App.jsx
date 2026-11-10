import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Cursos from './pages/Cursos'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Nav />
        <main className="conteudo">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        </main>
        <footer className="rodape">
          <p>DevCampus — aprendendo e criando juntos.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
