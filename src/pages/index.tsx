import type { NextPage } from 'next'
import Head from 'next/head'

import { SectionWrapper } from '../components/SectionWrapper'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Souza&apos;s Website</title>
        <meta name="description" content="Ryan Souza's Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <SectionWrapper />
      </main>
    </div>
  )
}

export default Home
