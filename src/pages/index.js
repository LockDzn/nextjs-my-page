import { Container, Footer } from '../styles/Home'

import Card from '../components/Card'

import portfolioData from '../portfolio.json'

export default function Home({ user }) {
  return (
    <Container>
      <section className="profile">
        <img src={user.avatar_url} alt="My logo" width="200" />
        <div className="informations">
          <h1 className="name">Ryan Souza</h1>
          <h2 className="nickname blue-text-background">LockDzn</h2>
        </div>
      </section>
      <section className="sociais">
        <a href="https://github.com/lockdzn" target="_blank" className="link">
          <img src="/icons/github.svg" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryanssouza/"
          target="_blank"
          className="link"
        >
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://twitter.com/nuloki_" target="_blank" className="link">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://twitch.tv/nuloki_" target="_blank" className="link">
          <img src="/icons/twitch.svg" alt="Twitch" />
        </a>
      </section>
      <section className="projects">
        <h3 className="blue-text-background">Projetos</h3>
        <div className="list">
          {portfolioData.map((portfolio, index) => (
            <Card informations={portfolio} key={index} />
          ))}
        </div>
      </section>
      <Footer>
        <div className="credits">
          <p>
            Made by <strong className="blue-text-background">Ryan Souza</strong>
          </p>
        </div>
      </Footer>
    </Container>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/lockdzn`)
  const data = await response.json()

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  }
}
