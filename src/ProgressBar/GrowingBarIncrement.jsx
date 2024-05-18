import { useEffect, useRef, useState } from "react";
import "./common-styles.css";
import { INTERVAL_TIME, MAX_NUM } from "./constants";

const GrowingBarIncrement = () => {
  const [progress, setProgress] = useState(0);
  let intervalRef = useRef(null);

  const incrementProgress = () => {
    setProgress((prev) => {
      if (prev < MAX_NUM) {
        return prev + 1;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return prev;
      }
    });
  };

  const handleProgressButton = () => {
    if (intervalRef.current === null && progress < MAX_NUM) {
      intervalRef.current = setInterval(incrementProgress, INTERVAL_TIME);
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
        1 <code>{"<div>"}</code> that grows 10% increments
      </h3>
      <div className="grow-container">
        <div className="grow-box" style={{ width: `${progress * 10}%` }}></div>
        <div className="grow-overlay">
          <p>{progress * 10}%</p>
        </div>
      </div>

      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Start </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default GrowingBarIncrement;
