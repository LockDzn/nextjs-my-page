import { Header, Main, SectionHome, SectionPortfolio } from '../styles/Home'

import Card from '../components/Card'

import portifolioData from '../portifolio.json'

export default function Home({ user }) {
  return (
    <>
      <Header>
        <ul className="itens">
          <div className="title">
            <li>
              <h1>eu.ryansouza@gmail.com</h1>
            </li>
          </div>
          <div className="resto">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
              >
                Contato
              </a>
            </li>
            <li>
              <a href="">Page</a>
            </li>
          </div>
        </ul>
      </Header>
      <Main>
        <SectionHome>
          <div className="container">
            <img src={user.avatar_url} alt="Foto de Ryan" width="200" />
            <div className="texts">
              <h1>
                Eu sou o <span className="title-blue">{user.name}</span>
              </h1>
              <p>{user.bio}</p>
            </div>
          </div>
        </SectionHome>
        <SectionPortfolio>
          <div className="cards">
            {portifolioData.map((portifolio, index) => (
              <Card informations={portifolio} key={index} />
            ))}
          </div>
        </SectionPortfolio>
      </Main>
    </>
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
