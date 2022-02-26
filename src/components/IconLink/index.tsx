import { motion } from 'framer-motion'
import { ReactElement } from 'react'

import styles from './styles.module.css'

interface IconButtonProps {
  link: string
  children: React.ReactNode
}

export function IconLink({ children, link }: IconButtonProps) {
  const sideToTurn = Math.floor(Math.random() * 2) == 0 ? 10 : -10

  return (
    <motion.a
      className={styles.container}
      href={link}
      target="_blank"
      whileHover={{ scale: 1.5, rotate: sideToTurn }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}
