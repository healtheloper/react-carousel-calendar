import { useRef } from 'react';

export const useThrottle = (callback, delay) => {
  const timer = useRef(null);
  return (...args) => {
    if (!timer.current) {
      callback(...args);
      timer.current = setTimeout(() => {
        timer.current = null;
      }, delay);
    }
  };
};
