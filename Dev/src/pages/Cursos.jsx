const cursos = [
  {
    numero: '01',
    nome: 'Desenvolvimento Web',
    duracao: '6 meses',
    descricao: 'Aprenda a criar páginas e aplicações para a internet.',
  },
  {
    numero: '02',
    nome: 'Lógica de Programação',
    duracao: '4 meses',
    descricao: 'Conheça os fundamentos para resolver problemas com código.',
  },
  {
    numero: '03',
    nome: 'Design Digital',
    duracao: '5 meses',
    descricao: 'Explore cores, layouts e experiências para produtos digitais.',
  },
]

function Cursos() {
  return (
    <section className="pagina">
      <p className="etiqueta">APRENDA ALGO NOVO</p>
      <h1>Nossos cursos</h1>
      <p className="resumo">
        Escolha uma área, aprenda no seu ritmo e transforme curiosidade em
        conhecimento.
      </p>

      <div className="lista-cursos">
        {cursos.map((curso) => (
          <article className="curso" key={curso.numero}>
            <span className="numero">{curso.numero}</span>
            <div className="curso-info">
              <h2>{curso.nome}</h2>
              <p>{curso.descricao}</p>
            </div>
            <span className="duracao">{curso.duracao}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cursos
