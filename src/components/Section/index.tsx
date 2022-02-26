import { useContext, useEffect, useRef } from 'react'

import { SectionsContext } from '../../contexts/SectionsContext'

import styles from './styles.module.css'

interface SectionProps {
  children?: React.ReactNode
}

export function Section({ children }: SectionProps) {
  const { registerSection } = useContext(SectionsContext)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerSection(sectionRef)
  }, [])

  return (
    <section ref={sectionRef} className={styles.container}>
      {children}
    </section>
  )
}
