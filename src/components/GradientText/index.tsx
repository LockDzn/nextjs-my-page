import { Container, Text } from './styles'

interface GradientTextProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string
  size?: number
}

export function GradientText({ text, size = 28 }: GradientTextProps) {
  return (
    <Container>
      <Text css={{ fontSize: size }}>{text}</Text>
    </Container>
  )
}
