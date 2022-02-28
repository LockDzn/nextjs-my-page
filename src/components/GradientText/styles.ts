import { keyframes, styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  fontSize: '42px',
  fontWeight: 'bold',
})

const Shine = keyframes({
  to: {
    backgroundPosition: '200% center',
  },
})

export const Text = styled('h2', {
  color: '#000',
  margin: 0,

  backgroundClip: 'text',
  backgroundSize: '200% auto',
  fontSize: '20px',
  '-webkit-text-fill-color': 'transparent',
  '-webkit-background-clip': 'text',

  animation: `${Shine} 3s linear infinite`,

  backgroundImage:
    'linear-gradient(to right, $blue1 20%, $pink1 40%, $pink1 60%, $blue1 80%)',
})
