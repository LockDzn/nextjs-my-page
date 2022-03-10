import { styled } from '../../styles/stitches.config'

export const Container = styled('header', {})

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