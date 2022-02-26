import { useMotionValue } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { SectionsContext } from '../contexts/SectionsContext'

export function useWrapperScroll() {
  const { wrapperRef, sectionsRefs } = useContext(SectionsContext)

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)
  const averageSectionSize = useMotionValue(0)

  useEffect(() => {
    const element = wrapperRef?.current

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop)
        scrollYProgress.set(scrollTop / fullScroll)
        averageSectionSize.set(fullScroll / sectionsRefs.length)
      }

      element.addEventListener('scroll', updateScrollValue)

      return () => element?.removeEventListener('scroll', updateScrollValue)
    }
  }, [wrapperRef, sectionsRefs])

  useEffect(() => {
    const element = wrapperRef?.current

    if (element) {
      const { scrollHeight, offsetHeight } = element

      const fullScroll = scrollHeight - offsetHeight
      averageSectionSize.set(fullScroll / sectionsRefs.length)
    }
  }, [wrapperRef, sectionsRefs])

  return { scrollY, scrollYProgress, averageSectionSize }
}
