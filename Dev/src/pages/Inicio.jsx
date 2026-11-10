import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <>
      <section className="destaque">
        <p className="etiqueta">APRENDA. PRATIQUE. EVOLUA.</p>
        <h1>Seu próximo passo começa aqui.</h1>
        <p className="resumo">
          Na DevCampus, você aprende tecnologia com cursos feitos para sair da
          ideia e chegar à prática.
        </p>
        <Link className="botao" to="/cursos">Conheça os cursos <span>→</span></Link>
      </section>

      <section className="secao">
        <div className="titulo-secao">
          <div>
            <p className="etiqueta">EXPLORE A DEVCAMPUS</p>
            <h2>Um lugar para começar</h2>
          </div>
          <p>Conheça nossa faculdade e encontre um caminho para aprender.</p>
        </div>

        <div className="cartoes">
          <Link className="cartao" to="/sobre">
            <span className="numero">01</span>
            <h3>Sobre nós</h3>
            <p>Descubra nossa história, missão e jeito de ensinar.</p>
            <span className="seta">→</span>
          </Link>
          <Link className="cartao" to="/cursos">
            <span className="numero">02</span>
            <h3>Nossos cursos</h3>
            <p>Veja opções para dar seus primeiros passos na tecnologia.</p>
            <span className="seta">→</span>
          </Link>
          <Link className="cartao" to="/cursos">
            <span className="numero">03</span>
            <h3>Aprenda fazendo</h3>
            <p>Conhecimento para usar em projetos e desafios reais.</p>
            <span className="seta">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Inicio
