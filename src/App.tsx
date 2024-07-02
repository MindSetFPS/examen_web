import { useState } from "react";
import { Test } from "./components/Test";
import { ResultScreen } from "./components/ResultScreen";

const App = (): JSX.Element => {
  const [testFinished, setTestFinished] = useState<Boolean>(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Examen en Línea</h1>

        {testFinished ? (
          <ResultScreen
            totalCorrect={0}
            totalQuestions={0}
            onRetry={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ) : (
          <Test />
        )}
      </div>
    </div>
  );
};

export default App;
