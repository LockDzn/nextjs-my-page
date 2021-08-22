import GlobalStyle from '../styles/globals'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ryan Souza | Portfólio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
