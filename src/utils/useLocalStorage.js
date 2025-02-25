import { useState, useEffect } from 'react';

//Retrieves a stored value from localStorage
function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  // Initialize state with value from localStorage or default
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
