import { OnViewAnimation } from '../animations/OnViewAnimation'
import { styled } from './stitches.config'

export const Container = styled('main', {
  height: '100vh',
  padding: '5rem 8rem',

  h1: {
    marginBottom: '1rem',
  },

  '@bp1': {
    padding: '5rem 1rem',
  },
})

export const PostList = styled('div', {
  width: '100%',
})

export const Link = styled('a', {
  textDecoration: 'none',
})

export const Post = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  textDecoration: 'none',

  background: '$gray1',
  color: '$white1',
  border: '1px solid hsl(200deg 6% 26% / 20%)',
  borderRadius: '8px',

  padding: '1rem',

  cursor: 'pointer',

  '&:hover': {
    background:
      'linear-gradient(to right, rgb(0 205 255 / 10%), rgb(233 61 130 / 10%))',
  },

  '@bp1': {
    padding: '1rem 0.5rem',
  },
})

export const Title = styled('strong', {
  fontSize: ' 18px',
  fontWeight: 'bold',
})

export const Description = styled('p', {
  color: '$white3',
  opacity: 0.8,
})

export const Date = styled('span', {
  color: '$white5',
  opacity: 0.6,
})
