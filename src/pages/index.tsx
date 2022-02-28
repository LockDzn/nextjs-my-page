import Head from 'next/head'

import { InitialSection } from '../sections/Initial'
import { WorkSection } from '../sections/Work'

import { Container } from '../styles/homePage'

import works from '../works.json'

function Home() {
  return (
    <Container>
      <Head>
        <title>Ryan Souza&apos;s Website</title>
        <meta name="description" content="Ryan Souza's Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <div className="sections">
          <InitialSection />
          {works.map((work, index) => (
            <WorkSection
              key={index}
              reverse={index % 2 == 0 ? false : true}
              workData={work}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}

export default Home
