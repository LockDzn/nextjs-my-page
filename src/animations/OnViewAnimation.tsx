import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface OnViewAnimationProps {
  aimateDelay?: number
  children?: React.ReactNode
  className?: string
}

export function OnViewAnimation({
  children,
  aimateDelay = 0.8,
  className,
}: OnViewAnimationProps) {
  const { inView, ref } = useInView()
  const animationControl = useAnimation()

  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: aimateDelay,
      },
    })
  }

  return (
    <motion.div
      initial={{
        y: 10,
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  )
}
