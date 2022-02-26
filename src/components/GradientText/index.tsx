import styles from './styles.module.css'

interface GradientTextProps extends React.HTMLProps<HTMLHeadingElement> {
  text: string
}

export function GradientText({ text, ...rest }: GradientTextProps) {
  return (
    <div className={styles.container}>
      <h2 {...rest}>{text}</h2>
    </div>
  )
}
