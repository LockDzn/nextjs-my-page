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