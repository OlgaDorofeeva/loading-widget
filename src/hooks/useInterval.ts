import { useRef, useEffect } from 'react'

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)

      return () => {
        clearInterval(id)
      }
    }
  }, [delay])
}

export default useInterval
