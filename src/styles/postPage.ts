import { styled } from './stitches.config'

export const Container = styled('div', {
  padding: '5rem 0',
})

export const Article = styled('article', {
  margin: '0 8rem',
  padding: '1rem 2rem',

  borderRadius: '8px',

  color: '$white4',
  border: '1px solid rgb(248 248 248 / 10%)',

  '@bp1': {
    margin: '0 0.5rem',
    padding: '1rem 0.5rem',
  },
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const Title = styled('h1', {
  fontSize: ' 32px',
  color: '$white1',
})

export const Content = styled('div', {
  color: '$white1',

  p: {
    margin: '1.5rem 0',
  },

  h1: {
    color: '$white1',
  },
  h2: {
    color: '$white1',
  },
  h3: {
    color: '$white1',
  },
  img: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  a: {
    color: '$blue1',
    textDecoration: 'underline',
  },
  code: {
    padding: '0.1rem 0.4rem',
    borderRadius: '4px',
    background: '$gray4',
    color: '$white3',
    fontFamily: '$mono',
  },
  pre: {
    background:
      'linear-gradient(to right, hsl(192deg 100% 50% / 5%), hsl(336deg 80% 58% / 5%))',
    padding: '0.5rem',
    borderRadius: '8px',
    fontSize: '16px',
    margin: '1.5rem 0',

    code: {
      padding: 0,
      borderRadius: 0,
      background: 'none',
      span: {
        color: '$blue1',
      },
    },
  },

  blockquote: {
    opacity: 0.9,
    padding: '0.4rem',
    borderRadius: '8px',
    borderLeft: '4px solid $gray5',
    margin: '1rem 2rem',

    p: {
      margin: '1rem 0',
    },
  },

  ul: {
    margin: '1.5rem 2rem',
  },
})

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  padding: '1rem 0',
  borderTop: '1px solid rgb(248 248 248 / 10%)',
})
