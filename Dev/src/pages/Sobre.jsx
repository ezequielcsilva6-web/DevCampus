function Sobre() {
  return (
    <section className="pagina">
      <p className="etiqueta">QUEM SOMOS</p>
      <h1>Sobre a DevCampus</h1>
      <p className="resumo">
        A DevCampus é uma faculdade que acredita que aprender tecnologia deve
        ser simples, acessível e cheio de prática.
      </p>

      <div className="bloco-texto">
        <h2>Nosso propósito</h2>
        <p>
          Queremos ajudar cada estudante a descobrir novas possibilidades e a
          construir conhecimentos para o futuro. Por isso, valorizamos a
          curiosidade, a colaboração e o aprendizado passo a passo.
        </p>
      </div>

      <div className="cartoes">
        <article className="cartao">
          <span className="numero">01</span>
          <h3>Aprender</h3>
          <p>Explicamos os conceitos com clareza e sem complicação.</p>
        </article>
        <article className="cartao">
          <span className="numero">02</span>
          <h3>Praticar</h3>
          <p>Colocamos as ideias em ação com atividades e projetos.</p>
        </article>
        <article className="cartao">
          <span className="numero">03</span>
          <h3>Crescer</h3>
          <p>Cada etapa ajuda você a seguir aprendendo com confiança.</p>
        </article>
      </div>
    </section>
  )
}

export default Sobre
