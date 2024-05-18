import { useEffect, useRef, useState } from "react";
import "./common-styles.css";
import { INTERVAL_TIME } from "./constants";

const GrowingBarPercent = () => {
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

  const handleProgressButton = () => {
    if (intervalRef.current === null && progress < MAX_PERCENT) {
      intervalRef.current = setInterval(incrementProgress, INTERVAL_TIME / 10);
    }
    return () => clearInterval(intervalRef.current);
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
      <h3>
        1 <code>{"<div>"}</code> that grows 1% increments
      </h3>
      <div className="grow-container">
        <div className="grow-box" style={{ width: `${progress}%` }}></div>
        <div className="grow-overlay">
          <p>{progress}%</p>
        </div>
      </div>
      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Start </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default GrowingBarPercent;
