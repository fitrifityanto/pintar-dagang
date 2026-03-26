"use client";
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const item = window.localStorage.getItem(key);
      if (item) setStoredValue(JSON.parse(item));
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  useEffect(() => {
    if (isMounted) {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue, isMounted]);

  return [storedValue, setStoredValue] as const;
}
