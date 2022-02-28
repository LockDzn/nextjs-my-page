import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
