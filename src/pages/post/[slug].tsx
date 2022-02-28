import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Moment from 'moment'

import markdownToHtml from '../../lib/markdownToHtml'
import { getPostBySlug, getAllPosts, PostProps } from '../../lib/post'

import {
  Container,
  Content,
  Footer,
  Article,
  Header,
  Title,
} from '../../styles/postPage'

type Props = {
  post: PostProps
  morePosts: PostProps[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <div>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <Article>
              <Head>
                <title>{post.title} — Ryan Souza</title>
                <meta name="description" content={post.description} />
                <link rel="icon" href="/favicon.png" />
              </Head>

              <Header>
                <Title>{post.title}</Title>
              </Header>
              <Content dangerouslySetInnerHTML={{ __html: post.content }} />

              <Footer>
                <span>
                  {Moment(post.date).format('L')} (
                  {Moment(post.date).startOf('day').fromNow()})
                </span>
              </Footer>
            </Article>
          </>
        )}
      </div>
    </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
