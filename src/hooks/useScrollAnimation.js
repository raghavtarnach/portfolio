import { useRef, useState, useEffect } from 'react'

/**
 * Hook to trigger animations when elements scroll into view
 * @param {number} threshold - IntersectionObserver threshold (0-1). Default: 0.15
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [threshold])

  return [ref, isVisible]
}
