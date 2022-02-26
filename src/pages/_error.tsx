import { NextPageContext } from 'next'

import { GradientText } from '../components/GradientText'

import styles from '../styles/Error.module.css'

interface ErrorProps {
  statusCode: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className={styles.container}>
      <GradientText text={`${statusCode}`} />
      <h2>This page could not be found.</h2>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
