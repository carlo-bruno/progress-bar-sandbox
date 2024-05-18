import { useState } from "react";
import { MAX_NUM } from "../ProgressBar/constants";
import "./common-styles.css";

const IncrementBar = () => {
  // TODO: props for max number

  const [progress, setProgress] = useState(0);

  const handleProgressButton = () => {
    setProgress((prev) => (prev < MAX_NUM ? prev + 1 : prev));
  };

  const handleResetButton = () => {
    setProgress(0);
  };

  // create array based on progress number
  const progressArr = new Array(MAX_NUM).fill(false);
  for (let i = 0; i < progress; i++) {
    progressArr[i] = true;
  }

  return (
    <main className="progressBar-main">
      <div className="progressBar-grid">
        {progressArr.map((val, i) => (
          <div className={`box ${val ? "green" : ""}`} key={i}>
            {i + 1}
          </div>
        ))}
      </div>

      <div className="progressBar-buttons">
        <button onClick={handleProgressButton}> Increment </button>
        <button onClick={handleResetButton}> Reset </button>
      </div>
    </main>
  );
};

export default IncrementBar;
