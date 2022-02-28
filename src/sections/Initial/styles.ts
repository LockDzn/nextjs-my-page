import { styled, keyframes } from '../../styles/stitches.config'
import { motion } from 'framer-motion'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 2rem;',
  height: '100%',
})

export const LeftSide = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',

  '@bp1': {
    width: '100%',
  },
})

export const Header = styled('div', {
  fontSize: '20px',
  marginBottom: '1rem',
})

export const Name = styled(motion.h1, {
  color: '$white1',
  fontSize: '28px',
  margin: '0',
  '@bp1': {
    width: '100%',
  },
})

export const Description = styled('p', {
  fontSize: '20px',
  width: '24rem',
  marginBottom: '1rem',

  '@bp1': {
    width: '100%',
  },
})

export const Social = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const IconLink = styled(motion.a, {
  color: '$blue1',
  cursor: 'pointer',
  transition: 'color 0.4s ease-out',
  '&:hover': {
    color: '$pink1',
  },
})

export const RightSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  filter: 'blur(8px)',

  '@bp1': {
    display: 'none',
  },
})

export const Blackrole = styled(motion.div, {
  display: 'flex',
  borderRadius: '50%',

  filter: 'blur(8px)',
  width: '280px',
  height: '280px',
  boxShadow: `1vmin 0 3vmin 2vmin $pinkTransparent1, inset -1vmin 0 3vmin 4vmin $blue1, -4vmin 0 35vmin 0 $blueTransparent1`,
})

const roleRotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(-360deg)' },
})
