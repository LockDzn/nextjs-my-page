import { globalCss, css } from './stitches.config'

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    background: '$gray1',
    color: '$white2',
    fontFamily: '$untitled',
    fontSize: '16px',
  },
  '::-webkit-scrollbar': { width: '5px' },
  '::-webkit-scrollbar-track': { background: 'transparent' },
  '::-webkit-scrollbar-thumb': {
    background: 'hsl(192deg 100% 50%)',
    borderRadius: '12px',
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: 'hsl(336deg 80% 58%)',
  },
})
