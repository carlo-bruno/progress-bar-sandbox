import { useEffect, useRef, useState } from "react";
import "./common-styles.css";
import { INTERVAL_TIME, MAX_NUM } from "./constants";

const IncrementBarInterval = () => {
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

  // create array based on progress number
  const progressArr = new Array(MAX_NUM).fill(false);
  for (let i = 0; i < progress; i++) {
    progressArr[i] = true;
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <main className="progressBar-main">
      <h3>Incremental Progress Bar with Interval</h3>
      <div className="progressBar-grid">
        {progressArr.map((val, i) => (
          <div className={`box ${val ? "green" : ""}`} key={i}>
            {i + 1}
          </div>
        ))}
      </div>

      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Start </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default IncrementBarInterval;
