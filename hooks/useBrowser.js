import { useState, useEffect } from 'react'

const useBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return isBrowser
}

export default useBrowser