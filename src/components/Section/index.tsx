import { Container } from './styles'

interface SectionProps {
  children?: React.ReactNode
}

export function Section({ children }: SectionProps) {
  return <Container>{children}</Container>
}
