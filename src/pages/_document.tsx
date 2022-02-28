import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/stitches.config'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Roboto:wght@300;400;700&family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
