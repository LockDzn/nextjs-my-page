import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

export function Header() {
  const router = useRouter()

  const tabs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Posts',
      path: '/posts',
    },
  ]

  return (
    <header className={`${styles.container} ${styles.blur}`}>
      <ul className={styles.list}>
        {tabs.map((item, itemId) => (
          <Link key={itemId} href={item.path} passHref>
            <li
              className={`${styles.link} ${
                item.path === router.pathname ? styles.selected : ''
              }`}
            >
              {item.name}
              {item.path === router.pathname ? (
                <motion.div className={styles.underline} layoutId="underline" />
              ) : null}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  )
}
