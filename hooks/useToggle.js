import { useState, useCallback } from 'react';

const useToggle = (startState = false) => {
  const [isPositive, setIsPositive] = useState(startState);

  const handlePositive = useCallback(() => {
    setIsPositive(true);
  }, []);

  const handleNegative = useCallback(() => {
    setIsPositive(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsPositive(!isPositive);
  }, [isPositive]);

  return {
    isPositive,
    handlePositive,
    handleNegative,
    handleToggle,
  };
};

export default useToggle;
