import { useEffect, useState } from 'react'
import usePersistedState from "hooks/usePersistedState"

const useEffectPersistedState = (start, name) => {
  const [persistedState, setPersistedState] = usePersistedState(start, name)
  const [state, setState] = useState()

  const handleChange = (x) => {
    setPersistedState(x)
  }

  useEffect(() => {
    setState(persistedState)
  }, [persistedState])

  return {
    handleChange,
    state,
  }
}

export default useEffectPersistedState