'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTimerReturn {
  timeLeft: number;
  isRunning: boolean;
  isExpired: boolean;
  startTimer: (seconds: number) => void;
  pauseTimer: () => void;
  resetTimer: (seconds: number) => void;
  addTime: (seconds: number) => void;
  removeTime: (seconds: number) => void;
}

export function useTimer(): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return clearTimerInterval;
  }, [isRunning, timeLeft > 0, clearTimerInterval]);

  const startTimer = useCallback((seconds: number) => {
    clearTimerInterval();
    setTimeLeft(seconds);
    setIsRunning(true);
    setIsExpired(false);
  }, [clearTimerInterval]);

  const pauseTimer = useCallback(() => {
    clearTimerInterval();
    setIsRunning(false);
  }, [clearTimerInterval]);

  const resetTimer = useCallback((seconds: number) => {
    clearTimerInterval();
    setTimeLeft(seconds);
    setIsRunning(false);
    setIsExpired(false);
  }, [clearTimerInterval]);

  const addTime = useCallback((seconds: number) => {
    setTimeLeft((prev) => prev + seconds);
  }, []);

  const removeTime = useCallback((seconds: number) => {
    setTimeLeft((prev) => Math.max(0, prev - seconds));
  }, []);

  return {
    timeLeft,
    isRunning,
    isExpired,
    startTimer,
    pauseTimer,
    resetTimer,
    addTime,
    removeTime,
  };
}
