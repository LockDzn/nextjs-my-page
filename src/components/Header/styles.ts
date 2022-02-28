import { styled } from '../../styles/stitches.config'
import { motion } from 'framer-motion'

export const Container = styled('header', {
  display: 'flex;',
  justifyContent: 'center;',

  position: 'fixed',
  zIndex: '1',

  width: '100%',

  padding: '5px 0',

  background: 'rgb(25 27 28 / 50%)',
  backdropFilter: 'blur(3px)',
  '-webkit-backdrop-filter': 'blur(3px)',

  transition: 'all 1s linear',
})

export const List = styled('ul', {
  display: 'flex',
  gap: '1rem',
  listStyle: 'none',
  margin: '0',
  padding: '0',
})

export const Item = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  fontWeight: 'bold',
  alignItems: 'center',

  padding: '1rem',

  borderRadius: '4px',

  cursor: 'pointer',
  transition: 'color 1s linear',
  '&:hover': {
    color: '$gray1',
  },
  '&.selected': {
    color: '$gray1',
  },
})

export const Underline = styled(motion.div, {
  position: 'absolute',
  height: '2.5rem',
  width: '70px',
  zIndex: '-1',

  background: '$blue1',
  boxShadow: '0px 0px 60px 2px $pinkShadow',
  '-webkit-box-shadow': '0px 0px 60px 2px $colors-pinkShadow',
})
