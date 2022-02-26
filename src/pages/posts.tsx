import Head from 'next/head'
import Moment from 'moment'
import { OnViewAnimation } from '../animations/OnViewAnimation'
import { getAllPosts, PostProps } from '../lib/post'

import styles from '../styles/Posts.module.css'

interface Props {
  allPosts: PostProps[]
}

const Posts = ({ allPosts }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Souza's Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.posts}>
          {allPosts.map((post, index) => (
            <OnViewAnimation key={index} className={styles.postWrapper}>
              <a href={`../post/${post.slug}`}>
                <div className={styles.post}>
                  <strong className={styles.title}>{post.title}</strong>
                  <p className={styles.description}>{post.description}</p>
                  <span className={styles.date}>
                    {Moment(post.date).format('LL')}
                  </span>
                </div>
              </a>
            </OnViewAnimation>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description'])

  return {
    props: { allPosts },
  }
}
