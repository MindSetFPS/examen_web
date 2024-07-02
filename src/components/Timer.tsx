import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

interface TimerProps {
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setRunning] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning && time > 0) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setRunning(false);
      setRedirect(true);
    }
    return () => window.clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(initialTime);
    setRedirect(false);
  };

  if (redirect) {
    return <Navigate to="/results" />;
  }

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
