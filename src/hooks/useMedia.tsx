import { useCallback, useEffect, useState } from 'react'

type Keys = 'minWidth' | 'maxWidth'
type Query = Record<string, number>

export const useMedia = (query: Query) => {
  const getMatch = useCallback(() => {
    const minValue = query['minWidth']
    const maxValue = query['maxWidth']
    let match = false
    if (minValue) {
      match = window.innerWidth >= minValue
    }
    if (maxValue) {
      match = window.innerWidth <= minValue
    }
    return match
  }, [])
  const [isMatch, setIsMatch] = useState(getMatch())

  const handleResize = useCallback(() => setIsMatch(getMatch()), [getMatch])

  useEffect(() => {
    window.addEventListener('resize', () => handleResize())
    return () => {
      window.removeEventListener('resize', () => handleResize())
    }
  }, [handleResize])

  return isMatch
}
