import { createRef, LegacyRef, RefObject, useContext, useEffect } from 'react'
import { motion, useTransform } from 'framer-motion'
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaEnvelope,
} from 'react-icons/fa'

import { useWrapperScroll } from '../../hooks/useWrapperScroll'

import { Section } from '../../components/Section'
import { GradientText } from '../../components/GradientText'
import { IconLink } from '../../components/IconLink'

import styles from './styles.module.css'
import { SectionsContext } from '../../contexts/SectionsContext'
import { OnViewAnimation } from '../../animations/OnViewAnimation'

export function InitialSection() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.left}>
          <OnViewAnimation aimateDelay={0.1}>
            <div className={styles.header}>
              <motion.h1
                className={styles.name}
                whileHover={{ letterSpacing: '10px' }}
              >
                Ryan Souza
              </motion.h1>
              <GradientText
                className={styles.workAreas}
                text="Web developer & UX/UI Designer"
              />
            </div>
            <p className={styles.description}>
              Developer specialized in creating interfaces so that users have
              the best experience.
            </p>
            <div className={styles.social}>
              <IconLink link="https://twitter.com/nuLoki_">
                <FaTwitter size={28} />
              </IconLink>
              <IconLink link="https://github.com/LockDzn">
                <FaGithub size={28} />
              </IconLink>
              <IconLink link="https://www.linkedin.com/in/ryanssouza/">
                <FaLinkedin size={28} />
              </IconLink>
              <IconLink link="https://www.twitch.tv/nuloki_">
                <FaTwitch size={28} />
              </IconLink>
              <IconLink link="mailto:eu.ryansouza@gmail.com">
                <FaEnvelope size={28} />
              </IconLink>
            </div>
          </OnViewAnimation>
        </div>
        <div className={styles.right}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.div
              className={styles.blackRole}
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
