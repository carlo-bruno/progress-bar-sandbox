import "./App.css";
import GridSpanInterval from "./ProgressBar/GridSpanInterval";
import GrowingBarIncrement from "./ProgressBar/GrowingBarIncrement";
import GrowingBarPercent from "./ProgressBar/GrowingBarPercent";
import IncrementBar from "./ProgressBar/IncrementBar";
import IncrementBarInterval from "./ProgressBar/IncrementBarInterval";
import LinearLogarithmic from "./ProgressBar/LinearLogarithmic";

function App() {
  return (
    <>
      <h1>Progress Bars</h1>

      <IncrementBar />
      <IncrementBarInterval />
      <GridSpanInterval />
      <GrowingBarIncrement />
      <GrowingBarPercent />
      <LinearLogarithmic />
    </>
  );
}

export default App;
