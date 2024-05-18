import { useEffect, useRef, useState } from "react";
import "./common-styles.css";
import { INTERVAL_TIME } from "./constants";

const GrowingBarPause = () => {
  const MAX_PERCENT = 100;
  const [progress, setProgress] = useState(0);
  let intervalRef = useRef(null);

  const incrementProgress = () => {
    setProgress((prev) => {
      if (prev < MAX_PERCENT) {
        return prev + 1;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return prev;
      }
    });
  };

  const getLogarithmicValue = (value) => {
    const logValue = (
      (Math.log(value + 1) / Math.log(MAX_PERCENT)) *
      100
    ).toFixed(2);
    return logValue < 100 ? logValue : 100;
  };

  const handleProgressButton = () => {
    if (intervalRef.current === null && progress < MAX_PERCENT) {
      intervalRef.current = setInterval(incrementProgress, INTERVAL_TIME / 5);
    }
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  };

  // this works because the interval will start where progress is at
  const handlePauseButton = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleResetButton = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setProgress(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <main className="progressBar-main">
      <h3>Linear and Logarithmic Progress bar</h3>
      <div className="grow-container">
        <div className="grow-box" style={{ width: `${progress}%` }}></div>
        <div className="grow-overlay">
          <p>{progress}%</p>
        </div>
      </div>

      <div className="grow-container">
        <div
          className="grow-box"
          style={{ width: `${getLogarithmicValue(progress)}%` }}
        ></div>
        <div className="grow-overlay">
          <p>{getLogarithmicValue(progress)}%</p>
        </div>
      </div>

      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Start </button>
        <button onClick={handlePauseButton}> Pause </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default GrowingBarPause;
