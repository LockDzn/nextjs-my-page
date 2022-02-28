import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray1: 'hsl(200deg 6% 10%)',
      gray2: 'hsl(200deg 6% 12%)',
      gray3: 'hsl(200deg 6% 16%)',
      gray4: 'hsl(200deg 6% 20%)',
      gray5: 'hsl(200deg 6% 26%)',

      white1: 'hsl(0deg 0% 97%)',
      white2: 'hsl(0deg 0% 95%)',
      white3: 'hsl(0deg 0% 88%)',
      white4: 'hsl(0deg 0% 83%)',
      white5: 'hsl(0deg 0% 77%)',

      blue1: 'hsl(192deg 100% 50%)',
      blue2: 'hsl(192deg 100% 48%)',
      blue3: 'hsl(192deg 100% 45%)',
      blue4: 'hsl(192deg 100% 42%)',
      blue5: 'hsl(192deg 100% 37%)',

      pink1: 'hsl(336deg 80% 58%)',
      pink2: 'hsl(336deg 80% 56%)',
      pink3: 'hsl(336deg 80% 53%)',
      pink4: 'hsl(336deg 80% 49%)',
      pink5: 'hsl(336deg 80% 44%)',

      pinkShadow: 'rgba(233, 61, 130, 0.85)',
    },
    shadows: {
      blue1: 'hsl(192deg 100% 50%)',
      pink2: 'hsl(336deg 80% 58%)',
      blueTransparent1: 'rgb(0 205 255 / 30%)',
      pinkTransparent1: 'rgb(233 61 130 / 50%)',
    },
    fonts: {
      untitled: 'Ubuntu, Roboto, sans-serif',
      mono: 'Fira mono, monospace',
    },
  },
  media: {
    bp1: '(max-width: 600px)',
  },
})
