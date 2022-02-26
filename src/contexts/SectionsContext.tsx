import { createContext, RefObject } from 'react'

interface SectionsContextProps {
  wrapperRef: React.RefObject<HTMLElement>
  sectionsRefs: React.RefObject<HTMLElement>[]
  registerSection: (ref: RefObject<HTMLDivElement>) => void
}

export const SectionsContext = createContext({} as SectionsContextProps)
