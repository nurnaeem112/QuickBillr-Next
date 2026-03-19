import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

function useLocalStorage<T,>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  // Use initialValue for the first render on both server and client to avoid hydration mismatch
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  
  // Track if we have already initialized from localStorage
  const [isReady, setIsReady] = useState(false);

  // Initialize from localStorage after the initial mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        if (item) {
          setStoredValue(JSON.parse(item));
        }
        setIsReady(true);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      setIsReady(true);
    }
  }, [key]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);
  
  // This effect synchronizes changes from other tabs.
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        try {
          setStoredValue(JSON.parse(e.newValue || 'null'));
        } catch (error) {
          console.error('Error parsing storage change:', error);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;