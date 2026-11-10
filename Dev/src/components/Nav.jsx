import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header className="topo">
      <NavLink className="marca" to="/">
        <span className="marca-icone">D</span> DevCampus
      </NavLink>

      <nav className="menu">
        <NavLink to="/" end>Início</NavLink>
        {' | '}
        <NavLink to="/ingresso">Ingresso</NavLink>
        {' | '}
        <NavLink to="/noticias">Notícias</NavLink>
        {' | '}
        <NavLink to="/contato">Contato</NavLink>
        {' | '}
        <NavLink to="/cursos">Cursos</NavLink>
        {' | '}
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  )
}

export default Nav
