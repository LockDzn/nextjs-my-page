import { motion } from 'framer-motion'
import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '4rem',
  height: '100%',
  textAlign: 'end',
  '&.reverse': {
    textAlign: 'start',
  },
})

export const Split = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  paddingTop: '1.5rem',

  '.reverse &': {
    flexDirection: 'row-reverse',

    '@bp1': {
      flexDirection: 'column',
    },
  },

  '@bp1': {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
    padding: '0 1rem',
  },
})

export const ImageArea = styled('div', {
  width: '400px',
  overflow: 'hidden',

  '@bp1': {
    width: '100%',
  },
})

export const Image = styled(motion.img, {
  background: 'white',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const Information = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 2rem',
  width: '50%',

  '@bp1': {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    padding: 0,
  },
})

export const Type = styled('span', {
  opacity: '0.6',

  '@bp1': {
    fontSize: '14px',
  },
})

export const Title = styled('h1', {
  fontSize: '28px',
  margin: 0,

  '@bp1': {
    fontSize: '18px',
  },
})

export const Description = styled('p', {
  fontSize: '18px',
  margin: 0,

  '@bp1': {
    fontSize: '16px',
  },
})

export const Links = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem',
  marginTop: '1.5rem',

  '.reverse &': {
    justifyContent: 'flex-start',

    '@bp1': {
      justifyContent: 'center',
    },
  },

  '@bp1': {
    justifyContent: 'center',
  },
})

export const Link = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  height: '3rem',
  minWidth: '8rem',

  border: 0,
  padding: '0.4rem',

  background: '$blue1',
  color: '$gray1',

  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',

  cursor: 'pointer',
  transition: 'all 1.5s ease',
  textDecoration: 'none',

  '&:hover': {
    boxShadow: '5px 5px 50px -5px $colors-pink1',
    '-webkit-box-shadow': '5px 5px 50px -5px $colors-pink1',
  },

  '&.outline': {
    background: 'transparent',
    color: '$blue1',
    border: '2px solid $blue1',
    '&:hover': {
      boxShadow:
        '0px 0px 50px -10px $colors-pink1, inset 0px 0px 50px -20px $colors-pink1',
      '-webkit-box-shadow':
        '0px 0px 50px -10px $colors-pink1, inset 0px 0px 50px -20px $colors-pink1',
    },
  },
})
