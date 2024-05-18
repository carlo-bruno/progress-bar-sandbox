import { useEffect, useRef, useState } from "react";
import "./common-styles.css";
import { INTERVAL_TIME, MAX_NUM } from "./constants";

const GridSpanInterval = () => {
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
        Grid & 1 <code>{"<div>"}</code> that spans 10 columns
      </h3>
      <div className="progressBar-grid box">
        <div
          className={` ${progress > 0 ? "green" : ""}`}
          style={{ gridColumn: `1 / span ${progress}` }}
        ></div>
        <p className="progress-overlay">{progress * 10}%</p>
      </div>

      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Start </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default GridSpanInterval;
