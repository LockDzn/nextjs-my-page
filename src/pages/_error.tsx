import { NextPageContext } from 'next'

import { GradientText } from '../components/GradientText'

import { Container } from '../styles/errorPage'

interface ErrorProps {
  statusCode: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Container>
      <GradientText size={64} text={`${statusCode}`} />
      <h2>This page could not be found.</h2>
    </Container>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
