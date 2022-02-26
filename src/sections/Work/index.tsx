import { motion, useAnimation, useDomEvent } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { OnViewAnimation } from '../../animations/OnViewAnimation'

import { Section } from '../../components/Section'

import exempleImage from '../../../public/assets/teste.png'

import styles from './work.module.css'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

interface WorkSectionProps {
  reverse?: boolean
  workData: {
    title: string
    description: string
    imageURL: string
    type: string
    demoURL: string
    githubURL: string
  }
}

export function WorkSection({ reverse = false, workData }: WorkSectionProps) {
  return (
    <Section>
      <div className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.split}>
          <OnViewAnimation className={styles.imageArea}>
            <motion.img
              src={workData.imageURL}
              alt=""
              className={styles.image}
              whileHover={{ scale: 1.2 }}
            />
          </OnViewAnimation>
          <OnViewAnimation className={styles.information} aimateDelay={1.4}>
            <span className={styles.type}>{workData.type}</span>
            <h2 className={styles.title}>{workData.title}</h2>
            <p className={styles.description}>{workData.description}</p>
            <div className={styles.links}>
              {workData.githubURL.trim() && (
                <a
                  href={workData.githubURL}
                  target="_blank"
                  className={styles.link}
                >
                  On Github
                  <FaGithub size={18} />
                </a>
              )}
              {workData.demoURL.trim() && (
                <a
                  href={workData.demoURL}
                  target="_blank"
                  className={styles.linkOutline}
                >
                  Demo
                  <FaArrowRight size={18} />
                </a>
              )}
            </div>
          </OnViewAnimation>
        </div>
      </div>
    </Section>
  )
}
