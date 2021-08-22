import { Container } from './styles'
export default function Card({ informations }) {
  return (
    <Container>
      <strong className="title">{informations.title}</strong>
      <img className="image" src={informations.image} />
      <p className="description">{informations.description}</p>
      <div className="tools">
        Ferramentas:{' '}
        {informations.tools.map((tool, index) => (
          <span key={index}>
            <strong>{tool}</strong>
            {index === informations.tools.length - 1 ? '' : ', '}
          </span>
        ))}
      </div>
      <div className="buttons">
        <a className="demo" target="_blank" href={informations.demo}>
          Demo
        </a>
        <a className="source" target="_blank" href={informations.source}>
          Source
        </a>
      </div>
    </Container>
  )
}
