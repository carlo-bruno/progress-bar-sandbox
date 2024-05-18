import "./App.css";
import GridSpanInterval from "./ProgressBar/GridSpanInterval";
import GrowingBarIncrement from "./ProgressBar/GrowingBarIncrement";
import GrowingBarPercent from "./ProgressBar/GrowingBarPercent";
import IncrementBar from "./ProgressBar/IncrementBar";
import IncrementBarInterval from "./ProgressBar/IncrementBarInterval";

function App() {
  return (
    <>
      <h1>Progress Bars</h1>

      <IncrementBar />
      <IncrementBarInterval />
      <GridSpanInterval />
      <GrowingBarIncrement />
      <GrowingBarPercent />
    </>
  );
}

export default App;
