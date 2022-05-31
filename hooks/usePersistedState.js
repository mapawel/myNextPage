import { useState } from 'react';

const usePersistedState = (initialState, name) => {
  const getInitialState = () => {
    try {
      const item = window.localStorage.getItem(name);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  };

  const [state, setState] = useState(getInitialState());

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      window.localStorage.setItem(name, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(error);
    }
  };

  return [state, setValue];
};
// TODO czyszczenie stanu przy wylogowywaniu!
export default usePersistedState;
