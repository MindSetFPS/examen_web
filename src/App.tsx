import { useState } from "react";
import { Test } from "./components/Test";
<<<<<<< HEAD
import { ResultScreen } from "./components/ResultScreen";
=======
import { ResultScreen} from "./components/ResultScreen";
>>>>>>> origin/master

const App = (): JSX.Element => {
  const [testFinished, setTestFinished] = useState<Boolean>(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Examen en Línea</h1>

<<<<<<< HEAD
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
=======
        {
          testFinished ? 
            <ResultScreen/> 
            : 
            <Test/>
          }


>>>>>>> origin/master
      </div>
    </div>
  );
};

export default App;
