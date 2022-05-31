import { useEffect, useState } from 'react'
import usePersistedState from "hooks/usePersistedState"

const useMainConsents = () => {
  const [isParsistedAccepted, setPersistedAccepted] = usePersistedState(false, 'mainConsents')
  const [isAccepted, setAccepted] = useState()

  const handleAccept = () => {
    setPersistedAccepted(true)
  }

  useEffect(() => {
    setAccepted(isParsistedAccepted)
  }, [isParsistedAccepted])

  return {
    handleAccept,
    isAccepted,
  }
}

export default useMainConsents