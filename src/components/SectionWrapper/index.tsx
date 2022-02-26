import { RefObject, useContext, useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { InitialSection } from '../../sections/Initial'

import { SectionsContext } from '../../contexts/SectionsContext'

import { useWrapperScroll } from '../../hooks/useWrapperScroll'
import { useSection } from '../../hooks/useSections'
import { WorkSection } from '../../sections/Work'

import works from '../../works.json'
import styles from './styles.module.css'

export function SectionWrapper() {
  const [sectionsRefs, setSectionsRefs] = useState<RefObject<HTMLElement>[]>([])

  const wrapperRef = useRef<HTMLDivElement>(null)

  function registerSection(ref: RefObject<HTMLDivElement>) {
    setSectionsRefs((oldRefs) => [...oldRefs, ref])
  }

  return (
    <SectionsContext.Provider
      value={{
        wrapperRef,
        sectionsRefs,
        registerSection,
      }}
    >
      <div ref={wrapperRef} className={styles.container}>
        <div>
          <InitialSection />
          {works.map((work, index) => (
            <WorkSection
              key={index}
              reverse={index % 2 == 0 ? false : true}
              workData={work}
            />
          ))}
          <ArrowScroll />
        </div>
      </div>
    </SectionsContext.Provider>
  )
}

function ArrowScroll() {
  const { wrapperRef } = useContext(SectionsContext)
  const { sectionsRefs } = useSection()
  const { scrollYProgress, scrollY, averageSectionSize } = useWrapperScroll()

  const [thereIsSectionAbove, setThereIsSectionAbove] = useState(false)
  const [thereIsSectionBelow, setThereIsSectionBelow] = useState(false)
  const [currentScrolY, setCurrentScrolY] = useState(0)
  const [sectionSize, setSectionSize] = useState(0)

  scrollY.onChange((y) => {
    if (currentScrolY == 0) {
      setCurrentScrolY(y)
    }
  })
  averageSectionSize.onChange((value) => setSectionSize(value))

  useEffect(() => {
    setThereIsSectionBelow(sectionsRefs.length <= 1 ? false : true)
  }, [sectionsRefs])

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (sectionsRefs.length <= 1) return

      if (value == 0) {
        setThereIsSectionAbove(false)
        setThereIsSectionBelow(true)
      } else if (value == 1) {
        setThereIsSectionAbove(true)
        setThereIsSectionBelow(false)
      } else {
        setThereIsSectionAbove(true)
        setThereIsSectionBelow(true)
      }
    })

    return () => scrollYProgress.clearListeners()
  })

  function goToNextSection() {
    const scroll = currentScrolY + sectionSize
    setCurrentScrolY(scroll)
    wrapperRef.current?.scroll({ top: scroll, behavior: 'smooth' })
  }

  function goToPreviousSection() {
    const scroll = currentScrolY - sectionSize
    setCurrentScrolY(scroll)
    wrapperRef.current?.scroll({ top: scroll, behavior: 'smooth' })
  }

  const variants = {
    have: { x: 0, scale: 1 },
    notHave: { x: 100, scale: 1 },
  }

  return (
    <div className={styles.pageScroll}>
      <motion.div
        variants={variants}
        animate={thereIsSectionAbove ? 'have' : 'notHave'}
        whileHover={{
          scale: 1.5,
          y: -5,
        }}
        whileTap={{ scale: 1 }}
        className="top"
        onClick={goToPreviousSection}
      >
        <FaArrowUp />
      </motion.div>
      <motion.div
        variants={variants}
        animate={thereIsSectionBelow ? 'have' : 'notHave'}
        whileHover={{
          scale: 1.5,
          y: 5,
        }}
        whileTap={{ scale: 1 }}
        className="down"
        onClick={goToNextSection}
      >
        <FaArrowDown />
      </motion.div>
    </div>
  )
}
