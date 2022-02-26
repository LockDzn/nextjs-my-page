import { useContext } from 'react'
import { SectionsContext } from '../contexts/SectionsContext'

export function useSection() {
  const { sectionsRefs, wrapperRef } = useContext(SectionsContext)

  return { sectionsRefs, wrapperRef }
}
